import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/BTP.module.css';

function BTPHeader({ summary }) {
  return (
    <div className={styles.btpHeader}>
      <h1>
        <Icon name="it-host" size="large" />
        Business Technology Platform
      </h1>
      <p>Prepaid Quota Visibility — November 2025</p>
      
      <div className={styles.summaryStats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{summary.total}</span>
          <span className={styles.statLabel}>Total Quotas</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue} style={{ color: '#86efac' }}>{summary.healthy}</span>
          <span className={styles.statLabel}>Healthy</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue} style={{ color: '#fcd34d' }}>{summary.warning}</span>
          <span className={styles.statLabel}>Warning</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue} style={{ color: '#fca5a5' }}>{summary.critical}</span>
          <span className={styles.statLabel}>Critical</span>
        </div>
      </div>
    </div>
  );
}

export default BTPHeader;

