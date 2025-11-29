import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/BTP.module.css';

/**
 * Mini progress bar component for dual quota display
 */
function MiniProgressBar({ value, status, label }) {
  return (
    <div className={styles.miniProgressWrapper}>
      <div className={styles.miniProgressHeader}>
        <span className={styles.miniProgressLabel}>{label}</span>
        <span className={styles.miniProgressValue}>{value.toFixed(1)}%</span>
      </div>
      <div className={styles.miniProgressBarWrapper}>
        <div 
          className={`${styles.miniProgressBar} ${styles[status]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Special card for services with both Direct and Referenced quotas
 */
function DualQuotaCard({ quota, onNavigate }) {
  const { directQuota, referencedQuota } = quota;
  
  // Calculate days until expiration
  const daysUntilExpiration = Math.ceil(
    (new Date(quota.expirationDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  const handleClick = () => {
    if (onNavigate && quota.serviceName === 'SAP Build Work Zone') {
      onNavigate('workzone-details');
    }
  };

  return (
    <div 
      className={`${styles.quotaCard} ${styles.dualQuotaCard} ${styles[quota.status]} ${styles.clickable}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Header with Dual badge */}
      <div className={styles.quotaCardHeader}>
        <div className={styles.quotaServiceInfo}>
          <div className={styles.quotaIcon} style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
            <Icon name={quota.serviceIcon || 'cloud'} size="medium" />
          </div>
          <div>
            <div className={styles.quotaServiceName}>{quota.serviceName}</div>
            <div className={styles.quotaDirectory}>{quota.directoryName}</div>
          </div>
        </div>
        <span className={`${styles.quotaTypeBadge} ${styles.dual}`}>
          Dual Quota
        </span>
      </div>

      {/* Combined Total Progress */}
      <div className={styles.quotaProgress}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Combined Usage</span>
          <span className={styles.progressValue}>
            {quota.remainingQuota.toLocaleString()} / {quota.totalQuota.toLocaleString()} {quota.unit}
          </span>
        </div>
        <div className={styles.progressBarWrapper}>
          <div 
            className={`${styles.progressBar} ${styles[quota.status]}`}
            style={{ width: `${quota.utilizationPct}%` }}
          />
        </div>
      </div>

      {/* Dual Quota Breakdown */}
      <div className={styles.dualQuotaBreakdown}>
        {/* Direct Quota Section */}
        <div className={styles.quotaSection}>
          <div className={styles.quotaSectionHeader}>
            <span className={`${styles.quotaTypeBadge} ${styles.direct} ${styles.small}`}>Direct</span>
            <span className={styles.quotaSectionLabel}>{directQuota.label}</span>
          </div>
          <MiniProgressBar 
            value={directQuota.utilizationPct} 
            status={directQuota.status}
            label={`${directQuota.consumedQuota.toLocaleString()} / ${directQuota.totalQuota.toLocaleString()}`}
          />
          <div className={styles.quotaSectionMeta}>
            <span>Burn: {directQuota.dailyBurnRate}/day</span>
            <span className={styles[directQuota.status]}>{directQuota.utilizationPct}% used</span>
          </div>
        </div>

        {/* Referenced Quota Section */}
        <div className={styles.quotaSection}>
          <div className={styles.quotaSectionHeader}>
            <span className={`${styles.quotaTypeBadge} ${styles.referenced} ${styles.small}`}>Referenced</span>
            <span className={styles.quotaSectionLabel}>{referencedQuota.label}</span>
          </div>
          <MiniProgressBar 
            value={referencedQuota.utilizationPct} 
            status={referencedQuota.status}
            label={`${referencedQuota.consumedQuota.toLocaleString()} / ${referencedQuota.totalQuota.toLocaleString()}`}
          />
          <div className={styles.quotaSectionMeta}>
            <span>Burn: {referencedQuota.dailyBurnRate}/day</span>
            <span className={styles[referencedQuota.status]}>{referencedQuota.utilizationPct}% used</span>
          </div>
          <div className={styles.referencedInfo} style={{ marginTop: '0.5rem', paddingTop: '0.5rem' }}>
            <Icon name="share-2" size="small" />
            <span>From: {referencedQuota.parentDirectoryName}</span>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className={styles.dualQuotaSummary}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Total Daily Burn</span>
          <span className={styles.summaryValue}>{quota.dailyBurnRate} {quota.unit}/day</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Expires</span>
          <span className={`${styles.summaryValue} ${daysUntilExpiration <= 60 ? styles.warning : ''}`}>
            {daysUntilExpiration} days
          </span>
        </div>
      </div>
    </div>
  );
}

function QuotaCard({ quota }) {
  const isReferenced = quota.quotaType === 'prepaid-referenced';
  const utilizationPct = quota.utilizationPct;
  
  // Calculate days until expiration
  const daysUntilExpiration = Math.ceil(
    (new Date(quota.expirationDate) - new Date()) / (1000 * 60 * 60 * 24)
  );
  
  // Calculate days until projected exhaustion
  const daysUntilExhaustion = Math.ceil(
    (new Date(quota.projectedExhaustion) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className={`${styles.quotaCard} ${styles[quota.status]}`}>
      <div className={styles.quotaCardHeader}>
        <div className={styles.quotaServiceInfo}>
          <div className={styles.quotaIcon}>
            <Icon name={quota.serviceIcon || 'cloud'} size="medium" />
          </div>
          <div>
            <div className={styles.quotaServiceName}>{quota.serviceName}</div>
            <div className={styles.quotaDirectory}>{quota.directoryName}</div>
          </div>
        </div>
        <span className={`${styles.quotaTypeBadge} ${isReferenced ? styles.referenced : styles.direct}`}>
          {isReferenced ? 'Referenced' : 'Direct'}
        </span>
      </div>

      <div className={styles.quotaProgress}>
        <div className={styles.progressHeader}>
          <span className={styles.progressLabel}>Quota Usage</span>
          <span className={styles.progressValue}>
            {quota.remainingQuota.toLocaleString()} / {quota.totalQuota.toLocaleString()} {quota.unit}
          </span>
        </div>
        <div className={styles.progressBarWrapper}>
          <div 
            className={`${styles.progressBar} ${styles[quota.status]}`}
            style={{ width: `${utilizationPct}%` }}
          />
        </div>
      </div>

      <div className={styles.quotaDetails}>
        <div className={styles.quotaDetail}>
          <span className={styles.quotaDetailLabel}>Utilization</span>
          <span className={`${styles.quotaDetailValue} ${quota.status !== 'healthy' ? styles[quota.status] : ''}`}>
            {utilizationPct.toFixed(1)}%
          </span>
        </div>
        <div className={styles.quotaDetail}>
          <span className={styles.quotaDetailLabel}>Daily Burn Rate</span>
          <span className={styles.quotaDetailValue}>
            {quota.dailyBurnRate} {quota.unit}/day
          </span>
        </div>
        <div className={styles.quotaDetail}>
          <span className={styles.quotaDetailLabel}>Expires In</span>
          <span className={`${styles.quotaDetailValue} ${daysUntilExpiration <= 60 ? styles.warning : ''}`}>
            {daysUntilExpiration} days
          </span>
        </div>
        <div className={styles.quotaDetail}>
          <span className={styles.quotaDetailLabel}>Projected Exhaustion</span>
          <span className={`${styles.quotaDetailValue} ${daysUntilExhaustion <= 30 ? styles.critical : daysUntilExhaustion <= 90 ? styles.warning : ''}`}>
            {daysUntilExhaustion > 0 ? `${daysUntilExhaustion} days` : 'N/A'}
          </span>
        </div>
      </div>

      {isReferenced && quota.parentDirectoryName && (
        <div className={styles.referencedInfo}>
          <Icon name="share-2" size="small" />
          <span>Referenced from: {quota.parentDirectoryName}</span>
        </div>
      )}
    </div>
  );
}

function BTPQuotaInventory({ quotas, hasActiveFilters, onResetFilters, onNavigate }) {
  return (
    <div className={styles.quotaInventory}>
      <h3>
        <Icon name="grid" size="medium" />
        Quota Inventory
        <span style={{ fontWeight: 'normal', fontSize: '0.85rem', color: 'var(--sap-text-light)', marginLeft: '0.5rem' }}>
          ({quotas.length} {quotas.length === 1 ? 'quota' : 'quotas'})
        </span>
      </h3>

      {quotas.length > 0 ? (
        <div className={styles.quotaGrid}>
          {quotas.map(quota => (
            quota.isDualQuota 
              ? <DualQuotaCard key={quota.quotaId} quota={quota} onNavigate={onNavigate} />
              : <QuotaCard key={quota.quotaId} quota={quota} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <Icon name="search" size="large" />
          <h4>No quotas found</h4>
          <p>
            {hasActiveFilters 
              ? 'Try adjusting your filters to see more results.'
              : 'No prepaid quotas are currently configured.'}
          </p>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#0a6ed1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BTPQuotaInventory;

