import PropTypes from 'prop-types';
import ForecastTable from './ForecastTable';
import HarvestingPreview from './HarvestingPreview';
import LicenseUtilizationTile from './LicenseUtilizationTile';
import CostForecast from './CostForecast';
import { VIEWS } from '../../constants/views';
import styles from '../../styles/pages/Overview.module.css';

function Overview({ onNavigate, onServiceSelect }) {
  const handleViewAllHarvesting = () => {
    onNavigate(VIEWS.HARVESTING);
  };

  return (
    <div className={styles.overview}>
      <div className={styles.dashboardGrid}>
        <ForecastTable onNavigate={onNavigate} onServiceSelect={onServiceSelect} />
        <HarvestingPreview onViewAll={handleViewAllHarvesting} />
      </div>
      <div className={styles.bottomGrid}>
        <CostForecast />
        <LicenseUtilizationTile />
      </div>
    </div>
  );
}

Overview.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  onServiceSelect: PropTypes.func.isRequired
};

export default Overview;
