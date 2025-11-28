import { useState } from 'react';
import styles from '../../styles/pages/Harvesting.module.css';

// Mock data for license allocation - in real app this would come from props or API
const licenseAllocationData = {
  sac: { 
    purchased: 150, 
    assigned: 112,
    trendData: {
      years: ['2024', '2025', '2026'],
      purchased: [150, 150, 150],
      actual: [85, 112, null],
      forecast: [null, null, 135]
    }
  },
  signavio: { 
    purchased: 200, 
    assigned: 165,
    trendData: {
      years: ['2024', '2025', '2026'],
      purchased: [200, 200, 200],
      actual: [145, 165, null],
      forecast: [null, null, 185]
    }
  },
  'business-ai': { 
    purchased: 100, 
    assigned: 78,
    trendData: {
      years: ['2024', '2025', '2026'],
      purchased: [100, 100, 100],
      actual: [62, 78, null],
      forecast: [null, null, 92]
    }
  },
  'dynamic-forms': { 
    purchased: 180, 
    assigned: 145,
    trendData: {
      years: ['2024', '2025', '2026'],
      purchased: [180, 180, 180],
      actual: [120, 145, null],
      forecast: [null, null, 165]
    }
  }
};

function HarvestingSidebar({ activeFilter, onFilterChange, licenseType }) {
  const [expandedSections, setExpandedSections] = useState({
    userType: true,
    models: false,
    landGroups: false
  });

  // Define filter structure based on license type
  const getFilterStructure = () => {
    switch (licenseType) {
      case 'signavio':
        return {
          sections: [
            {
              id: 'userType',
              label: 'User Type',
              items: [
                { id: 'modeling', label: 'Modeling Users' },
                { id: 'collaboration', label: 'Collaboration Hub Users' },
                { id: 'academic', label: 'Academic users' }
              ]
            },
            {
              id: 'models',
              label: 'Models',
              items: [
                { id: 'model-profit', label: 'Model Profit' },
                { id: 'model-revenue', label: 'Model Revenue' }
              ]
            },
            {
              id: 'landGroups',
              label: 'Land Groups',
              items: [
                { id: 'polaris', label: 'Polaris' },
                { id: 'cbs', label: 'CBS' }
              ]
            }
          ]
        };
      case 'dynamic-forms':
        return {
          sections: [
            {
              id: 'userType',
              label: 'User Type',
              items: [
                { id: 'professional', label: 'Professional user (1 FUE)' },
                { id: 'standard', label: 'Standard user (0.5 FUE)' },
                { id: 'basic', label: 'Basic user (0.1 FUE)' }
              ]
            }
          ]
        };
      case 'business-ai':
        return {
          sections: [
            {
              id: 'userType',
              label: 'User Type',
              items: [
                { id: 'premium', label: 'Premium Users' },
                { id: 'base', label: 'Base Users' }
              ]
            }
          ]
        };
      case 'sac':
      default:
        return {
          sections: [
            {
              id: 'userType',
              label: 'User Type',
              items: [
                { id: 'planning-professional', label: 'Planning Professional' },
                { id: 'planning-standard', label: 'Planning Standard' },
                { id: 'business-intelligence', label: 'Business Intelligence' }
              ]
            }
          ]
        };
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const filterStructure = getFilterStructure();
  const allocation = licenseAllocationData[licenseType] || { 
    purchased: 0, 
    assigned: 0,
    trendData: { years: [], purchased: [], actual: [], forecast: [] }
  };
  const unassigned = allocation.purchased - allocation.assigned;
  const assignedPercentage = allocation.purchased > 0 ? (allocation.assigned / allocation.purchased) * 100 : 0;
  const unassignedPercentage = 100 - assignedPercentage;

  // Calculate SVG pie chart values
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const assignedStrokeDasharray = `${(assignedPercentage / 100) * circumference} ${circumference}`;

  // Trend chart calculations
  const trendData = allocation.trendData;
  const chartWidth = 180;
  const chartHeight = 100;
  const padding = { top: 10, right: 10, bottom: 20, left: 10 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;
  
  // Find max value for scaling
  const allValues = [
    ...trendData.purchased.filter(v => v !== null),
    ...trendData.actual.filter(v => v !== null),
    ...trendData.forecast.filter(v => v !== null)
  ];
  const maxValue = Math.max(...allValues, 0);
  const minValue = 0;
  const valueRange = maxValue - minValue;

  // Helper function to calculate point position
  const getPoint = (index, value) => {
    if (value === null) return null;
    const x = padding.left + (index / (trendData.years.length - 1)) * plotWidth;
    const y = padding.top + plotHeight - ((value - minValue) / valueRange) * plotHeight;
    return { x, y };
  };

  return (
    <div className={styles.harvestingSidebar}>
      {/* All filter - always visible */}
      <div
        className={`${styles.sidebarItem} ${activeFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </div>

      {/* Expandable sections with checkboxes */}
      {filterStructure.sections.map(section => (
        <div key={section.id} className={styles.sidebarSection}>
          <div 
            className={styles.sectionHeader}
            onClick={() => toggleSection(section.id)}
          >
            <input 
              type="checkbox" 
              className={styles.sectionCheckbox}
              checked={expandedSections[section.id]}
              onChange={() => toggleSection(section.id)}
              onClick={(e) => e.stopPropagation()}
            />
            <span>{section.label}</span>
          </div>
          
          {expandedSections[section.id] && (
            <div className={styles.sectionItems}>
              {section.items.map(item => (
                <div 
                  key={item.id}
                  className={styles.sectionItem}
                  onClick={() => onFilterChange(item.id)}
                >
                  <input 
                    type="checkbox"
                    className={styles.itemCheckbox}
                    checked={activeFilter === item.id}
                    onChange={() => onFilterChange(item.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label>{item.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* License Allocation Pie Chart */}
      <div className={styles.licenseAllocationChart}>
        <h4 className={styles.chartTitle}>License Allocation</h4>
        <div className={styles.chartContainer}>
          <svg width="120" height="120" viewBox="0 0 120 120" className={styles.pieChart}>
            {/* Background circle (purchased licenses) */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="20"
            />
            {/* Assigned licenses overlay */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#0a6ed1"
              strokeWidth="20"
              strokeDasharray={assignedStrokeDasharray}
              strokeDashoffset={circumference / 4}
              transform="rotate(-90 60 60)"
              className={styles.assignedArc}
            />
            {/* Center text */}
            <text x="60" y="55" textAnchor="middle" className={styles.chartCenterText}>
              {allocation.assigned}/{allocation.purchased}
            </text>
            <text x="60" y="70" textAnchor="middle" className={styles.chartCenterSubtext}>
              Assigned
            </text>
          </svg>
        </div>
        <div className={styles.chartLegend}>
          <div className={styles.legendItem}>
            <span className={styles.legendColorAssigned}></span>
            <span className={styles.legendLabel}>Assigned: {allocation.assigned}</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendColorUnassigned}></span>
            <span className={styles.legendLabel}>Available: {unassigned}</span>
          </div>
        </div>
      </div>

      {/* Assignment Trend Chart */}
      <div className={styles.trendChart}>
        <h4 className={styles.chartTitle}>Assignments Forecast</h4>
        <svg width={chartWidth} height={chartHeight} className={styles.trendSvg}>
          {/* X-axis line */}
          <line
            x1={padding.left}
            y1={chartHeight - padding.bottom}
            x2={chartWidth - padding.right}
            y2={chartHeight - padding.bottom}
            stroke="#d0d0d0"
            strokeWidth="1"
          />

          {/* Purchased line (green) */}
          <polyline
            points={trendData.years.map((_, i) => {
              const point = getPoint(i, trendData.purchased[i]);
              return point ? `${point.x},${point.y}` : '';
            }).filter(p => p).join(' ')}
            fill="none"
            stroke="#2ecc71"
            strokeWidth="2"
          />
          {trendData.years.map((year, i) => {
            const point = getPoint(i, trendData.purchased[i]);
            return point ? (
              <circle
                key={`purchased-${i}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#2ecc71"
              />
            ) : null;
          })}

          {/* Actual assignments line (red) */}
          <polyline
            points={trendData.years.map((_, i) => {
              const point = getPoint(i, trendData.actual[i]);
              return point ? `${point.x},${point.y}` : '';
            }).filter(p => p).join(' ')}
            fill="none"
            stroke="#e74c3c"
            strokeWidth="2"
          />
          {trendData.years.map((year, i) => {
            const point = getPoint(i, trendData.actual[i]);
            return point ? (
              <circle
                key={`actual-${i}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#e74c3c"
              />
            ) : null;
          })}

          {/* Forecast line (blue) - dashed */}
          {(() => {
            // Find last actual point to connect forecast
            let lastActualIndex = -1;
            for (let i = trendData.actual.length - 1; i >= 0; i--) {
              if (trendData.actual[i] !== null) {
                lastActualIndex = i;
                break;
              }
            }
            
            const forecastPoints = [];
            if (lastActualIndex >= 0) {
              const lastActualPoint = getPoint(lastActualIndex, trendData.actual[lastActualIndex]);
              if (lastActualPoint) forecastPoints.push(`${lastActualPoint.x},${lastActualPoint.y}`);
            }
            
            trendData.years.forEach((_, i) => {
              if (trendData.forecast[i] !== null) {
                const point = getPoint(i, trendData.forecast[i]);
                if (point) forecastPoints.push(`${point.x},${point.y}`);
              }
            });

            return forecastPoints.length > 1 ? (
              <polyline
                points={forecastPoints.join(' ')}
                fill="none"
                stroke="#3498db"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            ) : null;
          })()}
          {trendData.years.map((year, i) => {
            const point = getPoint(i, trendData.forecast[i]);
            return point ? (
              <circle
                key={`forecast-${i}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#3498db"
              />
            ) : null;
          })}

          {/* X-axis labels */}
          {trendData.years.map((year, i) => {
            const x = padding.left + (i / (trendData.years.length - 1)) * plotWidth;
            return (
              <text
                key={`year-${i}`}
                x={x}
                y={chartHeight - 5}
                textAnchor="middle"
                className={styles.axisLabel}
              >
                {year}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default HarvestingSidebar;

