import { useState } from 'react';
import Icon from '../../components/ui/Icon';
import { btpInsights, insightPeriods } from '../../data/btpInsightsData';
import styles from '../../styles/pages/BTP.module.css';

function BTPInsights() {
  const [selectedPeriod, setSelectedPeriod] = useState('current');
  const insights = btpInsights[selectedPeriod] || [];

  return (
    <div className={styles.btpInsights}>
      <div className={styles.insightsHeader}>
        <h3>
          <Icon name="lightbulb" size="medium" />
          Key Insights
        </h3>
        <select
          className={styles.insightsSelect}
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          {insightPeriods.map(period => (
            <option key={period.value} value={period.value}>
              {period.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.insightsGrid}>
        {insights.map((insight, index) => (
          <div
            key={index}
            className={styles.insightCard}
            style={{
              borderColor: insight.color,
              background: insight.bg,
              color: insight.textColor
            }}
          >
            <strong>{insight.title}</strong>
            <p>{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BTPInsights;

