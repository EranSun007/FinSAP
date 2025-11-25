import styles from '../../styles/components/Card.module.css';

function Card({ children, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
}

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

export default Card;

