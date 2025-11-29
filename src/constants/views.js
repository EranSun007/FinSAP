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

  // SaaS Subscriptions - S/4
  SAM: 'sam',
  PAPM: 'papm',

  // SaaS Subscriptions - BTP
  BTP: 'btp',
  WORKZONE_DETAILS: 'workzone-details',
  AI_CORE: 'ai-core',
  HANA_CLOUD: 'hana-cloud',

  // SaaS Subscriptions - Other
  SAC: 'sac',
  SIGNAVIO: 'signavio',
  HARVESTING: 'harvesting',

  // Billing Verification
  SERVICE_MANAGER: 'service-manager',
  TECHNICAL_ALLOCATION: 'technical-allocation',

  // Cost Breakdown
  COST_BREAKDOWN: 'cost-breakdown',
  COST_BREAKDOWN_DAILY: 'cost-breakdown-daily',
  COST_BREAKDOWN_MONTHLY: 'cost-breakdown-monthly',

  // Credit Expenditure
  CREDITS_CONSUMPTION: 'credits-consumption',
  CREDIT_PROJECTION: 'credit-projection',

  // Cross Charging
  MANAGE_TAGS: 'manage-tags',
  COST_BY_TAGS_DAILY: 'cost-by-tags-daily',
  COST_BY_TAGS_MONTHLY: 'cost-by-tags-monthly',
  DASHBOARD_DAILY: 'dashboard-daily',
  DASHBOARD_MONTHLY: 'dashboard-monthly',

  // Other
  MONITORING_ALERTING: 'monitoring-alerting',
  SERVICE_DETAILS: 'service-details',

  // Cost Optimization
  RIGHTSIZING: 'rightsizing',
  APPLICATIONS_UTILIZATION: 'applications-utilization',

  // Special
  JOULE: 'joule'
};

/**
 * Navigation group IDs (not actual views, just for organization)
 */
export const NAV_GROUPS = {
  SAAS_SUBSCRIPTIONS: 'saas-subscriptions',
  S4: 's4-submenu',
  BTP_SUBMENU: 'btp-submenu',
  BILLING_VERIFICATION: 'billing-verification',
  COST_BREAKDOWN: 'cost-breakdown-group',
  CREDIT_EXPENDITURE: 'credit-expenditure',
  CROSS_CHARGING: 'cross-charging',
  COST_OPTIMIZATION: 'cost-optimization'
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
