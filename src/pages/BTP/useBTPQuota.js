import { useState, useMemo } from 'react';
import { btpQuotaData, btpBurndownData, getQuotaSummary } from '../../data/btpQuotaData';

/**
 * Custom hook for BTP quota state management and filtering
 */
export function useBTPQuota() {
  const [quotaTypeFilter, setQuotaTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');

  // Get unique services for filter dropdown
  const services = useMemo(() => {
    const uniqueServices = [...new Set(btpQuotaData.map(q => q.serviceName))];
    return uniqueServices.sort();
  }, []);

  // Filter quotas based on current filters
  const filteredQuotas = useMemo(() => {
    return btpQuotaData.filter(quota => {
      // Quota type filter - dual quotas appear in both direct and referenced filters
      if (quotaTypeFilter !== 'all') {
        const isDual = quota.quotaType === 'dual';
        if (quotaTypeFilter === 'direct' && quota.quotaType !== 'prepaid-direct' && !isDual) return false;
        if (quotaTypeFilter === 'referenced' && quota.quotaType !== 'prepaid-referenced' && !isDual) return false;
      }

      // Status filter
      if (statusFilter !== 'all' && quota.status !== statusFilter) return false;

      // Service filter
      if (serviceFilter !== 'all' && quota.serviceName !== serviceFilter) return false;

      return true;
    });
  }, [quotaTypeFilter, statusFilter, serviceFilter]);

  // Calculate summary stats
  const summary = useMemo(() => getQuotaSummary(btpQuotaData), []);

  // Filter counts for sidebar badges
  // Note: Dual quotas count in both direct and referenced
  const filterCounts = useMemo(() => ({
    all: btpQuotaData.length,
    direct: btpQuotaData.filter(q => q.quotaType === 'prepaid-direct' || q.quotaType === 'dual').length,
    referenced: btpQuotaData.filter(q => q.quotaType === 'prepaid-referenced' || q.quotaType === 'dual').length,
    dual: btpQuotaData.filter(q => q.quotaType === 'dual').length,
    healthy: btpQuotaData.filter(q => q.status === 'healthy').length,
    warning: btpQuotaData.filter(q => q.status === 'warning').length,
    critical: btpQuotaData.filter(q => q.status === 'critical').length,
  }), []);

  // Reset all filters
  const resetFilters = () => {
    setQuotaTypeFilter('all');
    setStatusFilter('all');
    setServiceFilter('all');
  };

  return {
    // Data
    quotas: filteredQuotas,
    allQuotas: btpQuotaData,
    burndownData: btpBurndownData,
    summary,
    services,
    filterCounts,

    // Filters
    quotaTypeFilter,
    statusFilter,
    serviceFilter,
    setQuotaTypeFilter,
    setStatusFilter,
    setServiceFilter,
    resetFilters,

    // Computed
    hasActiveFilters: quotaTypeFilter !== 'all' || statusFilter !== 'all' || serviceFilter !== 'all'
  };
}

export default useBTPQuota;

