import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/Signavio.module.css';

function SignavioProcessFlow() {
  return (
    <div className={styles.signavioProcessFlow}>
      <h3><Icon name="workflow" size="medium" /> Process Mining Overview</h3>
      
      <div className={styles.processFlowDiagram}>
        <div className={styles.processStep}>
          <div className={styles.stepIcon} style={{ background: '#3498db' }}>
            <Icon name="document" size="medium" />
          </div>
          <div className={styles.stepLabel}>Order Received</div>
          <div className={styles.stepMetric}>Avg: 2.1h</div>
        </div>
        
        <div className={styles.processArrow}>→</div>
        
        <div className={styles.processStep}>
          <div className={styles.stepIcon} style={{ background: '#f39c12' }}>
            <Icon name="validate" size="medium" />
          </div>
          <div className={styles.stepLabel}>Validation</div>
          <div className={styles.stepMetric}>Avg: 0.8h</div>
        </div>
        
        <div className={styles.processArrow}>→</div>
        
        <div className={styles.processStep}>
          <div className={styles.stepIcon} style={{ background: '#8e44ad' }}>
            <Icon name="settings" size="medium" />
          </div>
          <div className={styles.stepLabel}>Processing</div>
          <div className={styles.stepMetric}>Avg: 1.2h</div>
        </div>
        
        <div className={styles.processArrow}>→</div>
        
        <div className={styles.processStep}>
          <div className={styles.stepIcon} style={{ background: '#27ae60' }}>
            <Icon name="accept" size="medium" />
          </div>
          <div className={styles.stepLabel}>Completed</div>
          <div className={styles.stepMetric}>87% SLA</div>
        </div>
      </div>

      <div className={styles.processMetricsGrid}>
        <div className={styles.processMetricCard}>
          <h4>Process Conformance</h4>
          <div className={styles.metricValue}>87%</div>
          <div className={styles.metricDetail}>of cases follow the happy path</div>
        </div>
        
        <div className={styles.processMetricCard}>
          <h4>Top Bottleneck</h4>
          <div className={styles.metricValue}>Validation → Processing</div>
          <div className={styles.metricDetail}>Avg wait time: 45 minutes</div>
        </div>
        
        <div className={styles.processMetricCard}>
          <h4>Automation Candidates</h4>
          <div className={styles.metricValue}>3 steps</div>
          <div className={styles.metricDetail}>identified for RPA implementation</div>
        </div>
      </div>

      <div className={styles.processNote}>
        <Icon name="lightbulb" size="small" /> 
        <span>Process mining data sourced from SAP Signavio Process Intelligence. 
        24 unique process variants detected with 6 variants accounting for 80% of all exceptions.</span>
      </div>
    </div>
  );
}

export default SignavioProcessFlow;



