import styles from '../../styles/pages/WorkZone.module.css';

function WorkZoneFormula({ kpis }) {
  const { directSubscription, referencedEntitlement, dynamicEntitlement, totalPrepaid } = kpis;
  
  return (
    <div className={styles.formulaBox}>
      <div className={styles.formulaTitle}>Quota Calculation Formula:</div>
      <div className={styles.formulaText}>
        Total Prepaid Quota = Direct Subscription + Referenced Entitlement + Dynamic Entitlement
      </div>
      <div className={styles.formulaDivider} />
      <div className={styles.formulaTitle}>Nov 2024 Example:</div>
      <div className={styles.formulaCalculation}>
        <span className={styles.formulaResult}>{totalPrepaid.value} users</span>
        <span className={styles.formulaEquals}>=</span>
        <span className={styles.formulaDirect}>{directSubscription.value} (Direct)</span>
        <span className={styles.formulaPlus}>+</span>
        <span className={styles.formulaReferenced}>{referencedEntitlement.value} (Referenced)</span>
        <span className={styles.formulaPlus}>+</span>
        <span className={styles.formulaDynamic}>{dynamicEntitlement.value} (Dynamic)</span>
      </div>
    </div>
  );
}

export default WorkZoneFormula;

