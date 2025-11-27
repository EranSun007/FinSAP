import PropTypes from 'prop-types';
import styles from '../../styles/components/Card.module.css';

function Card({ children, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export function CardHeader({ children, title, subtitle, action }) {
  return (
    <div className={styles.cardHeader}>
      <div>
        {title && <div className={styles.cardTitle}>{title}</div>}
        {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
        {children}
      </div>
      {action && <div className={styles.cardAction}>{action}</div>}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.node
};

CardHeader.defaultProps = {
  children: null,
  title: null,
  subtitle: null,
  action: null
};

export default Card;

