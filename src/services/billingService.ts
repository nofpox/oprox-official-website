import {
  CheckoutRequest,
  CheckoutResult,
  BillingPortalResult,
  EntitlementCheckResult,
} from '../types/billing';
import { ProductId } from '../types/ecosystem';
import { OPROX_PRODUCT_REGISTRY } from '../config/productLinks';

/**
 * Centralized Billing & Checkout Integration Boundary Service
 * Phase 3 - OPROX Centralized Billing Foundation
 *
 * Current State: NOT_CONFIGURED (Pending production payment provider gateway)
 * Zero simulated payments, zero fake checkouts, zero fake payment success messages.
 */

export async function initiateCheckout(request: CheckoutRequest): Promise<CheckoutResult> {
  const product = OPROX_PRODUCT_REGISTRY[request.productId];
  const nameEn = product ? product.nameEn : request.productId;
  const nameAr = product ? product.nameAr : request.productId;

  return {
    status: 'NOT_CONFIGURED',
    messageEn: `Billing and subscription processing for ${nameEn} is awaiting production payment gateway configuration.`,
    messageAr: `معالجة الاشتراكات والمدفوعات لـ ${nameAr} بانتظار ربط بوابة الدفع الإلكتروني المعتمدة.`,
  };
}

export async function openBillingPortal(
  _accountId?: string,
  _orgId?: string
): Promise<BillingPortalResult> {
  return {
    status: 'NOT_CONFIGURED',
    messageEn: 'OPROX Centralized Billing Portal is awaiting production backend provider configuration.',
    messageAr: 'بوابة الاشتراكات والفواتير الموحدة بانتظار ربط نظام الفوترة المركزي في البيئة السحابية.',
  };
}

export async function getSubscriptionStatus(
  productId: ProductId,
  _accountId?: string
): Promise<EntitlementCheckResult> {
  const product = OPROX_PRODUCT_REGISTRY[productId];
  const nameEn = product ? product.nameEn : productId;
  const nameAr = product ? product.nameAr : productId;

  return {
    productId,
    state: 'NOT_CONFIGURED',
    tier: 'free',
    isEntitled: false,
    messageEn: `Subscription query service for ${nameEn} is not configured.`,
    messageAr: `خدمة استعلام حالة الاشتراك لـ ${nameAr} غير مهيأة بعد.`,
  };
}
