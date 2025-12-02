export const signavioMetrics = [
  // Process Efficiency
  {
    key: 'avg_cycle_time',
    name: 'Avg Cycle Time',
    color: '#e74c3c',
    category: 'Process Efficiency',
    unit: 'hours',
    strokeWidth: 3
  },
  {
    key: 'throughput',
    name: 'Process Throughput',
    color: '#3498db',
    category: 'Process Efficiency',
    unit: 'processes/day',
    strokeWidth: 2
  },
  {
    key: 'avg_wait_time',
    name: 'Avg Wait Time',
    color: '#f39c12',
    category: 'Process Efficiency',
    unit: 'hours',
    strokeWidth: 2
  },
  {
    key: 'avg_processing_time',
    name: 'Avg Processing Time',
    color: '#9b59b6',
    category: 'Process Efficiency',
    unit: 'hours',
    strokeWidth: 2
  },
  // Process Compliance
  {
    key: 'conformance_rate',
    name: 'Conformance Rate',
    color: '#27ae60',
    category: 'Process Compliance',
    unit: '%',
    strokeWidth: 3,
    strokeDasharray: [5, 5]
  },
  {
    key: 'sla_adherence',
    name: 'SLA Adherence',
    color: '#16a085',
    category: 'Process Compliance',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'deviation_rate',
    name: 'Deviation Rate',
    color: '#c0392b',
    category: 'Process Compliance',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  // Automation & AI
  {
    key: 'automation_rate',
    name: 'Automation Rate',
    color: '#8e44ad',
    category: 'Automation & AI',
    unit: '%',
    strokeWidth: 3,
    strokeDasharray: [8, 4]
  },
  {
    key: 'bot_executions',
    name: 'Bot Executions',
    color: '#2980b9',
    category: 'Automation & AI',
    unit: 'runs/day',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'ai_recommendations',
    name: 'AI Recommendations',
    color: '#1abc9c',
    category: 'Automation & AI',
    unit: 'suggestions/day',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  // Process Intelligence
  {
    key: 'process_variants',
    name: 'Process Variants',
    color: '#d35400',
    category: 'Process Intelligence',
    unit: 'count',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'exception_rate',
    name: 'Exception Rate',
    color: '#e67e22',
    category: 'Process Intelligence',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'rework_rate',
    name: 'Rework Rate',
    color: '#c0392b',
    category: 'Process Intelligence',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'first_pass_yield',
    name: 'First Pass Yield',
    color: '#27ae60',
    category: 'Process Intelligence',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  // User Engagement
  {
    key: 'active_modelers',
    name: 'Active Modelers',
    color: '#34495e',
    category: 'User Engagement',
    unit: 'users',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'process_views',
    name: 'Process Views',
    color: '#7f8c8d',
    category: 'User Engagement',
    unit: 'views/day',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'collaboration_events',
    name: 'Collaboration Events',
    color: '#2c3e50',
    category: 'User Engagement',
    unit: 'events/day',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  }
];

export const signavioCategories = [
  'Process Efficiency',
  'Process Compliance',
  'Automation & AI',
  'Process Intelligence',
  'User Engagement'
];



