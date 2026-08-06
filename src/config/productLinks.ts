import { ProductRegistryEntry, ProductId } from '../types/ecosystem';

/**
 * Authoritative Central Product Registry for OPROX Ecosystem.
 * Exactly 5 independent products.
 */

const getEnvVar = (key: string): string => {
  try {
    const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env;
    if (metaEnv && metaEnv[key]) {
      return String(metaEnv[key]).trim();
    }
  } catch {
    // Fallback if import.meta is unavailable
  }
  try {
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return String(process.env[key]).trim();
    }
  } catch {
    // Fallback
  }
  return '';
};

const validateAppUrl = (url: string): { validUrl: string; isConfigured: boolean } => {
  if (!url) return { validUrl: '', isConfigured: false };
  // Check if it's a valid http, https, or relative URL
  if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('/')) {
    return { validUrl: url, isConfigured: true };
  }
  return { validUrl: '', isConfigured: false };
};

const osUrlInfo = validateAppUrl(getEnvVar('VITE_OPROX_OS_URL'));
const codeUrlInfo = validateAppUrl(getEnvVar('VITE_OPROX_CODE_URL'));
const studioUrlInfo = validateAppUrl(getEnvVar('VITE_OPROX_STUDIO_URL'));
const realEstateUrlInfo = validateAppUrl(getEnvVar('VITE_OPROX_REAL_ESTATE_URL'));
const academyUrlInfo = validateAppUrl(getEnvVar('VITE_OPROX_ACADEMY_URL'));

export const OPROX_PRODUCT_REGISTRY: Record<ProductId, ProductRegistryEntry> = {
  os: {
    id: 'os',
    nameEn: 'OPROX OS',
    nameAr: 'أوب روكس OS',
    taglineEn: 'Central intelligent operating environment for organization management & governance',
    taglineAr: 'بيئة التشغيل والإدارة الذكية الأساسية للمؤسسات والحوكمة',
    descriptionEn: 'The central administration layer for organization management, user governance, subscriptions, and security rules across the ecosystem.',
    descriptionAr: 'منصة الإدارة والتشغيل المركزية للمؤسسات، والمستخدمين، والحوكمة، والاشتراكات، وسياسات الأمان عبر المنظومة.',
    routePath: '/products/os',
    appUrl: osUrlInfo.validUrl,
    isEnabled: true,
    isAppUrlConfigured: osUrlInfo.isConfigured,
  },
  code: {
    id: 'code',
    nameEn: 'OPROX Code',
    nameAr: 'أوب روكس Code',
    taglineEn: 'AI-assisted software engineering and development environment',
    taglineAr: 'بيئة هندسة وتطوير البرمجيات المدعومة بالذكاء الاصطناعي',
    descriptionEn: 'High-performance AI development suite providing cloud workspace environments, intelligent code generation, and team collaboration.',
    descriptionAr: 'منظومة تطوير برمجية متقدمة توفر بيئات عمل سحابية، توليد الكود بالذكاء الاصطناعي، والتعاون البرمجي.',
    routePath: '/products/code',
    appUrl: codeUrlInfo.validUrl,
    isEnabled: true,
    isAppUrlConfigured: codeUrlInfo.isConfigured,
  },
  studio: {
    id: 'studio',
    nameEn: 'OPROX Studio',
    nameAr: 'أوب روكس Studio',
    taglineEn: 'Visual creation and application-building environment',
    taglineAr: 'بيئة الابتكار البصري وبناء التطبيقات المتقدمة',
    descriptionEn: 'Visual application composer allowing teams to model interfaces, design workflows, and rapidly deploy modern web solutions.',
    descriptionAr: 'منصة الابتكار والتصميم البصري لبناء وتطوير الواجهات وسير العمل وإطلاق التطبيقات السريعة.',
    routePath: '/products/studio',
    appUrl: studioUrlInfo.validUrl,
    isEnabled: true,
    isAppUrlConfigured: studioUrlInfo.isConfigured,
  },
  'real-estate': {
    id: 'real-estate',
    nameEn: 'OPROX Real Estate',
    nameAr: 'أوب روكس Real Estate',
    taglineEn: 'Real estate technology platform for property digital workflows',
    taglineAr: 'منصة تقنيات العقارات وإدارة سير العمل والتجارب الرقمية',
    descriptionEn: 'Specialized property technology platform empowering real estate discovery, digital workflows, property management, and asset insights.',
    descriptionAr: 'منصة تقنيات العقارات المتخصصة للاكتشاف الرقمي، أتمتة العمليات العقارية، وإدارة الأصول والبيانات.',
    routePath: '/products/real-estate',
    appUrl: realEstateUrlInfo.validUrl,
    isEnabled: true,
    isAppUrlConfigured: realEstateUrlInfo.isConfigured,
  },
  academy: {
    id: 'academy',
    nameEn: 'OPROX Academy',
    nameAr: 'أوب روكس Academy',
    taglineEn: 'Learning platform for courses, assessments, and practical labs',
    taglineAr: 'منصة التعلم والدورات التدريبية والشهادات والمختبرات العملية',
    descriptionEn: 'Interactive technology academy offering specialized learning tracks, hands-on code labs, AI tutoring, and certified skills.',
    descriptionAr: 'أكاديمية تقنية تفاعلية تقدم مسارات تعليمية، مختبرات برمجية عملية، موجه تعليمي بالذكاء الاصطناعي، وشهادات معتمدة.',
    routePath: '/products/academy',
    appUrl: academyUrlInfo.validUrl,
    isEnabled: true,
    isAppUrlConfigured: academyUrlInfo.isConfigured,
  },
};

// Legacy compatibility export
export const PRODUCT_LINKS = {
  os: OPROX_PRODUCT_REGISTRY.os,
  code: OPROX_PRODUCT_REGISTRY.code,
  studio: OPROX_PRODUCT_REGISTRY.studio,
  realEstate: OPROX_PRODUCT_REGISTRY['real-estate'],
  academy: OPROX_PRODUCT_REGISTRY.academy,
};
