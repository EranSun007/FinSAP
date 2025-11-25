import { useState } from 'react';
import Button from '../../components/ui/Button';
import styles from '../../styles/pages/CostBreakdown.module.css';

function CostBreakdownFilters({ onFilterChange, onApplyFilters }) {
  const [filters, setFilters] = useState({
    search: '',
    reading: 'Daily',
    date: getTodayDate()
  });

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showAdaptFilters, setShowAdaptFilters] = useState(false);

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const handleGo = () => {
    if (onApplyFilters) {
      onApplyFilters(filters);
    }
  };

  const handleClearDate = () => {
    handleChange('date', '');
  };

  const toggleAdaptFilters = () => {
    setShowAdaptFilters(!showAdaptFilters);
  };

  const activeFilterCount = 2; // Example: Reading and Date

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterSection}>
        {/* Search box */}
        <div className={styles.filterGroup}>
          <div className={styles.searchInputWrapper}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.5 6.5a5 5 0 11-10 0 5 5 0 0110 0zM10.27 11.33a6.5 6.5 0 111.06-1.06l3.2 3.2a.75.75 0 11-1.06 1.06l-3.2-3.2z"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={filters.search}
              onChange={(e) => handleChange('search', e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Collapse/Expand button */}
        <button 
          className={styles.collapseButton}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand filters" : "Collapse filters"}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            {isCollapsed ? (
              <path d="M8 11l-4-4h8l-4 4z"/>
            ) : (
              <path d="M8 5l4 4H4l4-4z"/>
            )}
          </svg>
        </button>

        {!isCollapsed && (
          <>
            {/* Reading dropdown */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Reading:*</label>
              <select
                value={filters.reading}
                onChange={(e) => handleChange('reading', e.target.value)}
                className={styles.selectInput}
              >
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>

            {/* Date picker */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Date:*</label>
              <div className={styles.dateInputWrapper}>
                <input
                  type="date"
                  value={filters.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className={styles.dateInput}
                />
                <svg className={styles.calendarIcon} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M4 1a1 1 0 00-1 1v1H2a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-1V2a1 1 0 10-2 0v1H5V2a1 1 0 00-1-1zM2 6h12v8H2V6z"/>
                </svg>
                {filters.date && (
                  <button
                    className={styles.clearButton}
                    onClick={handleClearDate}
                    title="Clear date"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className={styles.filterActions}>
              <Button 
                className={styles.goButton}
                onClick={handleGo}
              >
                Go
              </Button>
              <Button
                className={styles.adaptButton}
                onClick={toggleAdaptFilters}
              >
                Adapt Filters ({activeFilterCount})
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Adapt Filters Panel */}
      {showAdaptFilters && !isCollapsed && (
        <div className={styles.adaptFiltersPanel}>
          <div className={styles.adaptFiltersHeader}>
            <h3>Active Filters</h3>
            <button
              className={styles.closeButton}
              onClick={toggleAdaptFilters}
              title="Close"
            >
              ×
            </button>
          </div>
          <div className={styles.activeFiltersList}>
            <div className={styles.activeFilter}>
              <span>Reading: {filters.reading}</span>
              <button onClick={() => handleChange('reading', 'Daily')} title="Reset">×</button>
            </div>
            {filters.date && (
              <div className={styles.activeFilter}>
                <span>Date: {formatDate(filters.date)}</span>
                <button onClick={handleClearDate} title="Clear">×</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

export default CostBreakdownFilters;

