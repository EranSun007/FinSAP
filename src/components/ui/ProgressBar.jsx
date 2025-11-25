import styles from '../../styles/components/ProgressBar.module.css';

function ProgressBar({ value, max = 100, color, className = '' }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className={`${styles.progressBg} ${className}`}>
      <div 
        className={styles.progressFill}
        style={{ 
          width: `${percentage}%`,
          backgroundColor: color 
        }}
      />
    </div>
  );
}

export default ProgressBar;

