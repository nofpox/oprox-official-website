import { ProductId } from '../types/ecosystem';

/**
 * Production-Safe Environment Configuration Boundary Contract
 * Phase 4 - Real Product Connection & Deployment Configuration
 *
 * Exports validated, browser-safe environment configurations.
 * Contains ZERO secrets or private credentials.
 */

const getEnv = (key: string): string => {
  try {
    const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env;
    if (metaEnv && metaEnv[key]) {
      return String(metaEnv[key]).trim();
    }
  } catch {
    // Fallback
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

export interface ProductEnvConfig {
  osUrl: string;
  codeUrl: string;
  studioUrl: string;
  realEstateUrl: string;
  academyUrl: string;
  authEndpoint: string;
  accountEndpoint: string;
  billingEndpoint: string;
  entitlementEndpoint: string;
}

export const ENV_CONFIG: ProductEnvConfig = {
  osUrl: getEnv('VITE_OPROX_OS_URL'),
  codeUrl: getEnv('VITE_OPROX_CODE_URL'),
  studioUrl: getEnv('VITE_OPROX_STUDIO_URL'),
  realEstateUrl: getEnv('VITE_OPROX_REAL_ESTATE_URL'),
  academyUrl: getEnv('VITE_OPROX_ACADEMY_URL'),
  authEndpoint: getEnv('VITE_OPROX_AUTH_ENDPOINT'),
  accountEndpoint: getEnv('VITE_OPROX_ACCOUNT_ENDPOINT'),
  billingEndpoint: getEnv('VITE_OPROX_BILLING_ENDPOINT'),
  entitlementEndpoint: getEnv('VITE_OPROX_ENTITLEMENT_ENDPOINT'),
};

export type ConnectionStatus = 'CONFIGURED' | 'NOT_CONFIGURED' | 'UNAVAILABLE';

export interface ProductConnectionState {
  productId: ProductId;
  status: ConnectionStatus;
  destinationUrl: string;
  isConfigured: boolean;
}

export function getProductConnectionState(productId: ProductId, url: string): ProductConnectionState {
  if (!url || url.trim() === '') {
    return {
      productId,
      status: 'NOT_CONFIGURED',
      destinationUrl: '',
      isConfigured: false,
    };
  }

  const isValidScheme = url.startsWith('https://') || url.startsWith('http://') || url.startsWith('/');
  if (!isValidScheme) {
    return {
      productId,
      status: 'UNAVAILABLE',
      destinationUrl: '',
      isConfigured: false,
    };
  }

  return {
    productId,
    status: 'CONFIGURED',
    destinationUrl: url,
    isConfigured: true,
  };
}
