import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/CostBreakdown.module.css';

function CostBreakdownToolbar() {
  return (
    <div className={styles.toolbar}>
      <button className={styles.toolbarButton} title="Delete">
        <Icon name="delete" size="large" />
      </button>
      
      <button className={styles.toolbarButton} title="Settings">
        <Icon name="action-settings" size="large" />
      </button>
      
      <button className={styles.toolbarButton} title="Fullscreen">
        <Icon name="full-screen" size="large" />
      </button>
      
      <button className={styles.toolbarButton} title="More options">
        <Icon name="overflow" size="large" />
      </button>
    </div>
  );
}

export default CostBreakdownToolbar;

