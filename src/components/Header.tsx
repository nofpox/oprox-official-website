import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../translations/content';
import { PRODUCT_LINKS } from '../config/productLinks';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  Cpu, 
  Code2, 
  Layers, 
  Building2, 
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, toggleLang, isRTL } = useLanguage();
  const t = content[lang].nav;
  const location = useLocation();

  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  const productList = [
    { key: 'os', icon: Cpu, name: lang === 'ar' ? PRODUCT_LINKS.os.nameAr : PRODUCT_LINKS.os.nameEn, path: PRODUCT_LINKS.os.routePath, desc: lang === 'ar' ? 'البيئة التشغيلية الذكية للمؤسسات' : 'Core intelligent operating environment' },
    { key: 'code', icon: Code2, name: lang === 'ar' ? PRODUCT_LINKS.code.nameAr : PRODUCT_LINKS.code.nameEn, path: PRODUCT_LINKS.code.routePath, desc: lang === 'ar' ? 'تطوير البرمجيات بالذكاء الاصطناعي' : 'AI-assisted software engineering' },
    { key: 'studio', icon: Layers, name: lang === 'ar' ? PRODUCT_LINKS.studio.nameAr : PRODUCT_LINKS.studio.nameEn, path: PRODUCT_LINKS.studio.routePath, desc: lang === 'ar' ? 'البناء والابتكار البصري للتطبيقات' : 'Visual creation & application building' },
    { key: 'realEstate', icon: Building2, name: lang === 'ar' ? PRODUCT_LINKS.realEstate.nameAr : PRODUCT_LINKS.realEstate.nameEn, path: PRODUCT_LINKS.realEstate.routePath, desc: lang === 'ar' ? 'المنصة التقنية للعمليات العقارية' : 'Real estate workflow platform' },
    { key: 'academy', icon: GraduationCap, name: lang === 'ar' ? PRODUCT_LINKS.academy.nameAr : PRODUCT_LINKS.academy.nameEn, path: PRODUCT_LINKS.academy.routePath, desc: lang === 'ar' ? 'التعلم والشهادات والمختبرات العملية' : 'Learning courses & practical labs' },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* LEFT: OPROX Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-white shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform">
                <span className="text-lg tracking-wider font-extrabold">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-mono group-hover:text-emerald-400 transition-colors">
                  OPROX
                </span>
                <span className="text-[10px] text-emerald-400 font-medium tracking-widest uppercase -mt-1">
                  {lang === 'ar' ? 'المنظومة التقنية' : 'TECHNOLOGY'}
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/products')
                    ? 'text-emerald-400 bg-slate-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <span>{t.products}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Products Submenu */}
              {productsOpen && (
                <div className={`absolute top-full mt-2 w-80 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                  isRTL ? 'right-0' : 'left-0'
                }`}>
                  <div className="px-3 py-2 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {lang === 'ar' ? 'المنتجات الخمسة المستقلة' : 'Five Independent Products'}
                  </div>
                  <div className="py-1">
                    {productList.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.key}
                          to={item.path}
                          className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                            isActive
                              ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/50'
                              : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
                          }`}
                        >
                          <div className={`p-2 rounded-md ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold flex items-center gap-1">
                              {item.name}
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="p-2 border-t border-slate-800/80 bg-slate-950/50 rounded-b-lg">
                    <Link
                      to="/products"
                      className="flex items-center justify-between text-xs font-medium text-emerald-400 hover:text-emerald-300 px-2 py-1"
                    >
                      <span>{lang === 'ar' ? 'نظرة عامة على جميع المنتجات' : 'View All Products Overview'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/security"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/security'
                  ? 'text-emerald-400 bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {t.security}
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/about'
                  ? 'text-emerald-400 bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {t.about}
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'text-emerald-400 bg-slate-800/60'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {t.contact}
            </Link>
          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700/80 bg-slate-800/40 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Toggle Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.switchLang}</span>
            </button>

            {/* Sign In */}
            <Link
              to="/login"
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              {t.signIn}
            </Link>

            {/* Get Started */}
            <Link
              to="/signup"
              className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/50 transition-all hover:scale-[1.02]"
            >
              {t.getStarted}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-300"
            >
              {t.switchLang}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1 pt-2">
            <div className="text-xs font-semibold text-slate-500 uppercase px-3 py-1">
              {t.products}
            </div>
            {productList.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-slate-800 hover:text-emerald-400 font-medium"
              >
                <item.icon className="w-4 h-4 text-emerald-400" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-1">
            <Link
              to="/security"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              {t.security}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              {t.about}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              {t.contact}
            </Link>
          </div>

          <div className="border-t border-slate-800 pt-4 flex flex-col gap-2">
            <Link
              to="/login"
              className="w-full text-center py-2 rounded-lg text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700"
            >
              {t.signIn}
            </Link>
            <Link
              to="/signup"
              className="w-full text-center py-2 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              {t.getStarted}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
