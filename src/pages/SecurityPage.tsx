import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Users, 
  FileText, 
  Cpu, 
  Server,
  AlertCircle
} from 'lucide-react';

export const SecurityPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang].securityPage;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-20">
      <SEOHead
        titleEn="Security & Trust Architecture | OPROX"
        titleAr="الأمان ومعمارية الثقة | أوب روكس"
        descriptionEn="Learn about OPROX zero-trust engineering principles, tenant boundary isolation, RBAC governance, and audit logging."
        descriptionAr="تعرف على مبادئ الأمان الموثوقة لعزل بيانات العملاء، والحوكمة القائمة على الأدوار، وسجلات التدقيق في أوب روكس."
        path="/security"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            {lang === 'ar' ? 'معمارية الأمان والحوكمة' : 'Verifiable Engineering Standards'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {c.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* INTRO BOX */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 mb-16">
          <p className="text-slate-300 text-base leading-relaxed max-w-4xl mx-auto text-center">
            {c.intro}
          </p>
        </div>

        {/* PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {c.pillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* COMPLIANCE & BOUNDARY NOTICE */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400 flex items-start gap-3 max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {lang === 'ar'
              ? 'تنويه أمني: تعتمد أوب روكس على مبادئ هندسية موثقة وقابلة للمراجعة. نحن نبتعد عن الادعاءات المطلقة وتتم المراجعة المستمرة لجميع معايير الحماية والأمان وفق أفضل الممارسات التقنية.'
              : 'Security Note: OPROX relies on transparent, verifiable engineering principles. We refrain from absolute security marketing claims and continuously audit system boundaries according to modern cloud standards.'}
          </p>
        </div>

      </div>
    </div>
  );
};
