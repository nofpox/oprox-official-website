import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, Cpu, Target, Award, Sparkles, Building } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang].about;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-20">
      <SEOHead
        titleEn="About OPROX | Modern Saudi Technology Enterprise"
        titleAr="عن أوب روكس | شركة التقنية السعودية الحديثة"
        descriptionEn="Learn about OPROX, a Saudi technology company building high-performance independent software platforms."
        descriptionAr="تعرف على أوب روكس، شركة التقنية السعودية التي تطور منصات برمجية مستقلة عالية الأداء."
        path="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            {lang === 'ar' ? 'الرؤية والهدف' : 'Saudi Technological Vision'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {c.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* MISSION */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {c.missionTitle}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {c.missionText}
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            {c.valuesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.v1Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{c.v1Desc}</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.v2Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{c.v2Desc}</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.v3Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{c.v3Desc}</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.v4Title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{c.v4Desc}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
