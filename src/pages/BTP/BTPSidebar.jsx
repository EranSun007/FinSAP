import styles from '../../styles/pages/BTP.module.css';

function BTPSidebar({
  quotaTypeFilter,
  statusFilter,
  serviceFilter,
  services,
  filterCounts,
  onQuotaTypeChange,
  onStatusChange,
  onServiceChange
}) {
  return (
    <div className={styles.btpSidebar}>
      <div className={styles.btpFilters}>
        {/* Quota Type Filter */}
        <div className={styles.filterSection}>
          <h4>Quota Type</h4>
          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterBtn} ${quotaTypeFilter === 'all' ? styles.active : ''}`}
              onClick={() => onQuotaTypeChange('all')}
            >
              <span>All Quotas</span>
              <span className={styles.filterCount}>{filterCounts.all}</span>
            </button>
            <button
              className={`${styles.filterBtn} ${quotaTypeFilter === 'direct' ? styles.active : ''}`}
              onClick={() => onQuotaTypeChange('direct')}
            >
              <span>Direct</span>
              <span className={styles.filterCount}>{filterCounts.direct}</span>
            </button>
            <button
              className={`${styles.filterBtn} ${quotaTypeFilter === 'referenced' ? styles.active : ''}`}
              onClick={() => onQuotaTypeChange('referenced')}
            >
              <span>Referenced</span>
              <span className={styles.filterCount}>{filterCounts.referenced}</span>
            </button>
          </div>
        </div>

        {/* Status Filter */}
        <div className={styles.filterSection}>
          <h4>Status</h4>
          <div className={styles.filterGroup}>
            <button
              className={`${styles.filterBtn} ${statusFilter === 'all' ? styles.active : ''}`}
              onClick={() => onStatusChange('all')}
            >
              <span>All Statuses</span>
              <span className={styles.filterCount}>{filterCounts.all}</span>
            </button>
            <button
              className={`${styles.filterBtn} ${statusFilter === 'healthy' ? styles.active : ''}`}
              onClick={() => onStatusChange('healthy')}
            >
              <span>
                <span className={`${styles.statusDot} ${styles.healthy}`}></span>
                Healthy
              </span>
              <span className={styles.filterCount}>{filterCounts.healthy}</span>
            </button>
            <button
              className={`${styles.filterBtn} ${statusFilter === 'warning' ? styles.active : ''}`}
              onClick={() => onStatusChange('warning')}
            >
              <span>
                <span className={`${styles.statusDot} ${styles.warning}`}></span>
                Warning
              </span>
              <span className={styles.filterCount}>{filterCounts.warning}</span>
            </button>
            <button
              className={`${styles.filterBtn} ${statusFilter === 'critical' ? styles.active : ''}`}
              onClick={() => onStatusChange('critical')}
            >
              <span>
                <span className={`${styles.statusDot} ${styles.critical}`}></span>
                Critical
              </span>
              <span className={styles.filterCount}>{filterCounts.critical}</span>
            </button>
          </div>
        </div>

        {/* Service Filter */}
        <div className={styles.filterSection}>
          <h4>Service</h4>
          <select
            value={serviceFilter}
            onChange={(e) => onServiceChange(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 0.75rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '0.85rem',
              background: 'white'
            }}
          >
            <option value="all">All Services</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default BTPSidebar;

