import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  Layers, 
  Palette, 
  Layout, 
  Workflow, 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Box
} from 'lucide-react';

export const ProductStudioPage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const titleEn = "OPROX Studio | Visual Creation & Application Builder";
  const titleAr = "أوب روكس Studio | بيئة الابتكار البصري وبناء التطبيقات";
  const descEn = "OPROX Studio is a visual creation and application-building platform empowering product teams, designers, and creators to model, design, and deploy digital experiences.";
  const descAr = "أوب روكس Studio هو بيئة الابتكار البصري وبناء التطبيقات التي تمكّن فرق المنتجات والمصممين والمبتكرين من نمذجة وتصميم ونشر التجارب الرقمية.";

  const capabilities = [
    {
      icon: Layout,
      title: lang === 'ar' ? 'اللوحة البصرية ومحرك المكونات' : 'Drag-and-Drop Visual Canvas',
      desc: lang === 'ar'
        ? 'بناء الواجهات بالسحب والإسقاط باستخدام مكتبة مكونات مرنة وعالية الأداء.'
        : 'Intuitive visual canvas supporting modular component arrangement and dynamic layout modeling.',
    },
    {
      icon: Palette,
      title: lang === 'ar' ? 'نظام التصميم وتطابق الهوية' : 'Design System & Tokens Management',
      desc: lang === 'ar'
        ? 'إدارة المتغيرات البصرية والألوان والأطقم لضمان الاتساق عبر جميع المخرجات.'
        : 'Centralized design token management, themes, and design system governance.',
    },
    {
      icon: Workflow,
      title: lang === 'ar' ? 'منطق العمل وأتمتة التفاعلات' : 'Visual Logic & Workflow Builder',
      desc: lang === 'ar'
        ? 'ربط الأحداث والتفاعلات والمنطق التجاري دون الحاجة لكتابة كود معقد.'
        : 'Connect events, visual logic paths, and interaction triggers without writing complex boilerplates.',
    },
    {
      icon: Zap,
      title: lang === 'ar' ? 'المعاينة الفورية والترسيم' : 'Instant Live Preview & Prototyping',
      desc: lang === 'ar'
        ? 'معاينة حية وفورية للتصاميم عبر مختلف الأحجام والشاشات.'
        : 'Real-time interactive previewing across desktop, tablet, and mobile viewport frames.',
    },
    {
      icon: Box,
      title: lang === 'ar' ? 'تصدير النماذج والنشر' : 'Cross-Platform Deployment Prep',
      desc: lang === 'ar'
        ? 'تجهيز المخرجات والنماذج للتصدير أو النشر المباشر عبر المنصات.'
        : 'Export production-ready structures and interface definitions for immediate deployment.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16">
      <SEOHead
        titleEn={titleEn}
        titleAr={titleAr}
        descriptionEn={descEn}
        descriptionAr={descAr}
        path={PRODUCT_LINKS.studio.routePath}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-6">
            <Layers className="w-4 h-4" />
            <span>{lang === 'ar' ? 'منتج مستقل' : 'Independent OPROX Product'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'ar' ? PRODUCT_LINKS.studio.nameAr : PRODUCT_LINKS.studio.nameEn}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            {descEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup?product=studio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'ابدأ مع أوب روكس Studio' : 'Get Started with OPROX Studio'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/login?product=studio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors flex items-center justify-center"
            >
              {lang === 'ar' ? 'تسجيل الدخول إلى Studio' : 'Sign In to OPROX Studio'}
            </Link>
          </div>
        </div>

        {/* WHAT IT IS */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'ar' ? 'ما هو OPROX Studio؟' : 'What is OPROX Studio?'}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {lang === 'ar'
                ? 'أوب روكس Studio يُجسد الجيل الجديد من أدوات البناء البصري، حيث يتيح للفرق تطوير الواجهات وتدفقات العمل بسرعة فائقة دون التضحية بالدقة الهندسية.'
                : 'OPROX Studio represents modern visual creation software that bridging design concepts and functional frontend applications with speed and visual precision.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'بناء بصري وسحب وإسقاط' : 'Visual Layout Drag-and-Drop'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'أنظمة التصميم والمتغيرات' : 'Design Token Management'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'نمذجة المنطق والتفاعلات' : 'Visual Event Logic Blocks'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'معاينة فورية وتصدير' : 'Instant Viewport Preview'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {lang === 'ar' ? 'القدرات الأساسية الموثقة' : 'Verified Visual Capabilities'}
            </h2>
            <p className="text-slate-400 text-sm">
              {lang === 'ar' ? 'بيئة متكاملة للابتكار والتصميم السريع' : 'Comprehensive suite for rapid interface visual engineering'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ECOSYSTEM INTEGRATION */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-8 text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-white mb-3">
            {lang === 'ar' ? 'التكامل ضمن منظومة أوب روكس' : 'Ecosystem Integration'}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'يمكن ربط نماذج OPROX Studio مع OPROX Code لتحويلها إلى مشاريع برمجية، واستخدام OPROX OS للحوكمة والصلاحيات.'
              : 'Models designed in OPROX Studio can be seamlessly exported to OPROX Code or governed via OPROX OS identity rules.'}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/signup?product=studio"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg"
          >
            <span>{lang === 'ar' ? 'الانتقال لإنشاء حساب في OPROX Studio' : 'Proceed to OPROX Studio Gateway'}</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
