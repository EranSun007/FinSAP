import SACHeader from './SACHeader';
import SACSidebar from './SACSidebar';
import SACChart from './SACChart';
import SACInsights from './SACInsights';
import SACStorySummary from './SACStorySummary';
import { useSACChart } from './useSACChart';
import styles from '../../styles/pages/SAC.module.css';

function SACDashboard() {
  const {
    data,
    visibleMetrics,
    scale,
    setScale,
    yAxisDomain,
    toggleMetric,
    toggleCategory
  } = useSACChart();

  return (
    <div className={styles.sacContainer}>
      <SACHeader />
      <div className={styles.sacDashboardLayout}>
        <SACSidebar
          visibleMetrics={visibleMetrics}
          scale={scale}
          onScaleChange={setScale}
          onToggleMetric={toggleMetric}
          onToggleCategory={toggleCategory}
        />
        <div className={styles.sacMainContent}>
          <SACChart
            data={data}
            visibleMetrics={visibleMetrics}
            yAxisDomain={yAxisDomain}
          />
          <SACInsights />
          <SACStorySummary />
        </div>
      </div>
    </div>
  );
}

export default SACDashboard;
