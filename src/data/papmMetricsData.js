export const papmMetrics = [
  // PaPM Metrics
  {
    key: 'total_peak_memory',
    name: 'PaPM: Total Peak Memory',
    color: '#e74c3c',
    category: 'PaPM',
    unit: 'GB',
    strokeWidth: 3
  },
  {
    key: 'hana_storage_memory_gb_sm',
    name: 'PaPM: Storage Memory (SM)',
    color: '#3498db',
    category: 'PaPM',
    unit: 'GB',
    strokeWidth: 2
  },
  {
    key: 'hana_peak_calculation_memory_gb_sm',
    name: 'PaPM: Peak Calculation Memory (SM)',
    color: '#f39c12',
    category: 'PaPM',
    unit: 'GB',
    strokeWidth: 2
  },
  // HANA Cloud Metrics (UDM)
  {
    key: 'hc_compute_memory_gb',
    name: 'HANA Cloud: Compute Memory (avg)',
    color: '#16a085',
    category: 'HANA Cloud (UDM)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'hc_storage_gb',
    name: 'HANA Cloud: Storage (avg)',
    color: '#9b59b6',
    category: 'HANA Cloud (UDM)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'capacity_units',
    name: 'HANA Cloud: Capacity Units (daily)',
    color: '#27ae60',
    category: 'HANA Cloud (UDM)',
    unit: 'CU',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'hc_compute_vcpu',
    name: 'HANA Cloud: vCPU Count',
    color: '#c0392b',
    category: 'HANA Cloud (UDM)',
    unit: 'vCPUs',
    strokeWidth: 1,
    strokeDasharray: [2, 2]
  },
  // HANA Cockpit System Views (Real-time queries)
  {
    key: 'hana_column_store_gb',
    name: 'HANA Cockpit: Column Store Memory',
    color: '#d35400',
    category: 'HANA Cockpit (Live)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'hana_papm_tables_gb',
    name: 'HANA Cockpit: PaPM Tables (M_CS_TABLES)',
    color: '#2980b9',
    category: 'HANA Cockpit (Live)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'hana_heap_memory_gb',
    name: 'HANA Cockpit: Heap Memory',
    color: '#8e44ad',
    category: 'HANA Cockpit (Live)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  // PaPM Model Types (Brandon's Brewery Model - L/P/F)
  {
    key: 'papm_model_lifd_gb',
    name: 'PaPM Model: L (LIFD) - 0.357 base',
    color: '#1abc9c',
    category: 'PaPM Model Types (L/P/F)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'papm_model_psa_gb',
    name: 'PaPM Model: P (PSA) - 0.579 base',
    color: '#e67e22',
    category: 'PaPM Model Types (L/P/F)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'papm_model_profitability_gb',
    name: 'PaPM Model: F (Profitability) - 0.859 base',
    color: '#c0392b',
    category: 'PaPM Model Types (L/P/F)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
];

export const papmCategories = ['PaPM', 'PaPM Model Types (L/P/F)', 'HANA Cloud (UDM)', 'HANA Cockpit (Live)'];

