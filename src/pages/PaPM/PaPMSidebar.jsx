import { papmMetrics, papmCategories } from '../../data/papmMetricsData';
import styles from '../../styles/pages/PaPM.module.css';

function PaPMSidebar({ visibleMetrics, scale, onScaleChange, onToggleMetric, onToggleCategory }) {
  return (
    <div className={styles.papmSidebar}>
      <div className={styles.papmControls}>
        <div className={styles.controlsHeader}>
          <h3>Metric Controls</h3>
          <div className={styles.scaleControl}>
            <label>Y-Axis Scale:</label>
            <select value={scale} onChange={(e) => onScaleChange(e.target.value)}>
              <option value="auto">Auto Scale</option>
              <option value="fit">Fit to Visible</option>
            </select>
          </div>
        </div>

        <div className={styles.categoryToggles}>
          {papmCategories.map(cat => {
            const catMetrics = papmMetrics.filter(m => m.category === cat);
            const allVisible = catMetrics.every(m => visibleMetrics[m.key]);
            const someVisible = catMetrics.some(m => visibleMetrics[m.key]);

            let statusClass = '';
            let icon = '○';
            if (allVisible) { statusClass = styles.active; icon = '✓'; }
            else if (someVisible) { statusClass = styles.partial; icon = '◐'; }

            return (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${statusClass}`}
                onClick={() => onToggleCategory(cat)}
              >
                {icon} {cat}
              </button>
            );
          })}
        </div>

        <div className={styles.metricGrid}>
          {papmMetrics.map(metric => {
            const isVisible = visibleMetrics[metric.key];
            const activeClass = isVisible ? styles.active : '';

            return (
              <button
                key={metric.key}
                className={`${styles.metricBtn} ${activeClass}`}
                onClick={() => onToggleMetric(metric.key)}
                style={{
                  borderColor: isVisible ? metric.color : '#ddd',
                  background: isVisible ? `${metric.color}15` : 'white'
                }}
              >
                <span style={{ color: isVisible ? metric.color : '#95a5a6' }}>
                  {isVisible ? '👁️' : '👁️‍🗨️'}
                </span>
                <div className={styles.metricInfo}>
                  <div 
                    className={styles.metricName}
                    style={{ color: isVisible ? metric.color : '#95a5a6' }}
                  >
                    {metric.name}
                  </div>
                  <div className={styles.metricMeta}>{metric.category} • {metric.unit}</div>
                </div>
                <div
                  style={{
                    width: '20px',
                    height: '0',
                    borderBottom: metric.strokeDasharray ? '2px dashed' : '3px solid',
                    borderColor: isVisible ? metric.color : '#ddd'
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PaPMSidebar;

