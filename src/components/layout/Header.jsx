import styles from '../../styles/components/Header.module.css';

function Header() {
  return (
    <header className={styles.shellHeader}>
      <div className={styles.headerLeft}>
        <img src="/SAP_R_grad_scrn.svg" alt="SAP" className={styles.sapLogo} />
        <div className={styles.headerTitle}>
          <span>Home</span> <span>▼</span>
        </div>
      </div>
      <div className={styles.headerCenter}>
        <div className={styles.searchBar}>
          <span>Search</span>
          <span>🔍</span>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerIcon}>❓</div>
        <div className={styles.headerIcon}>🔔</div>
        <div className={styles.userAvatar}>JD</div>
      </div>
    </header>
  );
}

export default Header;

