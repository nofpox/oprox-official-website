import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { EcosystemDiagram } from '../components/EcosystemDiagram';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  Cpu, 
  Code2, 
  Layers, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Users,
  CheckCircle2,
  Lock,
  KeyRound,
  FileSpreadsheet,
  Activity
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const c = content[lang];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const productData = [
    {
      id: 'os',
      title: lang === 'ar' ? PRODUCT_LINKS.os.nameAr : PRODUCT_LINKS.os.nameEn,
      purpose: c.productsSection.os.purpose,
      capabilities: [
        c.productsSection.os.cap1,
        c.productsSection.os.cap2,
        c.productsSection.os.cap3,
        c.productsSection.os.cap4,
        c.productsSection.os.cap5,
      ],
      ctaText: c.productsSection.os.cta,
      routePath: PRODUCT_LINKS.os.routePath,
      icon: Cpu,
      badge: lang === 'ar' ? 'بيئة التشغيل والحوكمة' : 'Core Operating System',
      featured: true,
    },
    {
      id: 'code',
      title: lang === 'ar' ? PRODUCT_LINKS.code.nameAr : PRODUCT_LINKS.code.nameEn,
      purpose: c.productsSection.code.purpose,
      capabilities: [
        c.productsSection.code.cap1,
        c.productsSection.code.cap2,
        c.productsSection.code.cap3,
        c.productsSection.code.cap4,
        c.productsSection.code.cap5,
      ],
      ctaText: c.productsSection.code.cta,
      routePath: PRODUCT_LINKS.code.routePath,
      icon: Code2,
      badge: lang === 'ar' ? 'هندسة البرمجيات' : 'Software Engineering',
      featured: false,
    },
    {
      id: 'studio',
      title: lang === 'ar' ? PRODUCT_LINKS.studio.nameAr : PRODUCT_LINKS.studio.nameEn,
      purpose: c.productsSection.studio.purpose,
      capabilities: [
        c.productsSection.studio.cap1,
        c.productsSection.studio.cap2,
        c.productsSection.studio.cap3,
        c.productsSection.studio.cap4,
        c.productsSection.studio.cap5,
      ],
      ctaText: c.productsSection.studio.cta,
      routePath: PRODUCT_LINKS.studio.routePath,
      icon: Layers,
      badge: lang === 'ar' ? 'الابتكار البصري' : 'Visual Building',
      featured: false,
    },
    {
      id: 'realEstate',
      title: lang === 'ar' ? PRODUCT_LINKS.realEstate.nameAr : PRODUCT_LINKS.realEstate.nameEn,
      purpose: c.productsSection.realEstate.purpose,
      capabilities: [
        c.productsSection.realEstate.cap1,
        c.productsSection.realEstate.cap2,
        c.productsSection.realEstate.cap3,
        c.productsSection.realEstate.cap4,
        c.productsSection.realEstate.cap5,
      ],
      ctaText: c.productsSection.realEstate.cta,
      routePath: PRODUCT_LINKS.realEstate.routePath,
      icon: Building2,
      badge: lang === 'ar' ? 'التقنيات العقارية' : 'Real Estate Platform',
      featured: false,
    },
    {
      id: 'academy',
      title: lang === 'ar' ? PRODUCT_LINKS.academy.nameAr : PRODUCT_LINKS.academy.nameEn,
      purpose: c.productsSection.academy.purpose,
      capabilities: [
        c.productsSection.academy.cap1,
        c.productsSection.academy.cap2,
        c.productsSection.academy.cap3,
        c.productsSection.academy.cap4,
        c.productsSection.academy.cap5,
      ],
      ctaText: c.productsSection.academy.cta,
      routePath: PRODUCT_LINKS.academy.routePath,
      icon: GraduationCap,
      badge: lang === 'ar' ? 'التعلم والدورات' : 'Learning Platform',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEOHead
        titleEn="OPROX | Saudi Technology Ecosystem"
        titleAr="أوب روكس | منظومة التقنية السعودية"
        descriptionEn="Official portal for the OPROX technology ecosystem and its five independent products: OPROX OS, OPROX Code, OPROX Studio, OPROX Real Estate, and OPROX Academy."
        descriptionAr="البوابة الرسمية لمنظومة أوب روكس التقنية ومنصاتها الخمس المستقلة: أوب روكس OS، أوب روكس Code، أوب روكس Studio، أوب روكس Real Estate، وأوب روكس Academy."
        path="/"
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-800/80">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-950/30 to-transparent blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Saudi Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{c.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            {c.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            {c.hero.subtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-950/50 transition-all flex items-center justify-center gap-2 group"
            >
              <span>{c.hero.primaryCTA}</span>
              <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
            <a
              href="#products-grid"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-colors flex items-center justify-center"
            >
              {c.hero.secondaryCTA}
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2 — FIVE PRODUCTS */}
      <section id="products-grid" className="py-20 md:py-28 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              {c.productsSection.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
              {c.productsSection.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {c.productsSection.subtitle}
            </p>
          </div>

          {/* Grid of 5 Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.map((prod) => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — ONE OPROX ECOSYSTEM */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              {c.ecosystem.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
              {c.ecosystem.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {c.ecosystem.subtitle}
            </p>
          </div>

          <EcosystemDiagram />

          <p className="text-xs text-center text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            {c.ecosystem.desc}
          </p>

        </div>
      </section>

      {/* SECTION 4 — WHO IT IS FOR */}
      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              {c.audience.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
              {c.audience.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {c.audience.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.audience.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — SECURITY & TRUST */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                {c.securityHighlight.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6 tracking-tight">
                {c.securityHighlight.title}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {c.securityHighlight.subtitle}
              </p>

              <Link
                to="/security"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>{c.securityHighlight.cta}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.securityHighlight.caps.map((sec, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {sec.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {c.ctaSection.title}
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {c.ctaSection.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-950/50 transition-all flex items-center justify-center gap-2"
            >
              <span>{c.ctaSection.primary}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/signup"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-colors flex items-center justify-center"
            >
              {c.ctaSection.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
