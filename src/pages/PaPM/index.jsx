import PaPMHeader from './PaPMHeader';
import PaPMSidebar from './PaPMSidebar';
import PaPMChart from './PaPMChart';
import PaPMInsights from './PaPMInsights';
import PaPMFormula from './PaPMFormula';
import { usePaPMChart } from './usePaPMChart';
import styles from '../../styles/pages/PaPM.module.css';

function PaPM() {
  const {
    data,
    visibleMetrics,
    scale,
    setScale,
    yAxisDomain,
    toggleMetric,
    toggleCategory
  } = usePaPMChart();

  return (
    <div className={styles.papmContainer}>
      <PaPMHeader />
      <div className={styles.papmDashboardLayout}>
        <PaPMSidebar
          visibleMetrics={visibleMetrics}
          scale={scale}
          onScaleChange={setScale}
          onToggleMetric={toggleMetric}
          onToggleCategory={toggleCategory}
        />
        <div className={styles.papmMainContent}>
          <PaPMChart
            data={data}
            visibleMetrics={visibleMetrics}
            yAxisDomain={yAxisDomain}
          />
          <PaPMInsights />
          <PaPMFormula />
        </div>
      </div>
    </div>
  );
}

export default PaPM;

