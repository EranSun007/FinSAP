/**
 * BTP Prepaid Quota Data
 * Static sample data based on the Prepaid Quota Visibility use case
 */

export const btpQuotaData = [
  {
    quotaId: 'Q-2025-HANA-001',
    serviceName: 'SAP HANA Cloud',
    serviceIcon: 'database',
    quotaType: 'prepaid-direct',
    directoryId: 'prod-services',
    directoryName: 'Production Services',
    totalQuota: 10000,
    remainingQuota: 6234,
    consumedQuota: 3766,
    unit: 'GB-hours',
    purchaseDate: '2025-01-01',
    expirationDate: '2025-12-31',
    dailyBurnRate: 45.5,
    projectedExhaustion: '2025-08-15',
    status: 'healthy',
    utilizationPct: 37.66
  },
  {
    quotaId: 'Q-2025-CF-002',
    serviceName: 'Cloud Foundry Runtime',
    serviceIcon: 'cloud',
    quotaType: 'prepaid-direct',
    directoryId: 'dev-services',
    directoryName: 'Development Services',
    totalQuota: 50000,
    remainingQuota: 12500,
    consumedQuota: 37500,
    unit: 'GB-hours',
    purchaseDate: '2025-01-01',
    expirationDate: '2025-12-31',
    dailyBurnRate: 125.0,
    projectedExhaustion: '2025-04-10',
    status: 'warning',
    utilizationPct: 75.0
  },
  {
    quotaId: 'Q-2025-AI-003',
    serviceName: 'AI Core',
    serviceIcon: 'machine-learning',
    quotaType: 'prepaid-referenced',
    directoryId: 'innovation-lab',
    directoryName: 'Innovation Lab',
    parentQuotaId: 'Q-2025-GLOBAL-AI',
    parentDirectoryName: 'Global AI Services',
    totalQuota: 25000,
    remainingQuota: 2125,
    consumedQuota: 22875,
    unit: 'AI Units',
    purchaseDate: '2025-01-01',
    expirationDate: '2025-06-30',
    dailyBurnRate: 180.5,
    projectedExhaustion: '2025-02-08',
    status: 'critical',
    utilizationPct: 91.5
  },
  {
    quotaId: 'Q-2025-BPA-004',
    serviceName: 'SAP Build Process Automation',
    serviceIcon: 'process',
    quotaType: 'prepaid-direct',
    directoryId: 'automation-hub',
    directoryName: 'Automation Hub',
    totalQuota: 5000,
    remainingQuota: 4200,
    consumedQuota: 800,
    unit: 'Automation Runs',
    purchaseDate: '2025-01-01',
    expirationDate: '2025-12-31',
    dailyBurnRate: 8.5,
    projectedExhaustion: '2026-03-15',
    status: 'healthy',
    utilizationPct: 16.0
  },
  {
    quotaId: 'Q-2025-WZ-005',
    serviceName: 'SAP Build Work Zone',
    serviceIcon: 'home',
    quotaType: 'dual', // Special: has both direct and referenced quotas
    isDualQuota: true,
    directoryId: 'enterprise-portal',
    directoryName: 'Enterprise Portal',
    // Direct Quota - Standard Edition (purchased directly)
    directQuota: {
      quotaId: 'Q-2025-WZ-DIRECT',
      label: 'Standard Edition',
      totalQuota: 5000,
      remainingQuota: 3750,
      consumedQuota: 1250,
      unit: 'Active Users',
      utilizationPct: 25.0,
      status: 'healthy',
      dailyBurnRate: 8.2,
      projectedExhaustion: '2026-02-15'
    },
    // Referenced Quota - Advanced Edition (from parent Global Account)
    referencedQuota: {
      quotaId: 'Q-2025-WZ-REF',
      label: 'Advanced Edition',
      parentDirectoryName: 'Global Services',
      totalQuota: 15000,
      remainingQuota: 6000,
      consumedQuota: 9000,
      unit: 'Active Users',
      utilizationPct: 60.0,
      status: 'warning',
      dailyBurnRate: 35.5,
      projectedExhaustion: '2025-07-20'
    },
    // Combined totals
    totalQuota: 20000,
    remainingQuota: 9750,
    consumedQuota: 10250,
    unit: 'Active Users',
    purchaseDate: '2025-01-01',
    expirationDate: '2025-12-31',
    dailyBurnRate: 43.7,
    projectedExhaustion: '2025-08-10',
    status: 'warning', // Overall status based on worst quota
    utilizationPct: 51.25
  }
];

/**
 * Get quota status based on utilization and expiration
 */
export function getQuotaStatus(quota) {
  const daysUntilExpiration = Math.ceil(
    (new Date(quota.expirationDate) - new Date()) / (1000 * 60 * 60 * 24)
  );
  
  if (quota.utilizationPct >= 90 || daysUntilExpiration <= 30) {
    return 'critical';
  }
  if (quota.utilizationPct >= 70 || daysUntilExpiration <= 60) {
    return 'warning';
  }
  return 'healthy';
}

/**
 * Calculate days until projected exhaustion
 */
export function getDaysUntilExhaustion(quota) {
  const exhaustionDate = new Date(quota.projectedExhaustion);
  const today = new Date();
  return Math.ceil((exhaustionDate - today) / (1000 * 60 * 60 * 24));
}

/**
 * Calculate days until expiration
 */
export function getDaysUntilExpiration(quota) {
  const expirationDate = new Date(quota.expirationDate);
  const today = new Date();
  return Math.ceil((expirationDate - today) / (1000 * 60 * 60 * 24));
}

/**
 * Get summary statistics
 */
export function getQuotaSummary(quotas) {
  const total = quotas.length;
  const healthy = quotas.filter(q => q.status === 'healthy').length;
  const warning = quotas.filter(q => q.status === 'warning').length;
  const critical = quotas.filter(q => q.status === 'critical').length;
  const direct = quotas.filter(q => q.quotaType === 'prepaid-direct').length;
  const referenced = quotas.filter(q => q.quotaType === 'prepaid-referenced').length;
  
  return { total, healthy, warning, critical, direct, referenced };
}

/**
 * Burndown data for chart visualization
 * Shows historical consumption over past 30 days
 */
export const btpBurndownData = [
  { day: 1, remaining: 8500, consumed: 1500 },
  { day: 2, remaining: 8420, consumed: 1580 },
  { day: 3, remaining: 8335, consumed: 1665 },
  { day: 4, remaining: 8250, consumed: 1750 },
  { day: 5, remaining: 8180, consumed: 1820 },
  { day: 6, remaining: 8090, consumed: 1910 },
  { day: 7, remaining: 8010, consumed: 1990 },
  { day: 8, remaining: 7920, consumed: 2080 },
  { day: 9, remaining: 7840, consumed: 2160 },
  { day: 10, remaining: 7750, consumed: 2250 },
  { day: 11, remaining: 7670, consumed: 2330 },
  { day: 12, remaining: 7580, consumed: 2420 },
  { day: 13, remaining: 7500, consumed: 2500 },
  { day: 14, remaining: 7410, consumed: 2590 },
  { day: 15, remaining: 7330, consumed: 2670 },
  { day: 16, remaining: 7240, consumed: 2760 },
  { day: 17, remaining: 7150, consumed: 2850 },
  { day: 18, remaining: 7070, consumed: 2930 },
  { day: 19, remaining: 6980, consumed: 3020 },
  { day: 20, remaining: 6890, consumed: 3110 },
  { day: 21, remaining: 6810, consumed: 3190 },
  { day: 22, remaining: 6720, consumed: 3280 },
  { day: 23, remaining: 6640, consumed: 3360 },
  { day: 24, remaining: 6550, consumed: 3450 },
  { day: 25, remaining: 6470, consumed: 3530 },
  { day: 26, remaining: 6380, consumed: 3620 },
  { day: 27, remaining: 6300, consumed: 3700 },
  { day: 28, remaining: 6234, consumed: 3766 },
];

export default btpQuotaData;

