import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  Building2, 
  Home, 
  Workflow, 
  Users, 
  BarChart3, 
  Compass, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export const ProductRealEstatePage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const titleEn = "OPROX Real Estate | Real Estate Technology Platform";
  const titleAr = "أوب روكس Real Estate | المنصة التقنية للعقارات";
  const descEn = "OPROX Real Estate is a specialized real estate technology platform covering property digital experiences, workflow automation, tenant communications, and asset visibility.";
  const descAr = "أوب روكس Real Estate منصة تقنيات العقارات المخصصة التي تغطي التجارب الرقمية العقارية، وأتمتة سير العمل، وبوابات التواصل، ورؤى المحافظ والأصول.";

  const capabilities = [
    {
      icon: Home,
      title: lang === 'ar' ? 'دليل الأصول والخصائص الرقمية' : 'Digital Property & Asset Catalog',
      desc: lang === 'ar'
        ? 'توثيق الخصائص الرقمية والأصول العقارية وتحديث بياناتها بسهولة.'
        : 'Digital asset directory capturing structure, details, and spatial characteristics of property portfolios.',
    },
    {
      icon: Workflow,
      title: lang === 'ar' ? 'أتمتة سير العمل التشغيلي' : 'Workflow Automation for Real Estate',
      desc: lang === 'ar'
        ? 'أتمتة الإجراءات والطلبات العقارية لرفع كفاءة العمليات اليومية.'
        : 'Streamlined real estate operational request handling, task assignments, and activity tracking.',
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'بوابات التواصل للمستأجرين' : 'Tenant & Stakeholder Portals',
      desc: lang === 'ar'
        ? 'قنوات تواصل آمنة ومنظمة بين المستأجرين، المشرفين، وأصحاب المصلحة.'
        : 'Dedicated digital touchpoints facilitating transparent communication with tenants and stakeholders.',
    },
    {
      icon: BarChart3,
      title: lang === 'ar' ? 'تحليلات الأصول ورؤية الأداء' : 'Asset Analytics & Operational Visibility',
      desc: lang === 'ar'
        ? 'لوحات قراءة الأداء والتشغيل لاتخاذ قرارات استثمارية وإدارية واعية.'
        : 'Data visibility into real estate portfolio metrics, activity trends, and operational health.',
    },
    {
      icon: Compass,
      title: lang === 'ar' ? 'تجارب تفاعلية للمواقع' : 'Interactive Site & Location Experiences',
      desc: lang === 'ar'
        ? 'عروض وتجارب تفاعلية يستمتع بها الزوار والعملاء لاستكشاف العقارات.'
        : 'Interactive digital spatial showcases for visitors and prospective stakeholders.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16">
      <SEOHead
        titleEn={titleEn}
        titleAr={titleAr}
        descriptionEn={descEn}
        descriptionAr={descAr}
        path={PRODUCT_LINKS.realEstate.routePath}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            <span>{lang === 'ar' ? 'منتج مستقل' : 'Independent OPROX Product'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'ar' ? PRODUCT_LINKS.realEstate.nameAr : PRODUCT_LINKS.realEstate.nameEn}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            {descEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup?product=real-estate"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'ابدأ مع أوب روكس Real Estate' : 'Get Started with OPROX Real Estate'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/login?product=real-estate"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors flex items-center justify-center"
            >
              {lang === 'ar' ? 'تسجيل الدخول إلى Real Estate' : 'Sign In to OPROX Real Estate'}
            </Link>
          </div>
        </div>

        {/* WHAT IT IS */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'ar' ? 'ما هو OPROX Real Estate؟' : 'What is OPROX Real Estate?'}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {lang === 'ar'
                ? 'منصة تقنيات العقارات من أوب روكس تمثل بوابتك الحديثة لرقمنة الأصول العقارية وإدارتها بسلاسة، مع توفير تجارب رقمية متطورة لكل المستأجرين وأصحاب المصلحة.'
                : 'OPROX Real Estate is an enterprise real estate technology solution enabling modern digital property workflows, tenant touchpoints, and clear portfolio insights.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'دليل الأصول والخصائص الرقمية' : 'Digital Property Directories'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'أتمتة العمليات اليومية' : 'Automated Workflow Tracking'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'بوابات المستأجرين الآمنة' : 'Tenant Communication Portals'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'رؤى أداء المحافظ العقارية' : 'Real Estate Asset Analytics'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {lang === 'ar' ? 'القدرات الأساسية الموثقة' : 'Verified Real Estate Capabilities'}
            </h2>
            <p className="text-slate-400 text-sm">
              {lang === 'ar' ? 'حلول تقنية متكاملة للقطاع العقاري الحديث' : 'Modern technology workflows for real estate organizations'}
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
              ? 'تعتمد منصة OPROX Real Estate على OPROX OS للحصول على الحوكمة وإدارة الأدوار والصلاحيات للفرق التنفيذية.'
              : 'OPROX Real Estate leverages OPROX OS for team access control and RBAC governance across property operations.'}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/signup?product=real-estate"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg"
          >
            <span>{lang === 'ar' ? 'الانتقال لإنشاء حساب في OPROX Real Estate' : 'Proceed to OPROX Real Estate Gateway'}</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
