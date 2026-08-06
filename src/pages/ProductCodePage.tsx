import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  GitBranch, 
  FolderGit2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const ProductCodePage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const titleEn = "OPROX Code | AI-Assisted Software Engineering Platform";
  const titleAr = "أوب روكس Code | بيئة هندسة وتطوير البرمجيات بالذكاء الاصطناعي";
  const descEn = "OPROX Code is a dedicated software engineering and development environment designed for building, testing, and working with complex software projects.";
  const descAr = "أوب روكس Code هو بيئة مخصصة لهندسة البرمجيات والتطوير مصممة لبناء واختبار وإدارة المشاريع البرمجية المعقدة.";

  const capabilities = [
    {
      icon: Sparkles,
      title: lang === 'ar' ? 'المساعدة الذكية وتوليد الكود' : 'AI Code Intelligence & Autocomplete',
      desc: lang === 'ar'
        ? 'مساعد ذكي يدرك سياق المشروع لمساعدة المهندسين في كتابة وتحديث واستكشاف الأخطاء البرمجية.'
        : 'Context-aware AI coding assistance helping developers generate, refactor, and debug software.',
    },
    {
      icon: FolderGit2,
      title: lang === 'ar' ? 'مساحات عمل سحابية للمشاريع' : 'Cloud Workspace & Indexing',
      desc: lang === 'ar'
        ? 'إدارة مشاريع كاملة مع فهرسة ذكية لجميع الملفات والتبعيات البرمجية.'
        : 'Centralized workspace management with high-performance repository indexing and structure analysis.',
    },
    {
      icon: Terminal,
      title: lang === 'ar' ? 'طرفية مدمجة وبيئات تشغيل' : 'Integrated Terminal & Runtimes',
      desc: lang === 'ar'
        ? 'بيئة تنفيذ مباشرة تدعم تشغيل الأوامر واللغات البرمجية المتعددة.'
        : 'Direct command execution environment supporting multi-language runtime builds and scripts.',
    },
    {
      icon: GitBranch,
      title: lang === 'ar' ? 'إدارة النسخ وسير عمل Git' : 'Version Control & Git Workflows',
      desc: lang === 'ar'
        ? 'تكامل تام مع أنظمة إدارة النسخ لمتابعة الفروع، التغييرات، والتزامن البرمجي.'
        : 'Seamless Git repository workflows for branch management, diffs, and collaboration.',
    },
    {
      icon: ShieldCheck,
      title: lang === 'ar' ? 'تحليل الأمان والمراجعة الآلية' : 'Automated Security & Code Review',
      desc: lang === 'ar'
        ? 'فحص تلقائي للثغرات والأخطاء الشائعة قبل اعتماد النشر والتشغيل.'
        : 'Automated vulnerability scanning and code quality checks prior to deployment.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16">
      <SEOHead
        titleEn={titleEn}
        titleAr={titleAr}
        descriptionEn={descEn}
        descriptionAr={descAr}
        path={PRODUCT_LINKS.code.routePath}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-6">
            <Code2 className="w-4 h-4" />
            <span>{lang === 'ar' ? 'منتج مستقل' : 'Independent OPROX Product'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'ar' ? PRODUCT_LINKS.code.nameAr : PRODUCT_LINKS.code.nameEn}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            {descEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup?product=code"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'ابدأ مع أوب روكس Code' : 'Get Started with OPROX Code'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/login?product=code"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors flex items-center justify-center"
            >
              {lang === 'ar' ? 'تسجيل الدخول إلى Code' : 'Sign In to OPROX Code'}
            </Link>
          </div>
        </div>

        {/* WHAT IT IS */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'ar' ? 'ما هو OPROX Code؟' : 'What is OPROX Code?'}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {lang === 'ar'
                ? 'أوب روكس Code منصة هندسية متخصصة تهدف لتسريع سير عمل المطورين والفرق البرمجية عبر الاستفادة من نماذج الذكاء الاصطناعي المتقدمة في بيئة آمنة ومنظمة.'
                : 'OPROX Code is a dedicated software development platform engineering tool that accelerates developer workflows, code navigation, and deployment quality through integrated AI capabilities.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'مساعدة برمجية ذكية' : 'Contextual AI Assistance'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'طرفية وبيئات متعددة' : 'Multi-runtime Execution'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'فهرسة وتدقيق المستودعات' : 'Repository Structure Indexing'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'فحص جودة وأمان الكود' : 'Automated Quality Controls'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {lang === 'ar' ? 'قدرات أوب روكس Code الموثقة' : 'Verified Engineering Capabilities'}
            </h2>
            <p className="text-slate-400 text-sm">
              {lang === 'ar' ? 'أدوات قوية لزيادة إنتاجية المطورين وجودة البرمجيات' : 'Empowering modern software engineers with precision tools'}
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
              ? 'يتكامل OPROX Code مع OPROX OS للحصول على الحوكمة والصلاحيات، ومع OPROX Studio لنقل النماذج البصرية إلى كود برمجي جاهز.'
              : 'OPROX Code integrates seamlessly with OPROX OS for team governance and OPROX Studio to convert visual models into production-ready code.'}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/signup?product=code"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg"
          >
            <span>{lang === 'ar' ? 'الانتقال لإنشاء حساب في OPROX Code' : 'Proceed to OPROX Code Gateway'}</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
