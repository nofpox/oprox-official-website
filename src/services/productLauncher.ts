import {
  ProductId,
  LaunchResult,
  ProductRegistryEntry,
  CrossProductNavigationRequest,
  PlatformType,
} from '../types/ecosystem';
import { OPROX_PRODUCT_REGISTRY } from '../config/productLinks';

/**
 * Platform capability helper (does not use invasive tracking or device fingerprinting).
 */
export function detectPlatform(): PlatformType {
  if (typeof window === 'undefined' || !window.navigator) {
    return 'UNKNOWN';
  }
  const ua = window.navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(ua)) {
    return 'IOS';
  }
  if (/Android/.test(ua)) {
    return 'ANDROID';
  }
  return 'WEB';
}

/**
 * Validates destination URL security to prevent open redirects, javascript: execution, data: URIs, or recursive loops.
 */
export function validateDestinationUrl(url?: string): { isSafe: boolean; isRelative: boolean } {
  if (!url) return { isSafe: false, isRelative: false };
  const trimmed = url.trim();

  // Block dangerous schemes
  const lower = trimmed.toLowerCase();
  if (
    lower.startsWith('javascript:') ||
    lower.startsWith('data:') ||
    lower.startsWith('vbscript:') ||
    lower.startsWith('file:')
  ) {
    return { isSafe: false, isRelative: false };
  }

  // Safe relative paths
  if (trimmed.startsWith('/') && !trimmed.startsWith('//') && !trimmed.includes('\\')) {
    return { isSafe: true, isRelative: true };
  }

  // Safe http / https URLs
  if (trimmed.startsWith('https://') || trimmed.startsWith('http://')) {
    return { isSafe: true, isRelative: false };
  }

  return { isSafe: false, isRelative: false };
}

export function getProductRegistryEntry(productId: ProductId): ProductRegistryEntry | undefined {
  return OPROX_PRODUCT_REGISTRY[productId];
}

/**
 * Centralized Product Launch Service for OPROX Ecosystem.
 * All product entry points execute through this service.
 */
export function launchProduct(productId: ProductId, lang: 'ar' | 'en' = 'en'): LaunchResult {
  return launchCrossProduct({ targetProduct: productId, launchPreference: 'auto' }, lang);
}

/**
 * Smart Cross-Product Launch Decision logic.
 */
export function launchCrossProduct(
  request: CrossProductNavigationRequest,
  lang: 'ar' | 'en' = 'en'
): LaunchResult {
  const { targetProduct, launchPreference = 'auto' } = request;
  const entry = OPROX_PRODUCT_REGISTRY[targetProduct];
  const platform = detectPlatform();

  if (!entry) {
    return {
      productId: targetProduct,
      status: 'disabled',
      usedPlatform: platform,
      messageEn: 'Invalid product requested.',
      messageAr: 'المنتج المطلوب غير صالح.',
    };
  }

  if (!entry.isEnabled) {
    return {
      productId: targetProduct,
      status: 'disabled',
      usedPlatform: platform,
      messageEn: `${entry.nameEn} is currently disabled in system registry.`,
      messageAr: `${entry.nameAr} غير مفعل حالياً في سجل النظام.`,
    };
  }

  // Smart Mobile Launch attempt if requested and configured
  if (
    (launchPreference === 'mobile' || (launchPreference === 'auto' && (platform === 'IOS' || platform === 'ANDROID'))) &&
    entry.mobile
  ) {
    const mobileLink = platform === 'IOS' ? entry.mobile.universalLink || entry.mobile.deepLink : entry.mobile.androidAppLink || entry.mobile.deepLink;
    if (mobileLink) {
      const { isSafe } = validateDestinationUrl(mobileLink);
      if (isSafe) {
        try {
          window.location.href = mobileLink;
          return {
            productId: targetProduct,
            status: 'launched_mobile',
            destinationUrl: mobileLink,
            usedPlatform: platform,
            messageEn: `Launching ${entry.nameEn} mobile app...`,
            messageAr: `جاري فتح تطبيق ${entry.nameAr} على الهاتف...`,
          };
        } catch {
          // Fall through to web destination
        }
      }
    }
  }

  // Web Application Destination
  if (entry.isAppUrlConfigured && entry.appUrl) {
    const rawUrl = entry.appUrl.trim();
    const { isSafe, isRelative } = validateDestinationUrl(rawUrl);

    if (!isSafe) {
      return {
        productId: targetProduct,
        status: 'invalid_url',
        usedPlatform: platform,
        messageEn: `Security Warning: Configured destination for ${entry.nameEn} uses an untrusted URL scheme.`,
        messageAr: `تحذير أمني: وجهة التطبيق المحددة لـ ${entry.nameAr} تستخدم بروتوكولاً غير موثوق.`,
      };
    }

    try {
      if (isRelative) {
        window.location.href = rawUrl;
      } else {
        window.open(rawUrl, '_blank', 'noopener,noreferrer');
      }

      return {
        productId: targetProduct,
        status: 'launched_external',
        destinationUrl: rawUrl,
        usedPlatform: platform,
        messageEn: `Launching ${entry.nameEn}...`,
        messageAr: `جاري تشغيل ${entry.nameAr}...`,
      };
    } catch {
      return {
        productId: targetProduct,
        status: 'invalid_url',
        usedPlatform: platform,
        messageEn: `Failed to open destination for ${entry.nameEn}.`,
        messageAr: `فشل فتح وجهة التطبيق لـ ${entry.nameAr}.`,
      };
    }
  }

  // Honest unconfigured state
  return {
    productId: targetProduct,
    status: 'unconfigured',
    destinationUrl: entry.routePath,
    usedPlatform: platform,
    messageEn: `${entry.nameEn} web application destination is pending backend configuration. You can view product details on the official page.`,
    messageAr: `وجهة تطبيق ${entry.nameAr} تتطلب إعداد عنوان الخدمة في البيئة السحابية. يمكنك الاطلاع على تفاصيل المنصة عبر الصفحة الرسمية.`,
  };
}

