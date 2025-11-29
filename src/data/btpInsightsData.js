/**
 * BTP Prepaid Quota Insights
 * Period-based insights about quota health, warnings, and recommendations
 */

export const btpInsights = {
  'current': [
    {
      title: 'Critical: AI Core Quota Near Exhaustion',
      text: 'AI Core quota in Innovation Lab is at 91.5% utilization with only 12 days of runway remaining. Consider purchasing additional quota or reallocating from other directories.',
      color: '#dc2626',
      bg: '#fef2f2',
      textColor: '#991b1b',
      type: 'critical'
    },
    {
      title: 'Warning: Cloud Foundry Runtime High Usage',
      text: 'Development Services CF Runtime is 75% consumed with projected exhaustion in April. Review workload distribution and consider optimization.',
      color: '#d97706',
      bg: '#fffbeb',
      textColor: '#92400e',
      type: 'warning'
    },
    {
      title: 'Optimization Opportunity',
      text: 'SAP Build Process Automation quota is only 16% utilized. Consider reallocating unused capacity to high-demand services or accelerating automation initiatives.',
      color: '#0070f2',
      bg: '#eff6ff',
      textColor: '#1e40af',
      type: 'info'
    },
    {
      title: 'Expiration Alert: AI Core',
      text: 'AI Core quota expires on June 30, 2025. Plan renewal or consumption acceleration to avoid losing unused prepaid credits.',
      color: '#7c3aed',
      bg: '#f5f3ff',
      textColor: '#5b21b6',
      type: 'alert'
    }
  ],
  'last-month': [
    {
      title: 'Quota Utilization Summary',
      text: 'Overall prepaid quota utilization improved from 42% to 53% this month. Two quotas remain underutilized while one is approaching critical threshold.',
      color: '#16a34a',
      bg: '#f0fdf4',
      textColor: '#166534',
      type: 'success'
    },
    {
      title: 'Cost Avoidance Achieved',
      text: 'By using prepaid quotas effectively, €12,450 in potential on-demand charges were avoided. Continue monitoring to maximize prepaid utilization.',
      color: '#16a34a',
      bg: '#f0fdf4',
      textColor: '#166534',
      type: 'success'
    },
    {
      title: 'Referenced Quota Visibility',
      text: 'Two quotas (AI Core, Work Zone) are consuming from parent directory allocations. Ensure these are accounted for in parent budget tracking.',
      color: '#0070f2',
      bg: '#eff6ff',
      textColor: '#1e40af',
      type: 'info'
    }
  ],
  'last-quarter': [
    {
      title: 'Q4 Quota Performance',
      text: 'Prepaid quota utilization averaged 58% across all services. HANA Cloud and Build Work Zone showed consistent, healthy consumption patterns.',
      color: '#16a34a',
      bg: '#f0fdf4',
      textColor: '#166534',
      type: 'success'
    },
    {
      title: 'Budget Alignment',
      text: 'Quarterly actual costs were within 5% of forecasted prepaid consumption. Strong alignment between planning and execution.',
      color: '#16a34a',
      bg: '#f0fdf4',
      textColor: '#166534',
      type: 'success'
    },
    {
      title: 'Reallocation Recommendation',
      text: 'Based on usage patterns, consider reallocating 2,000 units from Process Automation to AI Core to balance utilization across quotas.',
      color: '#d97706',
      bg: '#fffbeb',
      textColor: '#92400e',
      type: 'warning'
    },
    {
      title: 'Renewal Planning Required',
      text: 'Three quotas expire within the next 6 months. Initiate procurement process to ensure continuity of prepaid benefits.',
      color: '#7c3aed',
      bg: '#f5f3ff',
      textColor: '#5b21b6',
      type: 'alert'
    }
  ]
};

export const insightPeriods = [
  { value: 'current', label: 'Current Status' },
  { value: 'last-month', label: 'Last Month' },
  { value: 'last-quarter', label: 'Last Quarter' }
];

export default btpInsights;

