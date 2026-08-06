import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { ProductsOverviewPage } from './pages/ProductsOverviewPage';
import { ProductOSPage } from './pages/ProductOSPage';
import { ProductCodePage } from './pages/ProductCodePage';
import { ProductStudioPage } from './pages/ProductStudioPage';
import { ProductRealEstatePage } from './pages/ProductRealEstatePage';
import { ProductAcademyPage } from './pages/ProductAcademyPage';
import { AboutPage } from './pages/AboutPage';
import { SecurityPage } from './pages/SecurityPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AccountPage } from './pages/AccountPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-emerald-500 selection:text-slate-950">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsOverviewPage />} />
              <Route path="/products/os" element={<ProductOSPage />} />
              <Route path="/products/code" element={<ProductCodePage />} />
              <Route path="/products/studio" element={<ProductStudioPage />} />
              <Route path="/products/real-estate" element={<ProductRealEstatePage />} />
              <Route path="/products/academy" element={<ProductAcademyPage />} />
              
              <Route path="/about" element={<AboutPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              <Route path="/account" element={<AccountPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/get-started" element={<SignupPage />} />
              
              <Route path="/legal/privacy" element={<PrivacyPage />} />
              <Route path="/legal/terms" element={<TermsPage />} />

              {/* Fallback redirect */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
