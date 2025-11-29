/**
 * SAP Build Work Zone - Prepaid Quota Data
 * Based on real Bosch customer data structure
 */

// Monthly quota trend data (12-month history)
export const workZoneMonthlyData = [
  { month: 'Dec 23', referenced: 330, dynamic: 44, total: 374, actualUsage: 293 },
  { month: 'Jan 24', referenced: 330, dynamic: 44, total: 374, actualUsage: 145 },
  { month: 'Feb 24', referenced: 330, dynamic: 44, total: 374, actualUsage: 148 },
  { month: 'Mar 24', referenced: 330, dynamic: 55, total: 385, actualUsage: 261 },
  { month: 'Apr 24', referenced: 330, dynamic: 60, total: 390, actualUsage: 345 },
  { month: 'May 24', referenced: 330, dynamic: 75, total: 405, actualUsage: 398 },
  { month: 'Jun 24', referenced: 330, dynamic: 89, total: 419, actualUsage: 421 },
  { month: 'Jul 24', referenced: 330, dynamic: 102, total: 432, actualUsage: 456 },
  { month: 'Aug 24', referenced: 330, dynamic: 154, total: 484, actualUsage: 485 },
  { month: 'Sep 24', referenced: 330, dynamic: 233, total: 563, actualUsage: 511 },
  { month: 'Oct 24', referenced: 330, dynamic: 148, total: 478, actualUsage: 478 },
  { month: 'Nov 24', referenced: 330, dynamic: 148, total: 478, actualUsage: 478 },
];

// Dynamic quota components breakdown (from Build services consumption)
export const dynamicComponentsData = [
  { month: 'Dec 23', processAutomation: 21, buildApps: 12, workAutomation: 11 },
  { month: 'Jan 24', processAutomation: 21, buildApps: 12, workAutomation: 11 },
  { month: 'Feb 24', processAutomation: 21, buildApps: 12, workAutomation: 11 },
  { month: 'Mar 24', processAutomation: 27, buildApps: 15, workAutomation: 13 },
  { month: 'Apr 24', processAutomation: 29, buildApps: 16, workAutomation: 15 },
  { month: 'May 24', processAutomation: 35, buildApps: 20, workAutomation: 20 },
  { month: 'Jun 24', processAutomation: 42, buildApps: 24, workAutomation: 23 },
  { month: 'Jul 24', processAutomation: 48, buildApps: 28, workAutomation: 26 },
  { month: 'Aug 24', processAutomation: 60, buildApps: 45, workAutomation: 49 },
  { month: 'Sep 24', processAutomation: 90, buildApps: 70, workAutomation: 73 },
  { month: 'Oct 24', processAutomation: 65, buildApps: 40, workAutomation: 43 },
  { month: 'Nov 24', processAutomation: 65, buildApps: 40, workAutomation: 43 },
];

// KPI summary for current month (November 2024)
export const workZoneKPIs = {
  directSubscription: {
    label: 'Direct Subscription',
    value: 0,
    subtext: 'users (no direct subscription)',
    type: 'direct'
  },
  referencedEntitlement: {
    label: 'Referenced Entitlement',
    value: 330,
    subtext: 'users (GROW S/4 + CX contracts)',
    type: 'referenced'
  },
  dynamicEntitlement: {
    label: 'Dynamic Entitlement',
    value: 148,
    subtext: 'users (Nov 2024, from Build consumption)',
    type: 'dynamic'
  },
  totalPrepaid: {
    label: 'Total Prepaid Quota',
    value: 478,
    subtext: 'users available (Nov 2024)',
    type: 'total'
  }
};

// Referenced entitlement sources table data
export const referencedEntitlementSources = [
  {
    contract: 'GROW with SAP S/4HANA (public ed, base)',
    contractId: '505616947',
    logicalProduct: 'S/4HANA Finance Cloud edition',
    quotaType: 'Referenced',
    users: 120,
    status: 'Active'
  },
  {
    contract: 'SAP Service Cloud Version 2',
    contractId: '505301791',
    logicalProduct: 'Service Cloud - Cloud Native Stack',
    quotaType: 'Referenced',
    users: 200,
    status: 'Active'
  },
  {
    contract: 'SAP Sales Cloud Version 2',
    contractId: '505301793',
    logicalProduct: 'Sales Cloud - Cloud Native Stack',
    quotaType: 'Referenced',
    users: 10,
    status: 'Active'
  }
];

// Page metadata
export const workZoneMetadata = {
  title: 'Prepaid Quota Dashboard - SAP Build Work Zone',
  globalAccount: 'CA159926 (Bosch)',
  period: 'Jan 2024 - Nov 2024'
};

// Calculate totals
export const getTotalReferencedUsers = () => {
  return referencedEntitlementSources.reduce((sum, source) => sum + source.users, 0);
};

export default {
  workZoneMonthlyData,
  dynamicComponentsData,
  workZoneKPIs,
  referencedEntitlementSources,
  workZoneMetadata
};

