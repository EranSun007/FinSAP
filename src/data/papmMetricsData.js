export const papmMetrics = [
  // PaPM Metrics
  {
    key: 'total_peak_memory',
    name: 'Total Peak Memory',
    color: '#e74c3c',
    category: 'PaPM',
    unit: 'GB',
    strokeWidth: 3
  },
  {
    key: 'hana_storage_memory_gb_sm',
    name: 'Storage Memory (SM)',
    color: '#3498db',
    category: 'PaPM',
    unit: 'GB',
    strokeWidth: 2
  },
  {
    key: 'hana_peak_calculation_memory_gb_sm',
    name: 'Peak Calculation Memory (SM)',
    color: '#f39c12',
    category: 'PaPM',
    unit: 'GB',
    strokeWidth: 2
  },
  // HANA Cloud Metrics (UDM)
  {
    key: 'hc_compute_memory_gb',
    name: 'Compute Memory (avg)',
    color: '#16a085',
    category: 'HANA Cloud (UDM)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'hc_storage_gb',
    name: 'Storage (avg)',
    color: '#9b59b6',
    category: 'HANA Cloud (UDM)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'capacity_units',
    name: 'Capacity Units (daily)',
    color: '#27ae60',
    category: 'HANA Cloud (UDM)',
    unit: 'CU',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'hc_compute_vcpu',
    name: 'vCPU Count',
    color: '#c0392b',
    category: 'HANA Cloud (UDM)',
    unit: 'vCPUs',
    strokeWidth: 1,
    strokeDasharray: [2, 2]
  },
  // HANA Cockpit System Views (Real-time queries)
  {
    key: 'hana_column_store_gb',
    name: 'Column Store Memory',
    color: '#d35400',
    category: 'HANA Cockpit (Live)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'hana_papm_tables_gb',
    name: 'PaPM Tables (M_CS_TABLES)',
    color: '#2980b9',
    category: 'HANA Cockpit (Live)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'hana_heap_memory_gb',
    name: 'Heap Memory',
    color: '#8e44ad',
    category: 'HANA Cockpit (Live)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  // PaPM Model Types (Brandon's Brewery Model - L/P/F)
  {
    key: 'papm_model_lifd_gb',
    name: 'LIFD Model',
    color: '#1abc9c',
    category: 'PaPM Model Types (L/P/F)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'papm_model_psa_gb',
    name: 'PSA Model',
    color: '#e67e22',
    category: 'PaPM Model Types (L/P/F)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'papm_model_profitability_gb',
    name: 'Profitability Model',
    color: '#c0392b',
    category: 'PaPM Model Types (L/P/F)',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  // Cloud ALM Metrics
  {
    key: 'calm_memory_utilization',
    name: 'Memory Utilization',
    color: '#8e44ad',
    category: 'Cloud ALM',
    unit: '%',
    strokeWidth: 2
  },
  {
    key: 'calm_avg_query_duration',
    name: 'Avg Query Duration',
    color: '#e67e22',
    category: 'Cloud ALM',
    unit: 'ms',
    strokeWidth: 2
  },
  {
    key: 'calm_query_volume',
    name: 'Query Volume',
    color: '#2980b9',
    category: 'Cloud ALM',
    unit: 'Queries',
    strokeWidth: 2
  }
];

export const papmCategories = ['PaPM', 'PaPM Model Types (L/P/F)', 'HANA Cloud (UDM)', 'HANA Cockpit (Live)', 'Cloud ALM'];

