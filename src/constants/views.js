/**
 * View Constants
 *
 * Single source of truth for all view IDs in the application.
 * Use these constants instead of hardcoded strings to prevent typos
 * and enable IDE autocomplete.
 *
 * Benefits:
 * - Compile-time safety (typos become errors)
 * - Easy refactoring (change in one place)
 * - Self-documenting (see all available views)
 * - IDE autocomplete support
 */

export const VIEWS = {
  // Main pages
  OVERVIEW: 'overview',
  COST_BREAKDOWN: 'cost-breakdown',

  // SaaS Subscriptions
  SAM: 'sam',
  PAPM: 'papm',
  SIGNAVIO: 'signavio',
  SAC: 'sac',
  HARVESTING: 'harvesting',

  // Billing Verification
  SERVICE_MANAGER: 'service-manager',
  INVOICES: 'invoices',
  PAYMENT_HISTORY: 'payment-history',

  // Credit Expenditure
  USAGE_HISTORY: 'usage-history',
  FORECAST: 'forecast',

  // Cross Charging
  INTERNAL_BILLING: 'internal-billing',
  REPORTS: 'reports',

  // Other
  MONITORING_ALERTING: 'monitoring-alerting',
  COST_OPTIMIZATION: 'cost-optimization',
  SERVICE_DETAILS: 'service-details',

  // Special
  JOULE: 'joule'
};

/**
 * Navigation group IDs (not actual views, just for organization)
 */
export const NAV_GROUPS = {
  SAAS_SUBSCRIPTIONS: 'saas-subscriptions',
  BILLING_VERIFICATION: 'billing-verification',
  CREDIT_EXPENDITURE: 'credit-expenditure',
  CROSS_CHARGING: 'cross-charging'
};

/**
 * Check if a view ID is valid
 * @param {string} viewId - The view ID to validate
 * @returns {boolean} - True if the view exists
 */
export const isValidView = (viewId) => {
  return Object.values(VIEWS).includes(viewId);
};

/**
 * Get the default/fallback view
 * @returns {string} - The default view ID
 */
export const getDefaultView = () => VIEWS.OVERVIEW;

/**
 * Get all available view IDs
 * @returns {string[]} - Array of all view IDs
 */
export const getAllViews = () => Object.values(VIEWS);
