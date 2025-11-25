import ForecastTable from './ForecastTable';
import HarvestingPreview from './HarvestingPreview';
import ForecastBreakdown from './ForecastBreakdown';
import CostForecast from './CostForecast';
import styles from '../../styles/pages/Overview.module.css';

function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.dashboardGrid}>
        <ForecastTable />
        <HarvestingPreview />
      </div>
      <div className={styles.bottomGrid}>
        <ForecastBreakdown />
        <CostForecast />
      </div>
    </div>
  );
}

export default Overview;

