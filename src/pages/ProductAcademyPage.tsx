import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Sparkles, 
  Code, 
  Users, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export const ProductAcademyPage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const titleEn = "OPROX Academy | Learning Platform & Practical Labs";
  const titleAr = "أوب روكس Academy | منصة التعلم والمختبرات التطبيقية";
  const descEn = "OPROX Academy is a modern learning platform offering structured courses, AI tutoring, assessments, practical engineering labs, and verified certifications.";
  const descAr = "أوب روكس Academy هي منصة التعلم الحديثة التي تقدم دورات تعليمية منظمة، والتعليم بالذكاء الاصطناعي، والتقييمات، والمختبرات البرمجية العملية، والشهادات الموثقة.";

  const capabilities = [
    {
      icon: BookOpen,
      title: lang === 'ar' ? 'المسارات التعليمية والدورات التفاعلية' : 'Structured Learning Paths & Courses',
      desc: lang === 'ar'
        ? 'مسارات تعلم منهجية مصممة للبرمجة والهندسة والتقنيات العقارية وإدارة المشاريع.'
        : 'Comprehensive curriculum tracks for engineering, software visual building, and digital domain skills.',
    },
    {
      icon: Sparkles,
      title: lang === 'ar' ? 'المعلم الذكي والتعلم التكيفي' : 'AI Tutor & Personalized Learning',
      desc: lang === 'ar'
        ? 'مساعد تعليمي ذكي يقدم توجيهات مخصصة، إجابات فورية، وتقييم مستمر لمستوى المهارات.'
        : 'Adaptive AI study companion offering context-aware feedback and personal study pacing.',
    },
    {
      icon: Code,
      title: lang === 'ar' ? 'مختبرات تطبيقية عملة' : 'Hands-On Code & Studio Labs',
      desc: lang === 'ar'
        ? 'تطبيقات عملة ومختبرات تفاعلية تمكّن المتعلم من تطبيق ما يتعلمه بشكل مباشر.'
        : 'Interactive practical sandbox environments for real-world code and app-building exercises.',
    },
    {
      icon: Award,
      title: lang === 'ar' ? 'التقييمات والشهادات الموثقة' : 'Automated Assessments & Certifications',
      desc: lang === 'ar'
        ? 'اختبارات تقييم آلي للقدرات وشهادات رقمية موثقة تثبت كفاءة المتعلم.'
        : 'Verifiable digital course completion credentials, skills badging, and automated exams.',
    },
    {
      icon: Users,
      title: lang === 'ar' ? 'أدوات المعلمين والمؤسسات' : 'Instructor & Enterprise Training Portals',
      desc: lang === 'ar'
        ? 'لوحات متابعة المعلمين والمؤسسات لمراقبة تقدم الموظفين والطلاب وتتبع الأداء.'
        : 'Enterprise skill matrix dashboards enabling organizations to oversee employee skill progression.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16">
      <SEOHead
        titleEn={titleEn}
        titleAr={titleAr}
        descriptionEn={descEn}
        descriptionAr={descAr}
        path={PRODUCT_LINKS.academy.routePath}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-emerald-800/60 text-emerald-400 text-xs font-semibold mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'ar' ? 'منتج مستقل' : 'Independent OPROX Product'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'ar' ? PRODUCT_LINKS.academy.nameAr : PRODUCT_LINKS.academy.nameEn}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            {descEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup?product=academy"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'ar' ? 'ابدأ مع أوب روكس Academy' : 'Get Started with OPROX Academy'}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
            <Link
              to="/login?product=academy"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-colors flex items-center justify-center"
            >
              {lang === 'ar' ? 'تسجيل الدخول إلى Academy' : 'Sign In to OPROX Academy'}
            </Link>
          </div>
        </div>

        {/* WHAT IT IS */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'ar' ? 'ما هو OPROX Academy؟' : 'What is OPROX Academy?'}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {lang === 'ar'
                ? 'أوب روكس Academy منصة تعليمية وتدريبية تمكّن الأفراد والفرق المؤسسية من اكتساب المهارات التقنية العالية والتطبيق المباشر عبر مختبرات عملية موثوقة.'
                : 'OPROX Academy is an interactive learning platform empowering learners and corporate teams to master modern technical skills through guided courses, AI tutors, and real-world labs.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'مسارات ودورات تفاعلية' : 'Structured Interactive Courses'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'معلم ذكي ومساعد دراسي' : 'Adaptive AI Learning Companion'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'مختبرات تطبيقية عملة' : 'Practical Code & Studio Labs'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'شهادات رقمية موثقة' : 'Verified Digital Skills Badges'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              {lang === 'ar' ? 'القدرات الأساسية الموثقة' : 'Verified Educational Capabilities'}
            </h2>
            <p className="text-slate-400 text-sm">
              {lang === 'ar' ? 'منظومة تعليمية متكاملة لربط المعرفة النظرية بالتطبيق الميداني' : 'A complete ecosystem bridging theory with practical implementation'}
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
              ? 'تستفيد مختبرات OPROX Academy من أدوات OPROX Code و OPROX Studio لتوفير بيئة تدريبية حقيقية تماماً للطلاب.'
              : 'OPROX Academy practical labs utilize OPROX Code and Studio technologies to provide real-world hands-on practice.'}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/signup?product=academy"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg"
          >
            <span>{lang === 'ar' ? 'الانتقال لإنشاء حساب في OPROX Academy' : 'Proceed to OPROX Academy Gateway'}</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
