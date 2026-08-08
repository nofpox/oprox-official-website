import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { SEOHead } from '../components/SEOHead';
import { MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = content[lang].contact;

  const [form, setForm] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 sm:py-20">
      <SEOHead
        titleEn="Contact OPROX | Official Inquiries"
        titleAr="تواصل مع أوب روكس | الاستفسارات الرسمية"
        descriptionEn="Get in touch with the OPROX team for enterprise inquiries, platform information, or support."
        descriptionAr="تواصل مع فريق أوب روكس للاستفسارات المؤسسية، ومعلومات المنصات، أو الدعم."
        path="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            {lang === 'ar' ? 'التواصل المباشر' : 'Official Communication'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {c.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* FORM */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {c.formTitle}
            </h2>

            {submitted ? (
              <div className="p-6 rounded-xl bg-slate-950 border border-amber-800/60 text-center">
                <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === 'ar' ? 'وضع العرض التجريبي للواجهة' : 'Frontend Presentation Mode'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {c.formDemoNotice}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', product: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 cursor-pointer"
                >
                  {lang === 'ar' ? 'إعادة تعبئة النموذج' : 'Reset Form'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    {c.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                    placeholder={lang === 'ar' ? 'مثال: محمد العتيبي' : 'e.g. Sarah Ahmad'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    {c.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                    placeholder="name@organization.sa"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    {c.productSelect}
                  </label>
                  <select
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-sm"
                  >
                    <option value="">{c.selectPlaceholder}</option>
                    <option value="os">OPROX OS</option>
                    <option value="code">OPROX Code</option>
                    <option value="studio">OPROX Studio</option>
                    <option value="real-estate">OPROX Real Estate</option>
                    <option value="academy">OPROX Academy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    {c.message}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm resize-none"
                    placeholder={lang === 'ar' ? 'اكتب استفسارك هنا...' : 'How can we assist your team?'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{c.send}</span>
                </button>
              </form>
            )}
          </div>

          {/* OFFICE INFO */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {c.officeTitle}
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {lang === 'ar' ? 'الموقع' : 'Location'}
                  </h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    {c.officeLocation}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-900/50 text-xs text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'يتم التعامل مع جميع الاستفسارات وفق سياسة الخصوصية وأعلى درجات السرية المؤسسية.'
                : 'All enterprise inquiries are handled confidentially in accordance with our strict privacy governance.'}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
