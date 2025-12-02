import Card, { CardHeader } from '../../components/ui/Card';
import BarLineChart from '../../components/charts/BarLineChart';
import Icon from '../../components/ui/Icon';
import { costForecast } from '../../data/costForecastData';
import styles from '../../styles/components/CostForecast.module.css';

function CostForecast() {
  const insights = [
    {
      name: 'CPEA',
      current: '12,450 USD',
      forecast: '15,200 USD',
      forecastPct: 122,
      action: 'monitor',
      actionLabel: '⏱ MONITOR CONSUMPTION'
    },
    {
      name: 'Business AI',
      current: '7,400 USD',
      forecast: '9,120 USD',
      forecastPct: 123,
      action: 'monitor',
      actionLabel: '⏱ MONITOR CONSUMPTION'
    },
    {
        name: 'HANA Cloud Service',
        current: 'Leading CPEA',
        forecast: 'High Impact',
        forecastPct: 135,
        action: 'upsell',
        actionLabel: '⚠️ UPSELL REQUIRED'
    },
    {
        name: 'HCM Package',
        current: 'Leading Business AI',
        forecast: 'High Impact',
        forecastPct: 140,
        action: 'upsell',
        actionLabel: '⚠️ UPSELL REQUIRED'
    }
  ];

  const getActionIcon = (action) => {
    switch(action) {
      case 'upsell': return 'alert';
      case 'reduce': return 'sys-enter-2';
      default: return 'history';
    }
  };

  const getActionIconColor = (action) => {
    switch(action) {
      case 'upsell': return 'var(--sapNegativeColor, #bb0000)';
      case 'reduce': return 'var(--sapPositiveColor, #107e3e)';
      default: return 'var(--sapCriticalColor, #e9730c)';
    }
  };

  return (
    <Card>
      <CardHeader
        title="Cost and Forecast"
        subtitle="CPEA + Business AI"
        action={
          <div className={styles.headerRight}>
            <div className={styles.headerValue}>24.3k</div>
            <div className={styles.headerSubText}>
              <span>Actual: <strong>19,850.00 USD</strong></span>
              <span>Forecast: <strong>24,320.00 USD</strong></span>
            </div>
          </div>
        }
      />
      <div className={styles.container}>
        <div className={styles.chartContainer}>
          <BarLineChart 
            days={costForecast.days}
            btpeaData={costForecast.btpea}
            businessAIData={costForecast.businessAI}
            legendPosition="bottom"
          />
        </div>
        
        <div className={styles.legendGrid}>
          {insights.map((item) => (
            <div 
              key={item.name} 
              className={`${styles.legendItem} ${styles[`action-${item.action}`]}`}
            >
              <div className={styles.iconWrapper}>
                <Icon 
                  name={getActionIcon(item.action)} 
                  color={getActionIconColor(item.action)}
                  size="large"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.productName}>{item.name}</div>
                <div className={styles.recommendation}>
                  Current: {item.current}
                  <span className={styles.forecastValue}>
                    Forecast: {item.forecast} ({item.forecastPct}%)
                  </span>
                </div>
                <div className={styles.actionBadge}>
                  {item.actionLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default CostForecast;

