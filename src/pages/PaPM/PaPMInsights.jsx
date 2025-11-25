import { useState } from 'react';
import Icon from '../../components/ui/Icon';
import { papmInsights } from '../../data/papmInsightsData';
import styles from '../../styles/pages/PaPM.module.css';

function PaPMInsights() {
  const [period, setPeriod] = useState('last-month');
  const insights = papmInsights[period] || [];

  return (
    <div className={styles.papmInsights}>
      <div className={styles.insightsHeader}>
        <h3><Icon name="search" size="medium" /> Key Observations</h3>
        <select 
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className={styles.insightsSelect}
        >
          <option value="last-month">Last Month</option>
          <option value="last-3-months">Last 3 Months</option>
          <option value="last-6-months">Last 6 Months</option>
          <option value="last-year">Last Year</option>
        </select>
      </div>
      <div className={styles.insightsGrid}>
        {insights.map((insight, index) => (
          <div
            key={index}
            className={styles.insightCard}
            style={{ 
              background: insight.bg, 
              borderLeftColor: insight.color,
              color: insight.textColor 
            }}
          >
            <strong>{insight.title}:</strong>
            <p>{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaPMInsights;

