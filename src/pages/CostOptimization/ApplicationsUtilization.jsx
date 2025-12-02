import { useState } from 'react';
import styles from '../../styles/pages/CostOptimization.module.css';

// Sample application data combining all data sources
const initialApplicationData = [
  {
    id: 1,
    name: 'SAP Build Process Automation',
    subAccount: 'Production',
    // Functional Metrics
    monthlyCost: 4250.00,
    cpuUsage: 45,
    memoryUsage: 62,
    dbQueries: 12500,
    // Application Manager Input
    missionCritical: true,
    predictableUsage: 'Business Hours',
    priority: 'Performance',
    // Audit Log Insights
    dailyUniqueUsers: 156,
    topActionType: 'Workflow Execution',
    totalActions: 8420
  },
  {
    id: 2,
    name: 'SAP Analytics Cloud',
    subAccount: 'Production',
    monthlyCost: 8900.00,
    cpuUsage: 78,
    memoryUsage: 85,
    dbQueries: 45000,
    missionCritical: true,
    predictableUsage: 'Morning Peak',
    priority: 'Performance',
    dailyUniqueUsers: 342,
    topActionType: 'Dashboard View',
    totalActions: 15600
  },
  {
    id: 3,
    name: 'Custom Reporting App',
    subAccount: 'Development',
    monthlyCost: 1200.00,
    cpuUsage: 12,
    memoryUsage: 18,
    dbQueries: 800,
    missionCritical: false,
    predictableUsage: 'Sporadic',
    priority: 'Cost',
    dailyUniqueUsers: 8,
    topActionType: 'Report Generation',
    totalActions: 120
  },
  {
    id: 4,
    name: 'Integration Hub',
    subAccount: 'Production',
    monthlyCost: 3100.00,
    cpuUsage: 55,
    memoryUsage: 48,
    dbQueries: 28000,
    missionCritical: true,
    predictableUsage: '24/7 Consistent',
    priority: 'Performance',
    dailyUniqueUsers: 0,
    topActionType: 'API Call',
    totalActions: 125000
  },
  {
    id: 5,
    name: 'Employee Portal',
    subAccount: 'Production',
    monthlyCost: 2800.00,
    cpuUsage: 25,
    memoryUsage: 30,
    dbQueries: 5200,
    missionCritical: false,
    predictableUsage: 'Business Hours',
    priority: 'Cost',
    dailyUniqueUsers: 890,
    topActionType: 'Login',
    totalActions: 4500
  },
  {
    id: 6,
    name: 'Training Sandbox',
    subAccount: 'Development',
    monthlyCost: 950.00,
    cpuUsage: 5,
    memoryUsage: 8,
    dbQueries: 150,
    missionCritical: false,
    predictableUsage: 'None',
    priority: 'Cost',
    dailyUniqueUsers: 2,
    topActionType: 'Test Submit',
    totalActions: 25
  },
  {
    id: 7,
    name: 'Data Lake Connector',
    subAccount: 'Production',
    monthlyCost: 5600.00,
    cpuUsage: 68,
    memoryUsage: 72,
    dbQueries: 85000,
    missionCritical: true,
    predictableUsage: 'Nightly Batch',
    priority: 'Performance',
    dailyUniqueUsers: 3,
    topActionType: 'Data Sync',
    totalActions: 48
  },
  {
    id: 8,
    name: 'Legacy CRM Bridge',
    subAccount: 'Production',
    monthlyCost: 1850.00,
    cpuUsage: 8,
    memoryUsage: 12,
    dbQueries: 320,
    missionCritical: false,
    predictableUsage: 'Sporadic',
    priority: 'Cost',
    dailyUniqueUsers: 0,
    topActionType: 'Record Sync',
    totalActions: 15
  }
];

// Calculate utilization score based on all factors
const calculateUtilizationScore = (app) => {
  let score = 0;
  
  // Cost efficiency component (25 points max)
  // Lower cost per user = higher score
  const costPerUser = app.dailyUniqueUsers > 0 ? app.monthlyCost / app.dailyUniqueUsers : app.monthlyCost;
  if (costPerUser < 10) score += 25;
  else if (costPerUser < 50) score += 20;
  else if (costPerUser < 100) score += 15;
  else if (costPerUser < 500) score += 10;
  else score += 5;
  
  // Usage intensity component (25 points max)
  const avgUsage = (app.cpuUsage + app.memoryUsage) / 2;
  score += Math.min(25, Math.round(avgUsage * 0.3));
  
  // User engagement component (25 points max)
  if (app.dailyUniqueUsers > 200) score += 25;
  else if (app.dailyUniqueUsers > 100) score += 20;
  else if (app.dailyUniqueUsers > 50) score += 15;
  else if (app.dailyUniqueUsers > 10) score += 10;
  else if (app.dailyUniqueUsers > 0) score += 5;
  // Automated systems (0 users) get points based on action volume
  else if (app.totalActions > 1000) score += 20;
  else if (app.totalActions > 100) score += 10;
  
  // Business context component (25 points max)
  if (app.missionCritical) score += 15;
  if (app.predictableUsage !== 'None' && app.predictableUsage !== 'Sporadic') score += 5;
  if (app.priority === 'Performance' && avgUsage > 50) score += 5;
  if (app.priority === 'Cost' && costPerUser < 100) score += 5;
  
  return Math.min(100, score);
};

function ApplicationsUtilization() {
  const [applications, setApplications] = useState(
    initialApplicationData.map(app => ({
      ...app,
      utilizationScore: calculateUtilizationScore(app)
    }))
  );
  const [editingId, setEditingId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'utilizationScore', direction: 'desc' });

  const handleFieldChange = (appId, field, value) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        const updated = { ...app, [field]: value };
        updated.utilizationScore = calculateUtilizationScore(updated);
        return updated;
      }
      return app;
    }));
  };

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const sortedApplications = [...applications].sort((a, b) => {
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    const modifier = sortConfig.direction === 'asc' ? 1 : -1;
    
    if (typeof aVal === 'number') {
      return (aVal - bVal) * modifier;
    }
    if (typeof aVal === 'boolean') {
      return (aVal === bVal ? 0 : aVal ? -1 : 1) * modifier;
    }
    return String(aVal).localeCompare(String(bVal)) * modifier;
  });

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getScoreClass = (score) => {
    if (score >= 75) return styles.scoreExcellent;
    if (score >= 50) return styles.scoreGood;
    if (score >= 25) return styles.scoreFair;
    return styles.scorePoor;
  };

  const getScoreLabel = (score) => {
    if (score >= 75) return 'Excellent';
    if (score >= 50) return 'Good';
    if (score >= 25) return 'Fair';
    return 'Poor';
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  // Calculate summary statistics
  const avgScore = Math.round(applications.reduce((sum, app) => sum + app.utilizationScore, 0) / applications.length);
  const totalCost = applications.reduce((sum, app) => sum + app.monthlyCost, 0);
  const lowUtilApps = applications.filter(app => app.utilizationScore < 40).length;

  return (
    <div className={styles.applicationsContainer}>
      {/* Summary Stats */}
      <div className={styles.utilizationSummary}>
        <div className={styles.summaryStatCard}>
          <div className={styles.statIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
              <path d="M10 6v4l3 2"/>
            </svg>
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{applications.length}</span>
            <span className={styles.statLabel}>Applications</span>
          </div>
        </div>
        
        <div className={styles.summaryStatCard}>
          <div className={`${styles.statIcon} ${styles.statIconScore}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.44.91-5.32L2.27 7.62l5.34-.78L10 2z"/>
            </svg>
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{avgScore}</span>
            <span className={styles.statLabel}>Avg. Utilization Score</span>
          </div>
        </div>
        
        <div className={styles.summaryStatCard}>
          <div className={`${styles.statIcon} ${styles.statIconCost}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12h-2v-1h2v1zm0-3h-2V6h2v5z"/>
            </svg>
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{formatCurrency(totalCost)}</span>
            <span className={styles.statLabel}>Total Monthly Cost</span>
          </div>
        </div>
        
        <div className={`${styles.summaryStatCard} ${styles.warningCard}`}>
          <div className={`${styles.statIcon} ${styles.statIconWarning}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2L2 18h16L10 2zm0 4l5.5 10h-11L10 6zm-1 4v3h2V10H9zm0 4v2h2v-2H9z"/>
            </svg>
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{lowUtilApps}</span>
            <span className={styles.statLabel}>Low Utilization Apps</span>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className={styles.infoBanner}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12a5 5 0 110-10 5 5 0 010 10zm-.5-8h1v1h-1V5zm0 2h1v4h-1V7z"/>
        </svg>
        <span>
          <strong>Utilization Score</strong> combines cost efficiency, system usage, user engagement, and business context. 
          Click on editable fields to update application manager inputs.
        </span>
      </div>

      {/* Main Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.utilizationTable}>
          <thead>
            <tr>
              <th colSpan="1" className={styles.thGroup}></th>
              <th colSpan="3" className={styles.thGroupHeader}>Functional Metrics</th>
              <th colSpan="3" className={styles.thGroupHeader}>Application Manager Input</th>
              <th colSpan="2" className={styles.thGroupHeader}>Audit Log Insights</th>
              <th colSpan="1" className={styles.thGroup}></th>
            </tr>
            <tr>
              <th 
                className={styles.sortable} 
                onClick={() => handleSort('name')}
              >
                Application{getSortIndicator('name')}
              </th>
              <th 
                className={styles.sortable}
                onClick={() => handleSort('monthlyCost')}
              >
                Cost (Monthly){getSortIndicator('monthlyCost')}
              </th>
              <th 
                className={styles.sortable}
                onClick={() => handleSort('cpuUsage')}
              >
                Usage (CPU/Mem){getSortIndicator('cpuUsage')}
              </th>
              <th>DB Queries</th>
              <th 
                className={styles.sortable}
                onClick={() => handleSort('missionCritical')}
              >
                Mission Critical?{getSortIndicator('missionCritical')}
              </th>
              <th>Predictable Pattern?</th>
              <th>Priority</th>
              <th 
                className={styles.sortable}
                onClick={() => handleSort('dailyUniqueUsers')}
              >
                Daily Users{getSortIndicator('dailyUniqueUsers')}
              </th>
              <th>Top Action</th>
              <th 
                className={`${styles.sortable} ${styles.scoreHeader}`}
                onClick={() => handleSort('utilizationScore')}
              >
                Utilization Score{getSortIndicator('utilizationScore')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedApplications.map((app) => (
              <tr key={app.id} className={styles.dataRow}>
                <td className={styles.appNameCell}>
                  <div className={styles.appName}>{app.name}</div>
                  <div className={styles.appSubAccount}>{app.subAccount}</div>
                </td>
                <td className={styles.costCell}>
                  {formatCurrency(app.monthlyCost)}
                </td>
                <td>
                  <div className={styles.usageMetrics}>
                    <div className={styles.usageBar}>
                      <div 
                        className={styles.usageFill} 
                        style={{ width: `${app.cpuUsage}%` }}
                        title={`CPU: ${app.cpuUsage}%`}
                      />
                    </div>
                    <div className={styles.usageBar}>
                      <div 
                        className={`${styles.usageFill} ${styles.memoryFill}`}
                        style={{ width: `${app.memoryUsage}%` }}
                        title={`Memory: ${app.memoryUsage}%`}
                      />
                    </div>
                    <span className={styles.usageText}>
                      {app.cpuUsage}% / {app.memoryUsage}%
                    </span>
                  </div>
                </td>
                <td className={styles.queriesCell}>
                  {app.dbQueries.toLocaleString()}
                </td>
                <td>
                  <button
                    className={`${styles.toggleBtn} ${app.missionCritical ? styles.toggleYes : styles.toggleNo}`}
                    onClick={() => handleFieldChange(app.id, 'missionCritical', !app.missionCritical)}
                  >
                    {app.missionCritical ? 'Yes' : 'No'}
                  </button>
                </td>
                <td>
                  <select
                    className={styles.selectInput}
                    value={app.predictableUsage}
                    onChange={(e) => handleFieldChange(app.id, 'predictableUsage', e.target.value)}
                  >
                    <option value="24/7 Consistent">24/7 Consistent</option>
                    <option value="Business Hours">Business Hours</option>
                    <option value="Morning Peak">Morning Peak</option>
                    <option value="Nightly Batch">Nightly Batch</option>
                    <option value="Sporadic">Sporadic</option>
                    <option value="None">None</option>
                  </select>
                </td>
                <td>
                  <select
                    className={styles.prioritySelect}
                    value={app.priority}
                    onChange={(e) => handleFieldChange(app.id, 'priority', e.target.value)}
                  >
                    <option value="Cost">Cost</option>
                    <option value="Performance">Performance</option>
                  </select>
                </td>
                <td className={styles.usersCell}>
                  <span className={styles.userCount}>
                    {app.dailyUniqueUsers > 0 ? app.dailyUniqueUsers.toLocaleString() : '—'}
                  </span>
                  {app.dailyUniqueUsers === 0 && (
                    <span className={styles.automatedBadge}>Automated</span>
                  )}
                </td>
                <td>
                  <div className={styles.actionInfo}>
                    <span className={styles.actionType}>{app.topActionType}</span>
                    <span className={styles.actionCount}>
                      {app.totalActions.toLocaleString()} total
                    </span>
                  </div>
                </td>
                <td className={styles.scoreCell}>
                  <div className={`${styles.scoreDisplay} ${getScoreClass(app.utilizationScore)}`}>
                    <div className={styles.scoreCircle}>
                      <svg viewBox="0 0 36 36" className={styles.circularChart}>
                        <path
                          className={styles.circleBg}
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={styles.circle}
                          strokeDasharray={`${app.utilizationScore}, 100`}
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className={styles.scoreValue}>{app.utilizationScore}</span>
                    </div>
                    <span className={styles.scoreLabel}>{getScoreLabel(app.utilizationScore)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendTitle}>Score Legend:</div>
        <div className={styles.legendItems}>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.scoreExcellent}`}></span>
            75-100: Excellent
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.scoreGood}`}></span>
            50-74: Good
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.scoreFair}`}></span>
            25-49: Fair
          </span>
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.scorePoor}`}></span>
            0-24: Poor
          </span>
        </div>
      </div>
    </div>
  );
}

export default ApplicationsUtilization;



