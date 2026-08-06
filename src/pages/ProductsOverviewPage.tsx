import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { PRODUCT_LINKS } from '../config/productLinks';
import { Cpu, Code2, Layers, Building2, GraduationCap, Check, ArrowRight, ArrowLeft } from 'lucide-react';

export const ProductsOverviewPage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const c = content[lang];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const productList = [
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
      badge: lang === 'ar' ? 'المنصة التشغيلية' : 'Core OS',
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
      badge: lang === 'ar' ? 'تطوير البرمجيات' : 'Code IDE',
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
      badge: lang === 'ar' ? 'البناء البصري' : 'Studio Builder',
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
      badge: lang === 'ar' ? 'التقنيات العقارية' : 'Real Estate Tech',
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
      badge: lang === 'ar' ? 'منصة التعليم' : 'Academy Labs',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-20">
      <SEOHead
        titleEn="OPROX Products Overview | Five Independent Platforms"
        titleAr="نظرة عامة على منتجات أوب روكس | خمس منصات مستقلة"
        descriptionEn="Explore the five independent products in the OPROX ecosystem: OPROX OS, OPROX Code, OPROX Studio, OPROX Real Estate, and OPROX Academy."
        descriptionAr="استكشف المنتجات الخمسة المستقلة في منظومة أوب روكس: أوب روكس OS، أوب روكس Code، أوب روكس Studio، أوب روكس Real Estate، وأوب روكس Academy."
        path="/products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            {lang === 'ar' ? 'محفظة المنتجات المستقلة' : 'Independent Product Portfolio'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {lang === 'ar' ? 'منتجات أوب روكس الخمسة' : 'The Five OPROX Platforms'}
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            {lang === 'ar'
              ? 'صُممت كل منصة لتعمل بشكل مستقل بخصائص وأدوات تخصصية متقدمة، مع التناغم والانسجام عند الاستخدام المشترك.'
              : 'Each product is designed to function independently with dedicated tools and capabilities, while maintaining clean interoperability across the ecosystem.'}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productList.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">
            {lang === 'ar' ? 'هل أنت جاهز لاختيار منصتك؟' : 'Ready to Choose Your Platform?'}
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            {lang === 'ar'
              ? 'ادخل بوابات الدخول الموحدة أو اختر المنصة التي تناسب متطلبات فريقك مباشرة.'
              : 'Access the unified gateways or enter the specialized platform tailored for your team.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
            >
              {c.nav.getStarted}
            </Link>
            <Link
              to="/login"
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
            >
              {c.nav.signIn}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
