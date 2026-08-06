import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ProductCardProps {
  id: string;
  title: string;
  purpose: string;
  capabilities: string[];
  ctaText: string;
  routePath: string;
  icon: LucideIcon;
  badge?: string;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  purpose,
  capabilities,
  ctaText,
  routePath,
  icon: Icon,
  badge,
  featured = false,
}) => {
  const { isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
        featured
          ? 'bg-slate-900 border-2 border-emerald-500/50 shadow-xl shadow-emerald-950/30'
          : 'bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-md'
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
              featured ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/20'
            }`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {title}
              </h3>
              {badge && (
                <span className="inline-block mt-0.5 text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
                  {badge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Purpose */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          {purpose}
        </p>

        {/* Capabilities List */}
        <div className="space-y-2.5 mb-8 border-t border-slate-800/80 pt-5">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <div className="mt-0.5 p-0.5 rounded bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="leading-snug">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div>
        <Link
          to={routePath}
          className={`w-full inline-flex items-center justify-between px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
            featured
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40'
              : 'bg-slate-800 hover:bg-slate-700 text-white hover:text-emerald-300 border border-slate-700/60'
          }`}
        >
          <span>{ctaText}</span>
          <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
