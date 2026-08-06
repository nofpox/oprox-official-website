import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { PRODUCT_LINKS } from '../config/productLinks';
import { ShieldCheck, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang].footer;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md">
                <span className="text-base font-extrabold">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-mono">
                OPROX
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {lang === 'ar'
                ? 'منظومة تقنية متكاملة يقدم خمس منصات متخصصة ومستقلة للمؤسسات، والمبرمجين، والمبتكرين، والمختصين العقاريين، والمتعلمين.'
                : 'Integrated technology ecosystem delivering five independent platforms built for organizations, engineers, creators, real estate professionals, and learners.'}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.saudiMark}</span>
            </div>
          </div>

          {/* PRODUCTS COLUMN */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t.productsHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to={PRODUCT_LINKS.os.routePath} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? PRODUCT_LINKS.os.nameAr : PRODUCT_LINKS.os.nameEn}
                </Link>
              </li>
              <li>
                <Link to={PRODUCT_LINKS.code.routePath} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? PRODUCT_LINKS.code.nameAr : PRODUCT_LINKS.code.nameEn}
                </Link>
              </li>
              <li>
                <Link to={PRODUCT_LINKS.studio.routePath} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? PRODUCT_LINKS.studio.nameAr : PRODUCT_LINKS.studio.nameEn}
                </Link>
              </li>
              <li>
                <Link to={PRODUCT_LINKS.realEstate.routePath} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? PRODUCT_LINKS.realEstate.nameAr : PRODUCT_LINKS.realEstate.nameEn}
                </Link>
              </li>
              <li>
                <Link to={PRODUCT_LINKS.academy.routePath} className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? PRODUCT_LINKS.academy.nameAr : PRODUCT_LINKS.academy.nameEn}
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY COLUMN */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t.companyHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'عن أوب روكس' : 'About OPROX'}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'نظرة عامة على المنتجات' : 'Products Overview'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  {t.contactHeading}
                </Link>
              </li>
            </ul>
          </div>

          {/* SECURITY & LEGAL COLUMN */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              {t.securityHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/security" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'ar' ? 'معمارية الأمان' : 'Security Architecture'}</span>
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} OPROX. {t.rights}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <span className="text-slate-700">|</span>
            <Link to="/security" className="hover:text-slate-400">
              {lang === 'ar' ? 'الأمان والحوكمة' : 'Security & Trust'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
