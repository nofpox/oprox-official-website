/**
 * OPROX Official Website — Production Server
 *
 * Serves the Vite-built SPA from dist/ and handles all API routes.
 * All SPA routes (non-API, non-file paths) return index.html so that
 * React Router's client-side routing works correctly after a hard refresh.
 *
 * Usage:
 *   node server.js             (reads PORT env var, defaults to 3000)
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, existsSync } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';
const DIST = path.join(__dirname, 'dist');

// ── Security headers ──────────────────────────────────────────────────────────
app.use((req, res, next) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  // Prevent MIME sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // XSS protection (legacy browsers)
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Referrer policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Permissions policy
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  // HSTS (production only — not emitted locally to avoid localhost lock-in)
  if (isProd) {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }
  // CSP: allow self-hosted assets + Google Fonts + inline styles for Tailwind
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",  // Vite inlines critical scripts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https:",
      "connect-src 'self' https://generativelanguage.googleapis.com https://api.resend.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );
  next();
});

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigin = process.env.APP_URL || process.env.ALLOWED_ORIGIN;
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!isProd || !allowedOrigin || (origin && origin === allowedOrigin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  next();
});

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '64kb' }));

// ── API: Contact form ─────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, product, message } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ ok: false, error: 'name and email are required' });
    return;
  }

  // Basic email format check
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(String(email))) {
    res.status(400).json({ ok: false, error: 'Invalid email address' });
    return;
  }

  // Log the submission server-side (always)
  const ts = new Date().toISOString();
  console.log(`[contact] ${ts} name="${name}" email="${email}" product="${product || 'general'}" msg_len=${String(message || '').length}`);

  // Optional: send email via Resend if configured
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.SENDER_EMAIL;

  if (resendApiKey && recipientEmail) {
    try {
      const payload = {
        from: process.env.SENDER_EMAIL || 'OPROX Website <noreply@oprox.sa>',
        to: [recipientEmail],
        subject: `[OPROX Website] Inquiry from ${name}${product ? ` — ${product}` : ''}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <table>
            <tr><th align="left">Name</th><td>${String(name).replace(/</g, '&lt;')}</td></tr>
            <tr><th align="left">Email</th><td>${String(email).replace(/</g, '&lt;')}</td></tr>
            ${product ? `<tr><th align="left">Product</th><td>${String(product).replace(/</g, '&lt;')}</td></tr>` : ''}
            ${message ? `<tr><th align="left">Message</th><td>${String(message).replace(/</g, '&lt;').replace(/\n/g, '<br>')}</td></tr>` : ''}
          </table>
          <p style="color:#999;font-size:12px">Submitted at ${ts}</p>
        `.trim(),
      };

      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error(`[contact] Resend error ${emailRes.status}: ${errBody}`);
      }
    } catch (emailErr) {
      console.error('[contact] Email delivery failed (non-fatal):', emailErr);
    }
  }

  res.json({ ok: true });
});

// ── Serve static assets from dist/ ───────────────────────────────────────────
if (!existsSync(DIST)) {
  console.error('[server] ERROR: dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

app.use(express.static(DIST, {
  // Cache static assets aggressively (they have content-hash names from Vite)
  maxAge: isProd ? '1y' : 0,
  // But never cache index.html (it must always be fresh for SPA routing)
  setHeaders(res, filePath) {
    if (filePath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  },
}));

// ── Health endpoint for container orchestration ───────────────────────────────
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'oprox-website' });
});

// ── SPA fallback: all non-API routes return index.html ────────────────────────
const indexHtml = readFileSync(path.join(DIST, 'index.html'), 'utf8');
app.get('*', (req, res) => {
  // Don't serve index.html for API routes that weren't matched above
  if (req.path.startsWith('/api/')) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(indexHtml);
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[server] OPROX Official Website running on http://0.0.0.0:${PORT}`);
  console.log(`[server] NODE_ENV=${process.env.NODE_ENV || 'development'}`);
});
