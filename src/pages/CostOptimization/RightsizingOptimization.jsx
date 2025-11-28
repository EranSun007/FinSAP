import styles from '../../styles/pages/CostOptimization.module.css';

function RightsizingOptimization() {
  const recommendations = [
    {
      id: 1,
      resource: 'SAP HANA Cloud (HC_hdi_shared)',
      type: 'Downsize',
      currentSize: '8 GB Memory',
      recommendedSize: '4 GB Memory',
      avgUtilization: 23,
      potentialSavings: 1240.00,
      impact: 'low',
      status: 'pending'
    },
    {
      id: 2,
      resource: 'Cloud Foundry Runtime',
      type: 'Terminate',
      currentSize: '2 vCPU / 4 GB',
      recommendedSize: 'N/A',
      avgUtilization: 0,
      potentialSavings: 890.00,
      impact: 'none',
      status: 'pending'
    },
    {
      id: 3,
      resource: 'AI Core - Training Instance',
      type: 'Downsize',
      currentSize: 'GPU-Large',
      recommendedSize: 'GPU-Medium',
      avgUtilization: 31,
      potentialSavings: 2150.00,
      impact: 'medium',
      status: 'reviewing'
    },
    {
      id: 4,
      resource: 'Application Logging Service',
      type: 'Optimize',
      currentSize: 'Premium Tier',
      recommendedSize: 'Standard Tier',
      avgUtilization: 45,
      potentialSavings: 320.00,
      impact: 'low',
      status: 'pending'
    },
    {
      id: 5,
      resource: 'SAP Build Process Automation',
      type: 'Schedule',
      currentSize: '24/7 Running',
      recommendedSize: 'Business Hours Only',
      avgUtilization: 12,
      potentialSavings: 560.00,
      impact: 'low',
      status: 'approved'
    },
    {
      id: 6,
      resource: 'Destination Service',
      type: 'Terminate',
      currentSize: 'Standard Plan',
      recommendedSize: 'N/A',
      avgUtilization: 0,
      potentialSavings: 180.00,
      impact: 'none',
      status: 'pending'
    }
  ];

  const totalSavings = recommendations.reduce((sum, r) => sum + r.potentialSavings, 0);

  const getTypeClass = (type) => {
    const types = {
      'Downsize': styles.typeDownsize,
      'Terminate': styles.typeTerminate,
      'Optimize': styles.typeOptimize,
      'Schedule': styles.typeSchedule
    };
    return types[type] || '';
  };

  const getImpactClass = (impact) => {
    const impacts = {
      'none': styles.impactNone,
      'low': styles.impactLow,
      'medium': styles.impactMedium,
      'high': styles.impactHigh
    };
    return impacts[impact] || '';
  };

  const getStatusClass = (status) => {
    const statuses = {
      'pending': styles.statusPending,
      'reviewing': styles.statusReviewing,
      'approved': styles.statusApproved,
      'rejected': styles.statusRejected
    };
    return statuses[status] || '';
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className={styles.rightsizingContainer}>
      {/* Summary Cards */}
      <div className={styles.summaryCards}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className={styles.summaryContent}>
            <span className={styles.summaryValue}>{recommendations.length}</span>
            <span className={styles.summaryLabel}>Recommendations</span>
          </div>
        </div>
        
        <div className={`${styles.summaryCard} ${styles.savingsCard}`}>
          <div className={styles.summaryIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </div>
          <div className={styles.summaryContent}>
            <span className={styles.summaryValue}>{formatCurrency(totalSavings)}</span>
            <span className={styles.summaryLabel}>Potential Monthly Savings</span>
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <div className={styles.summaryContent}>
            <span className={styles.summaryValue}>{recommendations.filter(r => r.status === 'approved').length}</span>
            <span className={styles.summaryLabel}>Approved Actions</span>
          </div>
        </div>
      </div>

      {/* Recommendations Table */}
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <h3 className={styles.tableTitle}>Optimization Recommendations</h3>
          <div className={styles.tableActions}>
            <button className={styles.exportButton}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12l-4-4h2.5V3h3v5H12L8 12zm-6 2h12v1H2v-1z"/>
              </svg>
              Export
            </button>
          </div>
        </div>
        
        <table className={styles.optimizationTable}>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Recommendation Type</th>
              <th>Current Size</th>
              <th>Recommended</th>
              <th>Avg. Utilization</th>
              <th>Potential Savings</th>
              <th>Impact Risk</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec) => (
              <tr key={rec.id}>
                <td className={styles.resourceCell}>
                  <span className={styles.resourceName}>{rec.resource}</span>
                </td>
                <td>
                  <span className={`${styles.typeTag} ${getTypeClass(rec.type)}`}>
                    {rec.type}
                  </span>
                </td>
                <td>{rec.currentSize}</td>
                <td>{rec.recommendedSize}</td>
                <td>
                  <div className={styles.utilizationCell}>
                    <div className={styles.utilizationBar}>
                      <div 
                        className={styles.utilizationFill} 
                        style={{ 
                          width: `${rec.avgUtilization}%`,
                          backgroundColor: rec.avgUtilization < 30 ? '#d04437' : rec.avgUtilization < 60 ? '#d97706' : '#107e3e'
                        }}
                      />
                    </div>
                    <span className={styles.utilizationValue}>{rec.avgUtilization}%</span>
                  </div>
                </td>
                <td className={styles.savingsCell}>
                  {formatCurrency(rec.potentialSavings)}/mo
                </td>
                <td>
                  <span className={`${styles.impactBadge} ${getImpactClass(rec.impact)}`}>
                    {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)}
                  </span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(rec.status)}`}>
                    {rec.status.charAt(0).toUpperCase() + rec.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionBtn} title="Approve">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M5.5 10.5L2 7l1-1 2.5 2.5L11 3l1 1-6.5 6.5z"/>
                      </svg>
                    </button>
                    <button className={styles.actionBtn} title="Reject">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M10.5 4.5L9 3 7 5 5 3 3.5 4.5 5.5 6.5l-2 2L5 10l2-2 2 2 1.5-1.5-2-2 2-2z"/>
                      </svg>
                    </button>
                    <button className={styles.actionBtn} title="Details">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                        <circle cx="7" cy="7" r="1"/>
                        <circle cx="3" cy="7" r="1"/>
                        <circle cx="11" cy="7" r="1"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RightsizingOptimization;

