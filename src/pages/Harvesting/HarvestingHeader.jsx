import { useState } from 'react';
import Icon from '../../components/ui/Icon';
import Button from '../../components/ui/Button';
import styles from '../../styles/pages/Harvesting.module.css';

function HarvestingHeader({ 
  licenseType, 
  onLicenseTypeChange, 
  hasSelection, 
  selectedCount,
  onAddTag,
  onHarvest 
}) {
  const [inactivityThreshold, setInactivityThreshold] = useState(75);
  const [showOrphanedAccounts, setShowOrphanedAccounts] = useState(false);

  // Mock utilization rate - in real app this would come from props or API
  const utilizationRates = {
    sac: 75,
    signavio: 83,
    'business-ai': 78,
    'dynamic-forms': 81
  };

  const utilizationRate = utilizationRates[licenseType] || 0;
  
  // Determine utilization status
  const getUtilizationStatus = (rate) => {
    if (rate >= 80) return { label: 'High', className: styles.utilizationHigh };
    if (rate >= 60) return { label: 'Medium', className: styles.utilizationMedium };
    return { label: 'Low', className: styles.utilizationLow };
  };

  const utilizationStatus = getUtilizationStatus(utilizationRate);

  const handleThresholdChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 365) {
      setInactivityThreshold(value);
    }
  };

  const incrementThreshold = () => {
    if (inactivityThreshold < 365) {
      setInactivityThreshold(inactivityThreshold + 1);
    }
  };

  const decrementThreshold = () => {
    if (inactivityThreshold > 0) {
      setInactivityThreshold(inactivityThreshold - 1);
    }
  };

  return (
    <div className={styles.harvestingHeader}>
      <div className={styles.headerTitleRow}>
        <select 
          id="license-type-selector" 
          className={styles.licenseDropdown}
          value={licenseType}
          onChange={(e) => onLicenseTypeChange(e.target.value)}
        >
          <option value="signavio">Signavio Licenses</option>
          <option value="sac">SAP Analytics Cloud Licenses</option>
          <option value="business-ai">Business AI - HCM package Licenses</option>
          <option value="dynamic-forms">Dynamic Forms with SAP Mobile Execution</option>
        </select>
      </div>

      {/* Global Controls */}
      <div className={styles.headerControls}>
        {/* License Utilization Rate */}
        <div className={styles.controlItem}>
          <span className={styles.controlLabel}>License Utilization Rate</span>
          <span className={`${styles.utilizationBadge} ${utilizationStatus.className}`}>
            {utilizationStatus.label}
          </span>
        </div>

        {/* Inactivity Threshold */}
        <div className={styles.controlItem}>
          <span className={styles.controlLabel}>inactivity threshold</span>
          <div className={styles.stepInput}>
            <button 
              className={styles.stepInputButton}
              onClick={decrementThreshold}
              aria-label="Decrease threshold"
              disabled={inactivityThreshold <= 0}
            >
              −
            </button>
            <input 
              type="text"
              className={styles.stepInputField}
              value={inactivityThreshold}
              onChange={handleThresholdChange}
              readOnly
            />
            <button 
              className={styles.stepInputButton}
              onClick={incrementThreshold}
              aria-label="Increase threshold"
              disabled={inactivityThreshold >= 365}
            >
              +
            </button>
          </div>
        </div>

        {/* Orphaned Accounts Toggle */}
        <div className={styles.controlItem}>
          <label className={styles.toggleLabel}>
            <input 
              type="checkbox"
              className={styles.toggleCheckbox}
              checked={showOrphanedAccounts}
              onChange={(e) => setShowOrphanedAccounts(e.target.checked)}
            />
            <span className={styles.toggleSwitch}></span>
            <span className={styles.controlLabel}>orphaned accounts</span>
          </label>
        </div>
      </div>

      <div className={styles.headerActions}>
        <Button 
          onClick={onHarvest}
          disabled={!hasSelection}
          variant="primary"
        >
          Harvest
        </Button>
        <span className={styles.expandIcon}>
          <Icon name="full-screen" size="medium" />
        </span>
      </div>
    </div>
  );
}

export default HarvestingHeader;

