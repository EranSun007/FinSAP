export const papmInsights = {
  'last-month': [
    { title: 'Oct 25 Spike', text: 'PaPM total peak jumped to 949.10 GB (from baseline 841.08 GB) due to intensive calculation', color: '#f39c12', bg: '#fff3cd', textColor: '#856404' },
    { title: 'HANA Stability', text: 'HANA Cloud metrics remain stable at ~75 GB average, showing time-averaged allocation', color: '#27ae60', bg: '#d5f4e6', textColor: '#155724' },
    { title: 'Storage Growth', text: 'PaPM storage memory grew from 45 GB to 76 GB throughout the month', color: '#16a085', bg: '#e8f5e9', textColor: '#004d40' },
    { title: 'HANA Cockpit Correlation', text: 'Real-time queries show Column Store spiking to 1,100+ GB on Oct 25, validating PaPM\'s peak', color: '#d35400', bg: '#fdecea', textColor: '#7b241c' },
    { title: 'Brewery Model (L/P/F)', text: 'Three PaPM model types show different growth patterns - F (Profitability) spikes highest on Oct 25', color: '#1abc9c', bg: '#d1f2eb', textColor: '#0e6655' }
  ],
  'last-3-months': [
    { title: 'Quarterly Trend', text: 'Overall memory usage has increased by 15% over the last quarter, driven by new model deployments.', color: '#3498db', bg: '#d6eaf8', textColor: '#154360' },
    { title: 'Cost Efficiency', text: 'Cost per calculation unit has decreased by 5% due to optimization of the "Allocations" model.', color: '#27ae60', bg: '#d5f4e6', textColor: '#155724' },
    { title: 'Peak Usage', text: 'Highest peak observed in August (980 GB) during quarter-end closing activities.', color: '#e74c3c', bg: '#fadbd8', textColor: '#78281f' }
  ],
  'last-6-months': [
    { title: 'Capacity Planning', text: 'Current growth rate suggests reaching contract limits by Q1 next year. Consider capacity upgrade.', color: '#f39c12', bg: '#fff3cd', textColor: '#856404' },
    { title: 'Model Performance', text: 'Average calculation time has improved by 20% after the June patch update.', color: '#1abc9c', bg: '#d1f2eb', textColor: '#0e6655' },
    { title: 'Storage Optimization', text: 'Archiving of old results in July reclaimed 200 GB of storage space.', color: '#9b59b6', bg: '#f4ecf7', textColor: '#4a235a' }
  ],
  'last-year': [
    { title: 'Annual Growth', text: 'Year-over-year data volume growth is 45%, consistent with business expansion.', color: '#34495e', bg: '#ebedef', textColor: '#1b2631' },
    { title: 'Seasonal Patterns', text: 'Distinct usage spikes observed during month-end and quarter-end closes consistently.', color: '#2980b9', bg: '#d4e6f1', textColor: '#154360' },
    { title: 'Infrastructure ROI', text: 'Migration to HANA Cloud has resulted in a 30% TCO reduction compared to the previous on-premise setup.', color: '#27ae60', bg: '#d5f4e6', textColor: '#155724' }
  ]
};

