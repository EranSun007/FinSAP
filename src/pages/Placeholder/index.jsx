import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/Placeholder.module.css';

function PlaceholderPage({ title, description, icon = 'construction' }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon name={icon} size="large" />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description || 'This page is under construction.'}</p>
        <div className={styles.badge}>Coming Soon</div>
      </div>
    </div>
  );
}

export default PlaceholderPage;

