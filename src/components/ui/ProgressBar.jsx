import PropTypes from 'prop-types';
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

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: undefined,
  className: ''
};

export default ProgressBar;

