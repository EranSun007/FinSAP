import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/SAC.module.css';

function SACHeader() {
  return (
    <div className={styles.sacHeader}>
      <h1><Icon name="business-objects-experience" size="large" /> SAP Analytics Cloud</h1>
      <p>October 2025 - Business intelligence, planning, and analytics usage metrics</p>
    </div>
  );
}

export default SACHeader;

