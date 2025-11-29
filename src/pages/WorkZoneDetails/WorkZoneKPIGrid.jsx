import styles from '../../styles/pages/WorkZone.module.css';

function KPICard({ kpi }) {
  return (
    <div className={`${styles.kpiCard} ${styles[kpi.type]}`}>
      <div className={styles.kpiLabel}>{kpi.label}</div>
      <div className={styles.kpiValue}>{kpi.value.toLocaleString()}</div>
      <div className={styles.kpiSubtext}>{kpi.subtext}</div>
    </div>
  );
}

function WorkZoneKPIGrid({ kpis }) {
  return (
    <div className={styles.kpiGrid}>
      <KPICard kpi={kpis.directSubscription} />
      <KPICard kpi={kpis.referencedEntitlement} />
      <KPICard kpi={kpis.dynamicEntitlement} />
      <KPICard kpi={kpis.totalPrepaid} />
    </div>
  );
}

export default WorkZoneKPIGrid;

