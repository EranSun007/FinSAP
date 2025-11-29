import WorkZoneHeader from './WorkZoneHeader';
import WorkZoneKPIGrid from './WorkZoneKPIGrid';
import WorkZoneFormula from './WorkZoneFormula';
import WorkZoneTrendChart from './WorkZoneTrendChart';
import WorkZoneDynamicChart from './WorkZoneDynamicChart';
import WorkZoneSourcesTable from './WorkZoneSourcesTable';
import { 
  workZoneMonthlyData, 
  dynamicComponentsData, 
  workZoneKPIs, 
  referencedEntitlementSources,
  workZoneMetadata,
  getTotalReferencedUsers
} from '../../data/workZoneQuotaData';
import styles from '../../styles/pages/WorkZone.module.css';

function WorkZoneDetails({ onNavigate }) {
  const handleBack = () => {
    if (onNavigate) {
      onNavigate('btp');
    }
  };

  return (
    <div className={styles.container}>
      <WorkZoneHeader metadata={workZoneMetadata} onBack={handleBack} />
      
      <WorkZoneKPIGrid kpis={workZoneKPIs} />
      
      <WorkZoneFormula kpis={workZoneKPIs} />
      
      <WorkZoneTrendChart data={workZoneMonthlyData} />
      
      <WorkZoneDynamicChart data={dynamicComponentsData} />
      
      <WorkZoneSourcesTable 
        sources={referencedEntitlementSources} 
        totalUsers={getTotalReferencedUsers()}
      />
    </div>
  );
}

export default WorkZoneDetails;

