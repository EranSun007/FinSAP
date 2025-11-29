import BTPHeader from './BTPHeader';
import BTPSidebar from './BTPSidebar';
import BTPQuotaInventory from './BTPQuotaInventory';
import BTPBurndownChart from './BTPBurndownChart';
import BTPInsights from './BTPInsights';
import { useBTPQuota } from './useBTPQuota';
import styles from '../../styles/pages/BTP.module.css';

function BTPDashboard({ onNavigate }) {
  const {
    quotas,
    burndownData,
    summary,
    services,
    filterCounts,
    quotaTypeFilter,
    statusFilter,
    serviceFilter,
    setQuotaTypeFilter,
    setStatusFilter,
    setServiceFilter,
    resetFilters,
    hasActiveFilters
  } = useBTPQuota();

  return (
    <div className={styles.btpContainer}>
      <BTPHeader summary={summary} />
      
      <div className={styles.btpDashboardLayout}>
        <BTPSidebar
          quotaTypeFilter={quotaTypeFilter}
          statusFilter={statusFilter}
          serviceFilter={serviceFilter}
          services={services}
          filterCounts={filterCounts}
          onQuotaTypeChange={setQuotaTypeFilter}
          onStatusChange={setStatusFilter}
          onServiceChange={setServiceFilter}
        />
        
        <div className={styles.btpMainContent}>
          <BTPQuotaInventory 
            quotas={quotas}
            hasActiveFilters={hasActiveFilters}
            onResetFilters={resetFilters}
            onNavigate={onNavigate}
          />
          <BTPBurndownChart data={burndownData} />
          <BTPInsights />
        </div>
      </div>
    </div>
  );
}

export default BTPDashboard;

