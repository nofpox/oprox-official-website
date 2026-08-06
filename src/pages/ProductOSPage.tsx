import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  Cpu, 
  ShieldCheck, 
  Users, 
  Layers, 
  Sliders, 
  FileText, 
  Key, 
  Activity, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Lock,
  Zap
} from 'lucide-react';

export const ProductOSPage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const titleEn = "OPROX OS | Intelligent Governance & Operating System";
  const titleAr = "أوب روكس OS | النظام التشغيلي والحوكمة الذكية للمؤسسات";
  const descEn = "OPROX OS is the core intelligent operating and management environment for organizations, users, project governance, and AI operations.";
  const descAr = "أوب روكس OS هو بيئة التشغيل والإدارة الذكية الأساسية للمؤسسات والمستخدمين وحوكمة المشاريع وعمليات الذكاء الاصطناعي.";

  const capabilities = [
    {
      icon: Users,
      title: lang === 'ar' ? 'إدارة المنظمات والمستخدمين' : 'Organizations & User Management',
      desc: lang === 'ar'
        ? 'عزل تام بين حسابات المؤسسات، إدارة هويات المستخدمين، والدعم المركزي للمصادقة.'
        : 'Complete multi-tenant tenant isolation, identity management, and centralized authentication.',
    },
    {
      icon: Lock,
      title: lang === 'ar' ? 'التحكم القائم على الأدوار (RBAC)' : 'Role-Based Access Control (RBAC)',
      desc: lang === 'ar'
        ? 'تحديد الصلاحيات الدقيقة للفرق والأفراد بمرونة عالية وفق السياسات الإدارية.'
        : 'Granular permissions, group access policies, and admin privilege controls.',
    },
    {
      icon: Sliders,
      title: lang === 'ar' ? 'حوكمة الذكاء الاصطناعي ومفتاح الإيقاف' : 'AI Governance & Emergency Kill Switch',
      desc: lang === 'ar'
        ? 'مراقبة ميزانيات الذكاء الاصطناعي، حدود الاستخدام، وإمكانية التعطيل الفوري الحارس.'
        : 'Usage quota controls, budget guardrails, and instant emergency kill-switch functionality.',
    },
    {
      icon: FileText,
      title: lang === 'ar' ? 'سجلات المراجعة الشاملة' : 'Centralized Audit Logging',
      desc: lang === 'ar'
        ? 'تسجيل موثق بالزمن لجميع الأنشطة التشغيلية والتغييرات الأمنية للمراجعة والامتثال.'
        : 'Detailed event logs for all administrative actions, access changes, and security events.',
    },
    {
      icon: Layers,
      title: lang === 'ar' ? 'مساحات عمل المشاريع' : 'Project Workspaces & Telemetry',
      desc: lang === 'ar'
        ? 'تنظيم مساحات العمل والمشاريع مع متابعة الأداء التشغيلي والقياس عن بعد.'
        : 'Structured workspace organization with integrated operational telemetry and monitoring.',
    },
    {
      icon: Activity,
      title: lang === 'ar' ? 'مؤشرات الجاهزية والصحة' : 'System Health & Readiness Controls',
      desc: lang === 'ar'
        ? 'متابعة جاهزية الخدمات والأنظمة مع تنبيهات فورية للمشغلين والمشرفين.'
        : 'Live service health monitoring, readiness checks, and infrastructure status transparency.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16">
      <SEOHead
        titleEn={titleEn}
        titleAr={titleAr}
        descriptionEn={descEn}
        descriptionAr={descAr}
        path={PRODUCT_LINKS.os.routePath}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-6">
            <Cpu className="w-4 h-4" />
            <span>{lang === 'ar' ? 'منتج مستقل' : 'Independent OPROX Product'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'ar' ? PRODUCT_LINKS.os.nameAr : PRODUCT_LINKS.os.nameEn}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            {descEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup?product=os"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'ابدأ مع أوب روكس OS' : 'Get Started with OPROX OS'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/login?product=os"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors flex items-center justify-center"
            >
              {lang === 'ar' ? 'تسجيل الدخول إلى OS' : 'Sign In to OPROX OS'}
            </Link>
          </div>
        </div>

        {/* WHAT IT IS */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'ar' ? 'ما هو OPROX OS؟' : 'What is OPROX OS?'}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {lang === 'ar'
                ? 'أوب روكس OS ليس مجرد لوحة تحكم، بل هو بيئة التشغيل الأساسية التي تمنح المؤسسات تحكماً كاملاً وحوكمة صلبة فوق جميع الهويات والمشاريع وعمليات الذكاء الاصطناعي.'
                : 'OPROX OS serves as the foundational operating platform providing organizations with centralized control, multi-tenant isolation, and strict governance over identities, workspace assets, and AI operations.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'فصل تام لبيانات العملاء' : 'Strict Multi-Tenant Isolation'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'حوكمة تكاليف الذكاء الاصطناعي' : 'AI Budget & Usage Guardrails'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'سجلات تدقيق مركزية' : 'Centralized Security Audit Logs'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'إدارة الأدوار والصلاحيات (RBAC)' : 'Granular RBAC Policy Controls'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CORE CAPABILITIES GRID */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {lang === 'ar' ? 'القدرات الأساسية الموثقة' : 'Verified OS Capabilities'}
            </h2>
            <p className="text-slate-400 text-sm">
              {lang === 'ar' ? 'خصائص تقنية مصممة لتأمين وإدارة أعمال المؤسسات الحديثة' : 'Engineered for secure enterprise governance and organizational resilience'}
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
              ? 'يوفر أوب روكس OS طبقة الهوية والحوكمة لمنصات أوب روكس الأخرى (Code, Studio, Real Estate, Academy) دون أن تلغى استقلالية أي منها.'
              : 'OPROX OS provides the identity and governance backbone across the OPROX suite while preserving each platform as an independent product.'}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/signup?product=os"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg"
          >
            <span>{lang === 'ar' ? 'الانتقال لإنشاء حساب في OPROX OS' : 'Proceed to OPROX OS Gateway'}</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
