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
  return (
    <div className={styles.harvestingHeader}>
      <div className={styles.headerTitleRow}>
        <span className={styles.expandIcon}>
          <Icon name="navigation-down-arrow" size="medium" />
        </span>
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
      <div className={styles.headerActions}>
        <Button 
          onClick={onAddTag}
          disabled={!hasSelection}
        >
          Add Tag
        </Button>
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

