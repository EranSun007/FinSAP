import { useState } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import CostBreakdownFilters from './CostBreakdownFilters';
import CostBreakdownToolbar from './CostBreakdownToolbar';
import CostBreakdownTable from './CostBreakdownTable';
import useTreeState from './useTreeState';
import { costBreakdownData } from '../../data/costBreakdownData';
import styles from '../../styles/pages/CostBreakdown.module.css';

function CostBreakdown() {
  const [filters, setFilters] = useState({
    search: '',
    reading: 'Daily',
    date: getTodayDate()
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);
  const [viewMode, setViewMode] = useState('Standard');

  const {
    expandedIds,
    toggleExpanded,
    expandAll,
    collapseAll,
    visibleRows
  } = useTreeState(costBreakdownData);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
    // In a real implementation, this would trigger data fetching
    console.log('Applied filters:', newFilters);
  };

  return (
    <div className={styles.costBreakdown}>
      <Card className={styles.mainCard}>
        <div className={styles.cardHeaderWrapper}>
          <CardHeader title="Cost Breakdown (Daily)" />
        </div>
        
        <div className={styles.content}>
          {/* View mode selector */}
          <div className={styles.viewModeSection}>
            <div className={styles.viewModeSelector}>
              <button 
                className={`${styles.viewModeButton} ${viewMode === 'Standard' ? styles.active : ''}`}
                onClick={() => setViewMode('Standard')}
              >
                Standard
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 8L2 4h8L6 8z"/>
                </svg>
              </button>
            </div>
            <div className={styles.viewModeActions}>
              <button 
                className={styles.iconButton}
                onClick={expandAll}
                title="Expand all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button 
                className={styles.iconButton}
                onClick={collapseAll}
                title="Collapse all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className={styles.iconButton} title="Open in new window">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10 2h4v4M14 2L8 8M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3"/>
                </svg>
              </button>
              <button className={styles.iconButton} title="More options">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="3" r="1.5"/>
                  <circle cx="8" cy="8" r="1.5"/>
                  <circle cx="8" cy="13" r="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Filters */}
          <CostBreakdownFilters 
            onFilterChange={handleFilterChange}
            onApplyFilters={handleApplyFilters}
          />

          {/* Action toolbar */}
          <div className={styles.actionBar}>
            <div className={styles.leftActions}>
              {/* Placeholder for any left-aligned actions */}
            </div>
            <CostBreakdownToolbar />
          </div>

          {/* Hierarchical tree table */}
          <CostBreakdownTable 
            visibleRows={visibleRows}
            expandedIds={expandedIds}
            onToggleExpand={toggleExpanded}
          />
        </div>
      </Card>
    </div>
  );
}

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export default CostBreakdown;

