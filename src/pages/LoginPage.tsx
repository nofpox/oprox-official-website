import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { OPROX_PRODUCT_REGISTRY } from '../config/productLinks';
import { launchProduct } from '../services/productLauncher';
import { ProductId, LaunchResult } from '../types/ecosystem';
import { Cpu, Code2, Layers, Building2, GraduationCap, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { lang, isRTL } = useLanguage();
  const c = content[lang].gateways;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialProduct = (searchParams.get('product') || 'os') as ProductId;
  const [selectedProduct, setSelectedProduct] = useState<ProductId>(
    ['os', 'code', 'studio', 'real-estate', 'academy'].includes(initialProduct) ? initialProduct : 'os'
  );
  const [launchNotice, setLaunchNotice] = useState<LaunchResult | null>(null);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const products = [
    { id: 'os' as ProductId, entry: OPROX_PRODUCT_REGISTRY.os, icon: Cpu },
    { id: 'code' as ProductId, entry: OPROX_PRODUCT_REGISTRY.code, icon: Code2 },
    { id: 'studio' as ProductId, entry: OPROX_PRODUCT_REGISTRY.studio, icon: Layers },
    { id: 'real-estate' as ProductId, entry: OPROX_PRODUCT_REGISTRY['real-estate'], icon: Building2 },
    { id: 'academy' as ProductId, entry: OPROX_PRODUCT_REGISTRY.academy, icon: GraduationCap },
  ];

  const activeItem = products.find((p) => p.id === selectedProduct) || products[0];
  const activeName = lang === 'ar' ? activeItem.entry.nameAr : activeItem.entry.nameEn;

  const handleLaunchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const result = launchProduct(selectedProduct, lang);
    if (result.status === 'unconfigured') {
      setLaunchNotice(result);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-24 flex items-center justify-center">
      <SEOHead
        titleEn="OPROX Sign In Gateway"
        titleAr="بوابة تسجيل الدخول | أوب روكس"
        descriptionEn="Select your OPROX product to access your account."
        descriptionAr="اختر منصة أوب روكس التي تود الدخول إليها."
        path="/login"
      />

      <div className="max-w-xl w-full mx-auto px-4">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-2xl">
          
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md">
              O
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {c.signInTitle}
            </h1>
            <p className="text-slate-400 text-sm">
              {c.signInSubtitle}
            </p>
          </div>

          {/* Product Selection List */}
          <div className="space-y-2.5 mb-8">
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
              {c.selectProductPrompt}
            </label>
            {products.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedProduct === p.id;
              const pName = lang === 'ar' ? p.entry.nameAr : p.entry.nameEn;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProduct(p.id);
                    setLaunchNotice(null);
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all text-left rtl:text-right cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">{pName}</span>
                      <span className="text-[11px] text-slate-400">
                        {p.entry.isAppUrlConfigured 
                          ? (lang === 'ar' ? 'الوجهة جاهزة' : 'Destination Ready') 
                          : (lang === 'ar' ? 'صفحة تعريفية' : 'Official Gateway')}
                      </span>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-emerald-400 bg-emerald-400' : 'border-slate-600'}`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950"></div>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Unconfigured Notice */}
          {launchNotice && (
            <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-amber-800/60 text-xs text-amber-200 space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {lang === 'ar' ? launchNotice.messageAr : launchNotice.messageEn}
                </p>
              </div>
              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => navigate(activeItem.entry.routePath)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-medium text-xs transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? `استعراض صفحة ${activeName}` : `View ${activeName} Page`}
                </button>
              </div>
            </div>
          )}

          {/* Action Gateway Button */}
          <div className="space-y-4">
            <button
              onClick={handleLaunchClick}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{c.continueTo} {activeName}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-slate-500 leading-relaxed pt-2">
              {c.unifiedIdNote}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

