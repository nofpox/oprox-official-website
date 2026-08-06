import { ProductId } from './ecosystem';

/**
 * Shared OPROX Account & Identity Integration Contracts
 * Phase 3 - Centralized Account, User Profile, Roles, & Auth Boundaries
 */

export type AccountStatus = 'active' | 'suspended' | 'pending_verification' | 'unconfigured';

export type UserRole = 'owner' | 'admin' | 'member' | 'guest';

export interface OrganizationMembership {
  organizationId: string;
  organizationName: string;
  role: UserRole;
  assignedProducts: ProductId[];
  isDefault: boolean;
}

export interface OproxAccountProfile {
  id: string;
  accountId: string;
  email: string;
  displayName?: string;
  locale?: 'ar' | 'en';
  status: AccountStatus;
  createdAt?: string;
  organizations: OrganizationMembership[];
  accessibleProducts: ProductId[];
}

export type AuthOperationStatus = 'NOT_CONFIGURED' | 'SUCCESS' | 'ERROR' | 'INVALID_INPUT';

export interface AuthSession {
  token?: string;
  expiresAt?: string;
  user: OproxAccountProfile;
}

export interface AuthResponse {
  status: AuthOperationStatus;
  session?: AuthSession;
  messageEn: string;
  messageAr: string;
  code?: string;
}

export interface ReturnToProductParams {
  productId?: ProductId;
  returnUrl?: string;
}

export interface ValidatedReturnTarget {
  isValid: boolean;
  safeUrl: string;
  isExternalProductUrl: boolean;
  productId?: ProductId;
}
