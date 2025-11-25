import styles from '../../styles/pages/CostBreakdown.module.css';

function CostBreakdownToolbar() {
  return (
    <div className={styles.toolbar}>
      <button className={styles.toolbarButton} title="Delete">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v1h4a1 1 0 110 2h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4V3zm2 1h2V3H9v1zm-3 3v9h8V7H6z"/>
          <path d="M8 9a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4 0a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z"/>
        </svg>
      </button>
      
      <button className={styles.toolbarButton} title="Settings">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
          <path d="M8 2h4l.5 2 1.7 1 2-.5 2 3.5-1.5 1.5v2l1.5 1.5-2 3.5-2-.5-1.7 1L12 18H8l-.5-2-1.7-1-2 .5-2-3.5L3.3 10.5v-2L1.8 7 3.8 3.5l2 .5 1.7-1L8 2z"/>
        </svg>
      </button>
      
      <button className={styles.toolbarButton} title="Fullscreen">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 3h5v2H5v3H3V3zm9 0h5v5h-2V5h-3V3zM3 12h2v3h3v2H3v-5zm14 0h2v5h-5v-2h3v-3z"/>
        </svg>
      </button>
      
      <button className={styles.toolbarButton} title="More options">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4zm0-12a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
      </button>
    </div>
  );
}

export default CostBreakdownToolbar;

