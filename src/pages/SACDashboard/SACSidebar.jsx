import { useState } from 'react';
import Icon from '../../components/ui/Icon';
import { sacMetrics, sacCategories } from '../../data/sacMetricsData';
import styles from '../../styles/pages/SAC.module.css';

function SACSidebar({ visibleMetrics, scale, onScaleChange, onToggleMetric, onToggleCategory }) {
  const [expandedCategories, setExpandedCategories] = useState(
    sacCategories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  const toggleExpand = (cat) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className={styles.sacSidebar}>
      <div className={styles.sacControls}>
        <div className={styles.controlsHeader}>
          <h3>Analytics Metrics</h3>
          <div className={styles.scaleControl}>
            <label>Y-Axis Scale:</label>
            <select value={scale} onChange={(e) => onScaleChange(e.target.value)}>
              <option value="auto">Auto Scale</option>
              <option value="fit">Fit to Visible</option>
            </select>
          </div>
        </div>

        <div className={styles.accordionContainer}>
          {sacCategories.map(cat => {
            const catMetrics = sacMetrics.filter(m => m.category === cat);
            const allVisible = catMetrics.every(m => visibleMetrics[m.key]);
            const someVisible = catMetrics.some(m => visibleMetrics[m.key]);
            const isExpanded = expandedCategories[cat];

            let statusClass = '';
            let iconName = 'circle-task';
            if (allVisible) { statusClass = styles.active; iconName = 'accept'; }
            else if (someVisible) { statusClass = styles.partial; iconName = 'status-in-process'; }

            return (
              <div key={cat} className={styles.accordionGroup}>
                <div className={styles.accordionHeader}>
                  <div
                    className={styles.accordionTitle}
                    onClick={() => toggleExpand(cat)}
                  >
                    <Icon
                      name="slim-arrow-down"
                      size="small"
                      className={isExpanded ? styles.iconExpanded : styles.iconCollapsed}
                    />
                    <span>{cat}</span>
                  </div>
                  <button
                    className={`${styles.categoryToggleBtn} ${statusClass}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleCategory(cat);
                    }}
                    title={allVisible ? "Hide All" : "Show All"}
                  >
                    <Icon name={iconName} size="small" />
                  </button>
                </div>

                {isExpanded && (
                  <div className={styles.accordionContent}>
                    {catMetrics.map(metric => {
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
                            <Icon name={isVisible ? 'show' : 'hide'} size="medium" />
                          </span>
                          <div className={styles.metricInfo}>
                            <div
                              className={styles.metricName}
                              style={{ color: isVisible ? metric.color : '#95a5a6' }}
                            >
                              {metric.name}
                            </div>
                            <div className={styles.metricMeta}>{metric.unit}</div>
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SACSidebar;



