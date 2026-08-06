/**
 * OPROX Ecosystem & Gateway Integration Foundation Types
 * Phase 2 - Centralized Product Registry, Launch Contracts, Account & Entitlement Boundaries
 */

export type ProductId = 'os' | 'code' | 'studio' | 'real-estate' | 'academy';

export type SourceOrigin = ProductId | 'official-website';

export type PlatformType = 'WEB' | 'IOS' | 'ANDROID' | 'UNKNOWN';

export interface MobileDestinationMetadata {
  deepLink?: string;
  universalLink?: string;
  androidAppLink?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface CrossProductNavigationRequest {
  sourceProduct?: SourceOrigin;
  targetProduct: ProductId;
  returnTarget?: string;
  webDestination?: string;
  mobileDestination?: string;
  launchPreference?: 'auto' | 'web' | 'mobile';
}

export interface ProductRegistryEntry {
  id: ProductId;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  routePath: string; // Public website product detail route
  appUrl?: string; // Configured web application destination
  mobile?: MobileDestinationMetadata;
  isEnabled: boolean;
  isAppUrlConfigured: boolean;
}

export interface OproxUser {
  id: string;
  email: string;
  fullName?: string;
  defaultOrgId?: string;
  createdAt?: string;
}

export interface OproxOrganization {
  id: string;
  name: string;
  plan: string;
  createdAt?: string;
}

export interface OproxEntitlement {
  productId: ProductId;
  isActive: boolean;
  tier: 'free' | 'pro' | 'enterprise';
  validUntil?: string;
}

export interface OproxSubscription {
  id: string;
  orgId?: string;
  productId: ProductId;
  status: 'active' | 'trialing' | 'canceled' | 'past_due' | 'unconfigured';
  renewsAt?: string;
}

export interface LaunchResult {
  status: 'launched_external' | 'launched_mobile' | 'navigated_internal' | 'unconfigured' | 'disabled' | 'invalid_url';
  destinationUrl?: string;
  productId: ProductId;
  usedPlatform?: PlatformType;
  messageEn: string;
  messageAr: string;
}

/**
 * Shared Contract for Product Apps returning to Official Website
 */
export const OFFICIAL_WEBSITE_CONTRACT = {
  baseUrl: '/',
  homeRoute: '/',
  productsOverviewRoute: '/products',
  loginRoute: '/login',
  accountGatewayRoute: '/account',
  getReturnUrl: (sourceProduct: ProductId) => `/?source=${sourceProduct}`,
};

/**
 * Shared Contract for Product App Account Menus
 */
export interface ProductAppAccountMenuItem {
  id: 'account' | 'subscription' | 'billing' | 'products' | 'organizations' | 'website' | 'signout';
  labelEn: string;
  labelAr: string;
  destinationRoute: string;
}

export const PRODUCT_APP_ACCOUNT_MENU_CONTRACT: ProductAppAccountMenuItem[] = [
  { id: 'account', labelEn: 'My Account', labelAr: 'حسابي الشخصي', destinationRoute: '/account' },
  { id: 'subscription', labelEn: 'My Subscription', labelAr: 'اشتراكي الحالي', destinationRoute: '/account#subscription' },
  { id: 'billing', labelEn: 'Billing & Invoices', labelAr: 'الفوترة والدفع', destinationRoute: '/account#billing' },
  { id: 'products', labelEn: 'OPROX Products', labelAr: 'منتجات أوب روكس', destinationRoute: '/products' },
  { id: 'organizations', labelEn: 'Organization', labelAr: 'المؤسسة والفرق', destinationRoute: '/account#organization' },
  { id: 'website', labelEn: 'Official OPROX Website', labelAr: 'الموقع الرسمي لأوب روكس', destinationRoute: '/' },
  { id: 'signout', labelEn: 'Sign Out', labelAr: 'تسجيل الخروج', destinationRoute: '/login' },
];

