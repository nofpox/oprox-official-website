import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang].legal;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-20">
      <SEOHead
        titleEn="Privacy Policy | OPROX"
        titleAr="سياسة الخصوصية | أوب روكس"
        descriptionEn="Read the OPROX Privacy Policy detailing data handling and tenant privacy standards."
        descriptionAr="اقرأ سياسة الخصوصية لـ أوب روكس وتفاصيل معايير حماية البيانات."
        path="/legal/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {c.privacyTitle}
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            {c.privacyDate}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Data Protection Commitment</h2>
            <p>
              At OPROX, we treat data privacy and organizational confidentiality as fundamental engineering principles.
              We enforce strict multi-tenant boundary isolation across all five platforms (OPROX OS, OPROX Code, OPROX Studio, OPROX Real Estate, and OPROX Academy).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Information We Process</h2>
            <p>
              We process account credentials, organizational metadata, usage activity logs, and technical interaction telemetry strictly required to operate and secure our platforms. We do not sell or monetize user data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Tenant Isolation & Security</h2>
            <p>
              Tenant data is isolated logically and cryptographically. Authorization policies prevent cross-tenant data access, and API keys are stored in encrypted backend stores.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Contact & Data Subject Rights</h2>
            <p>
              For privacy inquiries, enterprise data requests, or compliance verification, please reach out via our official contact form.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
