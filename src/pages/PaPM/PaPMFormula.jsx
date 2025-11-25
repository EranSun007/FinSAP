import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/PaPM.module.css';

function PaPMFormula() {
  return (
    <div className={styles.papmFormula}>
      <h3><Icon name="measuring-point" size="medium" /> The Correlation Formula</h3>
      <div className={styles.formulaCode}>
        <div><strong>PaPM: total_peak_memory</strong> = hana_storage_memory_gb_sm + hana_peak_calculation_memory_gb_sm</div>
        <div className={styles.formulaDivider}>
          <strong>Oct 25: 949.10 GB</strong> = 76.89 GB (storage) + 872.35 GB (calculation)
        </div>
      </div>

      <h4><Icon name="product" size="small" /> Brandon's Brewery Model - PaPM Use Case Types (L/P/F):</h4>
      <div className={styles.formulaSection}>
        <div><strong>L (LIFD Model):</strong> Base sizing 0.357 GB/unit - Most stable, baseline calculation model</div>
        <div><strong>P (PSA Model):</strong> Base sizing 0.579 GB/unit - Persistent Staging Area, moderate growth</div>
        <div><strong>F (Profitability Model):</strong> Base sizing 0.859 GB/unit - Full profitability calculations, highest volatility</div>
      </div>
      <div className={styles.formulaNote}>
        <Icon name="lightbulb" size="small" /> These three "taps" in the brewery represent different PaPM use case configurations, each with distinct memory footprints. Together they contribute to the total storage memory.
      </div>

      <h4><Icon name="lab" size="small" /> HANA Cockpit Validation Queries:</h4>
      <div className={styles.formulaSection}>
        <div><strong>1. Column Store:</strong> SELECT SUM(USED_MEMORY_SIZE)/1024/1024/1024 FROM M_SERVICE_COMPONENT_MEMORY WHERE COMPONENT='Column Store'</div>
        <div><strong>2. PaPM Tables:</strong> SELECT SUM(MEMORY_SIZE_IN_TOTAL)/1024/1024/1024 FROM M_CS_TABLES WHERE SCHEMA_NAME LIKE 'SAP_PAPM_%'</div>
        <div><strong>3. Heap Memory:</strong> SELECT SUM(USED_SIZE)/1024/1024/1024 FROM M_HEAP_MEMORY</div>
      </div>
      <div className={styles.formulaNote}>
        <Icon name="lightbulb" size="small" /> These real-time queries would be executed during calculation to capture peak values that correlate with PaPM's reported metrics.
      </div>
    </div>
  );
}

export default PaPMFormula;

