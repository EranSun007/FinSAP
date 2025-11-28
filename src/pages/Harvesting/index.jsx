import { useState } from 'react';
import HarvestingHeader from './HarvestingHeader';
import HarvestingSidebar from './HarvestingSidebar';
import InactiveUsersTable from './InactiveUsersTable';
import NoLogonUsersTable from './NoLogonUsersTable';
import { useHarvestingSelection } from './useHarvestingSelection';
import { harvestingData } from '../../data/harvestingData';
import styles from '../../styles/pages/Harvesting.module.css';

function Harvesting() {
  const [licenseType, setLicenseType] = useState('sac');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const {
    selectedInactive,
    selectedNoLogon,
    toggleInactive,
    toggleNoLogon,
    toggleAllInactive,
    toggleAllNoLogon,
    hasSelection,
    selectedCount
  } = useHarvestingSelection();

  const currentData = harvestingData[licenseType];

  const handleAddTag = () => {
    const tag = prompt(`Add tag to ${selectedCount} user(s):`);
    if (tag) {
      alert(`Tag "${tag}" would be added to ${selectedCount} user(s)`);
    }
  };

  const handleHarvest = () => {
    const confirmed = confirm(
      `Harvest licenses from ${selectedCount} user(s)?\n\nThis will remove their licenses and make them available for reassignment.`
    );
    if (confirmed) {
      alert(`${selectedCount} license(s) would be harvested and made available for reassignment`);
    }
  };

  return (
    <div className={styles.harvestingContainer}>
      <HarvestingHeader
        licenseType={licenseType}
        onLicenseTypeChange={setLicenseType}
        hasSelection={hasSelection}
        selectedCount={selectedCount}
        onAddTag={handleAddTag}
        onHarvest={handleHarvest}
      />
      <div className={styles.harvestingContent}>
        <HarvestingSidebar 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          licenseType={licenseType}
        />
        <div className={styles.harvestingMain}>
          <InactiveUsersTable
            users={currentData.inactiveUsers}
            selectedIndices={selectedInactive}
            onToggle={toggleInactive}
            onToggleAll={toggleAllInactive}
            licenseType={licenseType}
          />
          <NoLogonUsersTable
            users={currentData.noLogOnUsers}
            selectedIndices={selectedNoLogon}
            onToggle={toggleNoLogon}
            onToggleAll={toggleAllNoLogon}
            licenseType={licenseType}
          />
        </div>
      </div>
    </div>
  );
}

export default Harvesting;

