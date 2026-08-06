import { ProductId } from '../types/ecosystem';

/**
 * Product Availability & Health Contract Boundary
 * Phase 4 - Real Product Connection & Deployment Configuration Foundation
 *
 * Provides passive health state contract without active network polling or background loops.
 * Isolates product availability failures from affecting official website usability.
 */

export type ProductHealthStatus = 'UNKNOWN' | 'AVAILABLE' | 'UNAVAILABLE';

export interface ProductHealthState {
  productId: ProductId;
  status: ProductHealthStatus;
  lastChecked?: string;
  messageEn: string;
  messageAr: string;
}

export function getProductHealthStatus(productId: ProductId): ProductHealthState {
  return {
    productId,
    status: 'UNKNOWN',
    messageEn: 'Product status monitored via passive gateway boundary.',
    messageAr: 'يتم رصد حالة المنتج عبر حد البوابة السلبية دون استعلام متكرر.',
  };
}
