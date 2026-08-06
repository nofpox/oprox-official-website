import { ProductId } from '../types/ecosystem';
import { EntitlementCheckResult } from '../types/billing';
import { OPROX_PRODUCT_REGISTRY } from '../config/productLinks';

/**
 * Centralized Product Access & Entitlement Integration Boundary Service
 * Phase 3 - Entitlement & Access Control Foundation
 *
 * Current State: NOT_CONFIGURED (Pending production entitlement backend API)
 * Zero fake entitlement grants.
 */

export async function checkProductEntitlement(
  productId: ProductId,
  _accountId?: string,
  _orgId?: string
): Promise<EntitlementCheckResult> {
  const product = OPROX_PRODUCT_REGISTRY[productId];
  const nameEn = product ? product.nameEn : productId;
  const nameAr = product ? product.nameAr : productId;

  return {
    productId,
    state: 'NOT_CONFIGURED',
    tier: 'free',
    isEntitled: false,
    messageEn: `Entitlement verification service for ${nameEn} is awaiting backend entitlement system connection.`,
    messageAr: `خدمة التحقق من صلاحيات الوصول والاستحقاق لـ ${nameAr} بانتظار الربط مع نظام الصلاحيات المركزي.`,
  };
}

export async function getUserEntitlements(
  _accountId?: string
): Promise<EntitlementCheckResult[]> {
  const products: ProductId[] = ['os', 'code', 'studio', 'real-estate', 'academy'];
  return Promise.all(products.map((p) => checkProductEntitlement(p)));
}
