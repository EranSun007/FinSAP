import { useState } from 'react';
import Dropdown, { DropdownItem } from '../../components/ui/Dropdown';
import Button from '../../components/ui/Button';
import styles from '../../styles/pages/ServiceManager.module.css';

function ServiceManagerFilters({ onFilterChange, onApplyFilters }) {
  const [filters, setFilters] = useState({
    date: getTodayDate(),
    reading: 'Daily',
    month: '',
    service: ''
  });

  const [showAdaptFilters, setShowAdaptFilters] = useState(false);

  const handleFilterChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleGo = () => {
    onApplyFilters(filters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      date: getTodayDate(),
      reading: 'Daily',
      month: '',
      service: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Date:</label>
          <input
            type="date"
            className={styles.dateInput}
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
          />
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Reading:</label>
          <select
            className={styles.selectInput}
            value={filters.reading}
            onChange={(e) => handleFilterChange('reading', e.target.value)}
          >
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
          </select>
          <button 
            className={styles.clearButton}
            onClick={() => handleFilterChange('reading', 'Daily')}
            title="Clear filter"
          >
            ×
          </button>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Month:</label>
          <input
            type="month"
            className={styles.monthInput}
            value={filters.month ? formatMonthForInput(filters.month) : ''}
            onChange={(e) => handleFilterChange('month', formatMonthForStorage(e.target.value))}
          />
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Service:</label>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Search services..."
            value={filters.service}
            onChange={(e) => handleFilterChange('service', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.filterActions}>
        <Button onClick={handleGo} className={styles.goButton}>
          Go
        </Button>
        <Button 
          onClick={() => setShowAdaptFilters(!showAdaptFilters)} 
          className={styles.adaptButton}
        >
          Adapt Filters ({Object.values(filters).filter(v => v && v !== 'Daily').length})
        </Button>
        {Object.values(filters).some(v => v && v !== 'Daily' && v !== getTodayDate()) && (
          <Button onClick={handleClearFilters} className={styles.clearAllButton}>
            Clear All
          </Button>
        )}
      </div>

      {showAdaptFilters && (
        <div className={styles.adaptFiltersPanel}>
          <div className={styles.adaptFiltersHeader}>
            <h3>Active Filters</h3>
            <button 
              className={styles.closeButton}
              onClick={() => setShowAdaptFilters(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.activeFiltersList}>
            {filters.date !== getTodayDate() && (
              <div className={styles.activeFilter}>
                <span>Date: {filters.date}</span>
                <button onClick={() => handleFilterChange('date', getTodayDate())}>×</button>
              </div>
            )}
            {filters.reading !== 'Daily' && (
              <div className={styles.activeFilter}>
                <span>Reading: {filters.reading}</span>
                <button onClick={() => handleFilterChange('reading', 'Daily')}>×</button>
              </div>
            )}
            {filters.month && (
              <div className={styles.activeFilter}>
                <span>Month: {filters.month}</span>
                <button onClick={() => handleFilterChange('month', '')}>×</button>
              </div>
            )}
            {filters.service && (
              <div className={styles.activeFilter}>
                <span>Service: {filters.service}</span>
                <button onClick={() => handleFilterChange('service', '')}>×</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper functions
function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function formatMonthForInput(yyyymm) {
  if (!yyyymm || yyyymm.length !== 6) return '';
  return `${yyyymm.slice(0, 4)}-${yyyymm.slice(4, 6)}`;
}

function formatMonthForStorage(yyyyMm) {
  if (!yyyyMm) return '';
  return yyyyMm.replace('-', '');
}

export default ServiceManagerFilters;




