import SignavioHeader from './SignavioHeader';
import SignavioSidebar from './SignavioSidebar';
import SignavioChart from './SignavioChart';
import SignavioInsights from './SignavioInsights';
import SignavioProcessFlow from './SignavioProcessFlow';
import { useSignavioChart } from './useSignavioChart';
import styles from '../../styles/pages/Signavio.module.css';

function Signavio() {
  const {
    data,
    visibleMetrics,
    scale,
    setScale,
    yAxisDomain,
    toggleMetric,
    toggleCategory
  } = useSignavioChart();

  return (
    <div className={styles.signavioContainer}>
      <SignavioHeader />
      <div className={styles.signavioDashboardLayout}>
        <SignavioSidebar
          visibleMetrics={visibleMetrics}
          scale={scale}
          onScaleChange={setScale}
          onToggleMetric={toggleMetric}
          onToggleCategory={toggleCategory}
        />
        <div className={styles.signavioMainContent}>
          <SignavioChart
            data={data}
            visibleMetrics={visibleMetrics}
            yAxisDomain={yAxisDomain}
          />
          <SignavioInsights />
          <SignavioProcessFlow />
        </div>
      </div>
    </div>
  );
}

export default Signavio;
