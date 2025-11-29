import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/WorkZone.module.css';

function WorkZoneHeader({ metadata, onBack }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <button className={styles.backButton} onClick={onBack}>
          <Icon name="arrow-left" size="small" />
          Back to BTP Dashboard
        </button>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.headerIcon}>
          <Icon name="home" size="large" />
        </div>
        <div className={styles.headerText}>
          <h1>{metadata.title}</h1>
          <p className={styles.subtitle}>
            Period: {metadata.period}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkZoneHeader;

