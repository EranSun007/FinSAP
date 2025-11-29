import { useState } from 'react';
import Card, { CardHeader } from '../../components/ui/Card';
import ServiceManagerFilters from './ServiceManagerFilters';
import ServiceManagerTable from './ServiceManagerTable';
import useServiceData from './useServiceData';
import Button from '../../components/ui/Button';
import styles from '../../styles/pages/ServiceManager.module.css';

function ServiceManager() {
  const [filters, setFilters] = useState({
    date: getTodayDate(),
    reading: 'Daily',
    month: '',
    service: ''
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);
  const { data, loading, error } = useServiceData(appliedFilters);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
  };

  return (
    <div className={styles.serviceManager}>
      <Card className={styles.mainCard}>
        <CardHeader title="Service Manager" />
        
        <div className={styles.content}>
          <ServiceManagerFilters 
            onFilterChange={handleFilterChange}
            onApplyFilters={handleApplyFilters}
          />

          <div className={styles.actionBar}>
            <div className={styles.actionButtons}>
              <Button className={styles.actionButton}>
                Data Management
              </Button>
              <Button className={styles.actionButton}>
                Bulk Edit
              </Button>
              <Button className={styles.actionButton}>
                Forecast Management
              </Button>
              <Button className={styles.actionButton}>
                Delete
              </Button>
            </div>
            <div className={styles.viewOptions}>
              <button className={styles.iconButton} title="Table view">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <rect x="2" y="3" width="16" height="3" />
                  <rect x="2" y="8" width="16" height="3" />
                  <rect x="2" y="13" width="16" height="3" />
                </svg>
              </button>
              <button className={styles.iconButton} title="Settings">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z"/>
                  <path d="M8 2h4l.5 2 1.7 1 2-.5 2 3.5-1.5 1.5v2l1.5 1.5-2 3.5-2-.5-1.7 1L12 18H8l-.5-2-1.7-1-2 .5-2-3.5L3.3 10.5v-2L1.8 7 3.8 3.5l2 .5 1.7-1L8 2z"/>
                </svg>
              </button>
              <button className={styles.iconButton} title="Full screen">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3h5v2H5v3H3V3zm9 0h5v5h-2V5h-3V3zM3 12h2v3h3v2H3v-5zm14 0h2v5h-5v-2h3v-3z"/>
                </svg>
              </button>
            </div>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <strong>Error:</strong> {error}
            </div>
          )}

          <ServiceManagerTable data={data} loading={loading} />
        </div>
      </Card>
    </div>
  );
}

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export default ServiceManager;




