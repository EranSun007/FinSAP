export const sacMetrics = [
  // Content Consumption
  {
    key: 'story_views',
    name: 'Story Views',
    color: '#0070f2',
    category: 'Content Consumption',
    unit: 'views/day',
    strokeWidth: 3
  },
  {
    key: 'dashboard_access',
    name: 'Dashboard Access',
    color: '#1a9898',
    category: 'Content Consumption',
    unit: 'sessions/day',
    strokeWidth: 2
  },
  {
    key: 'report_exports',
    name: 'Report Exports',
    color: '#5b738b',
    category: 'Content Consumption',
    unit: 'exports/day',
    strokeWidth: 2
  },
  {
    key: 'scheduled_publications',
    name: 'Scheduled Publications',
    color: '#925ace',
    category: 'Content Consumption',
    unit: 'runs/day',
    strokeWidth: 2
  },
  // User Activity
  {
    key: 'active_users',
    name: 'Active Users',
    color: '#d97706',
    category: 'User Activity',
    unit: 'users',
    strokeWidth: 3,
    strokeDasharray: [5, 5]
  },
  {
    key: 'avg_session_duration',
    name: 'Avg Session Duration',
    color: '#0a6ed1',
    category: 'User Activity',
    unit: 'minutes',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'bi_users',
    name: 'BI Users',
    color: '#188918',
    category: 'User Activity',
    unit: 'users',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  {
    key: 'planning_users',
    name: 'Planning Users',
    color: '#c35500',
    category: 'User Activity',
    unit: 'users',
    strokeWidth: 2,
    strokeDasharray: [5, 5]
  },
  // Data & Performance
  {
    key: 'avg_query_time',
    name: 'Avg Query Time',
    color: '#bb0000',
    category: 'Data & Performance',
    unit: 'seconds',
    strokeWidth: 3,
    strokeDasharray: [8, 4]
  },
  {
    key: 'data_refresh_count',
    name: 'Data Refresh Count',
    color: '#046c7a',
    category: 'Data & Performance',
    unit: 'refreshes/day',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'model_load_time',
    name: 'Model Load Time',
    color: '#a100c2',
    category: 'Data & Performance',
    unit: 'seconds',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  {
    key: 'cache_hit_rate',
    name: 'Cache Hit Rate',
    color: '#107e3e',
    category: 'Data & Performance',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [8, 4]
  },
  // Planning Operations
  {
    key: 'planning_sessions',
    name: 'Planning Sessions',
    color: '#0057d2',
    category: 'Planning Operations',
    unit: 'sessions/day',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'input_task_completion',
    name: 'Input Task Completion',
    color: '#188918',
    category: 'Planning Operations',
    unit: '%',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'version_comparisons',
    name: 'Version Comparisons',
    color: '#e9730c',
    category: 'Planning Operations',
    unit: 'count/day',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  {
    key: 'workflow_tasks',
    name: 'Workflow Tasks',
    color: '#7800a4',
    category: 'Planning Operations',
    unit: 'tasks/day',
    strokeWidth: 2,
    strokeDasharray: [3, 3]
  },
  // System Utilization
  {
    key: 'storage_used',
    name: 'Storage Used',
    color: '#354a5f',
    category: 'System Utilization',
    unit: 'GB',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'api_calls',
    name: 'API Calls',
    color: '#6c8893',
    category: 'System Utilization',
    unit: 'calls/day',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  },
  {
    key: 'embedded_views',
    name: 'Embedded Views',
    color: '#0a6ed1',
    category: 'System Utilization',
    unit: 'views/day',
    strokeWidth: 2,
    strokeDasharray: [10, 2]
  }
];

export const sacCategories = [
  'Content Consumption',
  'User Activity',
  'Data & Performance',
  'Planning Operations',
  'System Utilization'
];

