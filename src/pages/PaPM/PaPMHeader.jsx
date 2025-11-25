import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/PaPM.module.css';

function PaPMHeader() {
  return (
    <div className={styles.papmHeader}>
      <h1><Icon name="bar-chart" size="large" /> SAP Profitability and Performance Management Cloud</h1>
      <p>October 2025 - Interactive visualization showing correlation between infrastructure and application metrics</p>
    </div>
  );
}

export default PaPMHeader;

