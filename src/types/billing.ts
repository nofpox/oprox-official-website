import { ProductId } from './ecosystem';

/**
 * Shared OPROX Billing Integration Contracts
 * Phase 3 - Centralized Billing, Subscriptions, Checkout Requests, & Entitlements
 */

export type BillingPlanTier = 'free' | 'pro' | 'enterprise';

export type BillingCycle = 'monthly' | 'annual';

export type SubscriptionState =
  | 'UNKNOWN'
  | 'NOT_CONFIGURED'
  | 'ACTIVE'
  | 'INACTIVE'
  | 'EXPIRED'
  | 'SUSPENDED'
  | 'NOT_ENTITLED'
  | 'TRIALING'
  | 'PAST_DUE';

export interface BillingPlan {
  id: string;
  productId: ProductId;
  nameEn: string;
  nameAr: string;
  tier: BillingPlanTier;
  priceMonthlyUsd?: number;
  priceAnnualUsd?: number;
  featuresEn: string[];
  featuresAr: string[];
}

export interface BillingCustomer {
  customerId: string;
  accountId: string;
  email: string;
  orgId?: string;
}

export interface BillingSubscription {
  subscriptionId: string;
  accountId: string;
  orgId?: string;
  productId: ProductId;
  tier: BillingPlanTier;
  state: SubscriptionState;
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface CheckoutRequest {
  productId: ProductId;
  planTier: BillingPlanTier;
  cycle: BillingCycle;
  accountId?: string;
  orgId?: string;
  returnUrl?: string;
}

export type BillingOperationStatus = 'NOT_CONFIGURED' | 'SUCCESS' | 'ERROR' | 'INVALID_REQUEST';

export interface CheckoutResult {
  status: BillingOperationStatus;
  checkoutUrl?: string;
  messageEn: string;
  messageAr: string;
}

export interface BillingPortalResult {
  status: BillingOperationStatus;
  portalUrl?: string;
  messageEn: string;
  messageAr: string;
}

export interface EntitlementCheckResult {
  productId: ProductId;
  state: SubscriptionState;
  tier: BillingPlanTier;
  isEntitled: boolean;
  messageEn: string;
  messageAr: string;
}
