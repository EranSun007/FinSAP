import Icon from '../ui/Icon';
import styles from '../../styles/components/Header.module.css';

function Header() {
  return (
    <header className={styles.shellHeader}>
      <div className={styles.headerLeft}>
        <img src="/SAP_R_grad_scrn.svg" alt="SAP" className={styles.sapLogo} />
        <div className={styles.headerTitle}>
          <span>Home</span> <Icon name="slim-arrow-down" size="small" />
        </div>
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.searchBar}>
          <span>Search</span>
          <Icon name="search" size="small" />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerIcon}>
          <Icon name="sys-help" size="medium" title="Help" />
        </div>
        <div className={styles.headerIcon}>
          <Icon name="bell" size="medium" title="Notifications" />
        </div>
        <div className={styles.userAvatar}>JD</div>
      </div>
    </header>
  );
}

export default Header;

