import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { getCurrentUser } from '../services/authService';
import { openBillingPortal } from '../services/billingService';
import { getUserEntitlements } from '../services/entitlementService';
import { OPROX_PRODUCT_REGISTRY } from '../config/productLinks';
import { EntitlementCheckResult, BillingPortalResult } from '../types/billing';
import { ProductId } from '../types/ecosystem';
import { 
  User, 
  CreditCard, 
  ShieldAlert, 
  ExternalLink, 
  Cpu, 
  Code2, 
  Layers, 
  Building2, 
  GraduationCap,
  Building,
} from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { lang } = useLanguage();
  const user = getCurrentUser(); // Returns null safely
  const [entitlements, setEntitlements] = useState<EntitlementCheckResult[]>([]);
  const [portalNotice, setPortalNotice] = useState<BillingPortalResult | null>(null);

  useEffect(() => {
    getUserEntitlements().then(setEntitlements);
  }, []);

  const handleOpenBillingPortal = async () => {
    const res = await openBillingPortal();
    setPortalNotice(res);
  };

  const productIcons: Record<ProductId, React.ElementType> = {
    os: Cpu,
    code: Code2,
    studio: Layers,
    'real-estate': Building2,
    academy: GraduationCap,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 sm:py-20">
      <SEOHead
        titleEn="OPROX Account Gateway"
        titleAr="إدارة حساب أوب روكس الموحد"
        descriptionEn="Centralized account gateway, subscriptions, and access portal."
        descriptionAr="بوابة الحساب الموحد والاشتراكات وصلاحيات الوصول لمنتجات أوب روكس."
        path="/account"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left rtl:sm:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'حساب أوب روكس الموحد' : 'Unified OPROX Account'}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            {lang === 'ar' ? 'بوابة الحساب والاشتراكات' : 'Account & Subscriptions Gateway'}
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
            {lang === 'ar'
              ? 'تتيح لك هذه البوابة إدارة الهوية الرقمية الموحدة، الاشتراكات، وصلاحيات الوصول عبر منتجات أوب روكس الخمسة.'
              : 'Centralized access point for managing unified identity, product subscriptions, and organization entitlements across the five OPROX products.'}
          </p>
        </div>

        {/* Backend Configuration Notice */}
        <div className="mb-8 p-5 rounded-2xl bg-amber-950/30 border border-amber-800/50 text-amber-200 text-xs space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <ShieldAlert className="w-4 h-4" />
            <span>{lang === 'ar' ? 'حالة خدمة الحساب الموحد' : 'Service Status: Awaiting Backend Provider'}</span>
          </div>
          <p>
            {lang === 'ar'
              ? 'خدمة الحساب والاشتراكات الموحدة تعمل حالياً في وضع هيكلية الجاهزية (Not Configured). سيتم تفعيل تسجيل الدخول التلقائي والاشتراكات الموحدة فور ربط مزود الهوية وبوابة الفوترة المعتمدة.'
              : 'Unified Account and Billing services are currently operating in integration-ready boundary mode. Authentication, SSO, and billing portals will activate upon backend provider configuration.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Profile Card */}
          <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 font-bold text-xl">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  {user ? 'OPROX User' : (lang === 'ar' ? 'زائر أوب روكس' : 'OPROX Visitor')}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {lang === 'ar' ? 'غير مسجل الدخول' : 'Not Authenticated'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{lang === 'ar' ? 'حالة الهوية' : 'Identity Status'}:</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono">NOT_CONFIGURED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">{lang === 'ar' ? 'المؤسسة' : 'Organization'}:</span>
                <span className="text-slate-400">{lang === 'ar' ? 'غير محددة' : 'None'}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/login"
                className="w-full text-center py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                {lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
              </Link>
            </div>
          </div>

          {/* Subscriptions & Entitlements Overview */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Products Access Matrix */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ar' ? 'منتجات أوب روكس الخمسة' : 'Ecosystem Products'}</span>
                </h3>
                <span className="text-xs text-slate-400">
                  {lang === 'ar' ? 'وصول مستقل مباشر' : 'Direct Independent Access'}
                </span>
              </div>

              <div className="space-y-3">
                {entitlements.map((item) => {
                  const reg = OPROX_PRODUCT_REGISTRY[item.productId];
                  const Icon = productIcons[item.productId] || Cpu;
                  const name = lang === 'ar' ? reg.nameAr : reg.nameEn;

                  return (
                    <div
                      key={item.productId}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-800 text-emerald-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-white block">{name}</span>
                          <span className="text-[11px] text-slate-400">{reg.routePath}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">
                          {item.state}
                        </span>
                        <Link
                          to={reg.routePath}
                          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                          title={lang === 'ar' ? `الانتقال إلى ${name}` : `Go to ${name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Billing Portal Management */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <span>{lang === 'ar' ? 'إدارة الاشتراكات والفوترة' : 'Central Billing Portal'}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'ar'
                      ? 'الوصول إلى الفواتير، تحديث طرق الدفع، وتغيير باقات الاشتراكات للمنتجات.'
                      : 'Access billing invoices, payment methods, and subscription tier upgrades.'}
                  </p>
                </div>
              </div>

              {portalNotice && (
                <div className="p-3 rounded-xl bg-slate-950 border border-amber-800/60 text-xs text-amber-300">
                  {lang === 'ar' ? portalNotice.messageAr : portalNotice.messageEn}
                </div>
              )}

              <button
                onClick={handleOpenBillingPortal}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'ar' ? 'فتح بوابة الاشتراكات' : 'Open Billing Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
