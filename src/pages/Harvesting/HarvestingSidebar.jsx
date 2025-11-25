import styles from '../../styles/pages/Harvesting.module.css';

function HarvestingSidebar({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'planning-professional', label: 'Planning Professional' },
    { id: 'planning-standard', label: 'Planning Standard' },
    { id: 'business-intelligence', label: 'Business Intelligence' },
  ];

  return (
    <div className={styles.harvestingSidebar}>
      {filters.map(filter => (
        <div
          key={filter.id}
          className={`${styles.sidebarItem} ${activeFilter === filter.id ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </div>
      ))}
    </div>
  );
}

export default HarvestingSidebar;

