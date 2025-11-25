import MetricsChart from '../../components/charts/MetricsChart';
import { papmMetrics } from '../../data/papmMetricsData';
import styles from '../../styles/pages/PaPM.module.css';

function PaPMChart({ data, visibleMetrics, yAxisDomain }) {
  return (
    <div className={styles.papmChartContainer}>
      <MetricsChart 
        data={data}
        metrics={papmMetrics}
        visibleMetrics={visibleMetrics}
        yAxisDomain={yAxisDomain}
      />
    </div>
  );
}

export default PaPMChart;

