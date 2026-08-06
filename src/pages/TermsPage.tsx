import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang].legal;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-20">
      <SEOHead
        titleEn="Terms of Service | OPROX"
        titleAr="شروط الخدمة | أوب روكس"
        descriptionEn="Read the OPROX Terms of Service governing usage of our platforms and products."
        descriptionAr="اقرأ شروط الخدمة لمنظومة أوب روكس ومنصاتها المختلفة."
        path="/legal/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {c.termsTitle}
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            {c.termsDate}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. Scope & Acceptance</h2>
            <p>
              These Terms of Service govern your access to and use of the OPROX Official Website and its gateway routing to the five independent OPROX products: OPROX OS, OPROX Code, OPROX Studio, OPROX Real Estate, and OPROX Academy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. Acceptable Platform Use</h2>
            <p>
              Users and tenant organizations agree to utilize the platforms in compliance with applicable laws, technical quotas, and security governance standards. Unauthorized reverse engineering or security boundary testing is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. Intellectual Property</h2>
            <p>
              All technology frameworks, logos, and platform architectures are the exclusive property of OPROX. Tenant organizations retain full ownership of their user-generated project data and code assets.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. Governance & Modifications</h2>
            <p>
              OPROX reserves the right to update system specifications and security guardrails to maintain platform stability and compliance.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
