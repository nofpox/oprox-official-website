import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCT_LINKS } from '../config/productLinks';
import { Cpu, Code2, Layers, Building2, GraduationCap } from 'lucide-react';

export const EcosystemDiagram: React.FC = () => {
  const { lang } = useLanguage();

  const products = [
    { key: 'os', name: lang === 'ar' ? PRODUCT_LINKS.os.nameAr : PRODUCT_LINKS.os.nameEn, path: PRODUCT_LINKS.os.routePath, icon: Cpu, role: lang === 'ar' ? 'التشغيل والحوكمة' : 'Core OS & Governance' },
    { key: 'code', name: lang === 'ar' ? PRODUCT_LINKS.code.nameAr : PRODUCT_LINKS.code.nameEn, path: PRODUCT_LINKS.code.routePath, icon: Code2, role: lang === 'ar' ? 'هندسة البرمجيات' : 'Software Engineering' },
    { key: 'studio', name: lang === 'ar' ? PRODUCT_LINKS.studio.nameAr : PRODUCT_LINKS.studio.nameEn, path: PRODUCT_LINKS.studio.routePath, icon: Layers, role: lang === 'ar' ? 'الابتكار والبناء البصري' : 'Visual Creation' },
    { key: 'realEstate', name: lang === 'ar' ? PRODUCT_LINKS.realEstate.nameAr : PRODUCT_LINKS.realEstate.nameEn, path: PRODUCT_LINKS.realEstate.routePath, icon: Building2, role: lang === 'ar' ? 'تقنيات العقارات' : 'Real Estate Platform' },
    { key: 'academy', name: lang === 'ar' ? PRODUCT_LINKS.academy.nameAr : PRODUCT_LINKS.academy.nameEn, path: PRODUCT_LINKS.academy.routePath, icon: GraduationCap, role: lang === 'ar' ? 'التعليم والمختبرات' : 'Learning & Labs' },
  ];

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-10 my-8 shadow-xl">
      {/* HUB ROOT */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-mono font-extrabold text-lg shadow-lg shadow-emerald-950/50">
          <span className="w-3 h-3 rounded-full bg-white animate-pulse"></span>
          <span>OPROX ECOSYSTEM HUB</span>
        </div>
        <p className="text-xs text-slate-400 mt-2 max-w-md">
          {lang === 'ar'
            ? 'بنية تقنية حرة موحدة تدمج خمس منصات تخصصية مستقلة'
            : 'Unified architecture empowering five specialized independent platforms'}
        </p>
      </div>

      {/* CONNECTOR LINE */}
      <div className="hidden md:block w-full max-w-3xl mx-auto border-t-2 border-dashed border-emerald-500/30 mb-8 relative">
        <div className="absolute left-1/2 -top-1.5 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1/2"></div>
      </div>

      {/* 5 INDEPENDENT BRANCHES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((p) => {
          const Icon = p.icon;
          return (
            <Link
              key={p.key}
              to={p.path}
              className="group flex flex-col items-center text-center p-4 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 group-hover:bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                {p.name}
              </h4>
              <span className="text-[11px] text-slate-400 mt-1">
                {p.role}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
