import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/SAC.module.css';

function SACStorySummary() {
  return (
    <div className={styles.sacStorySummary}>
      <h3><Icon name="business-objects-experience" size="medium" /> Content Overview</h3>
      
      <div className={styles.contentBreakdown}>
        <div className={styles.contentSection}>
          <h4>Top 5 Most Viewed Stories</h4>
          <div className={styles.storyList}>
            <div className={styles.storyItem}>
              <span className={styles.storyRank}>1</span>
              <div className={styles.storyInfo}>
                <div className={styles.storyName}>Executive Sales Dashboard</div>
                <div className={styles.storyViews}>2,847 views</div>
              </div>
              <div className={styles.storyBar} style={{ width: '100%' }}></div>
            </div>
            <div className={styles.storyItem}>
              <span className={styles.storyRank}>2</span>
              <div className={styles.storyInfo}>
                <div className={styles.storyName}>Financial Performance Overview</div>
                <div className={styles.storyViews}>2,234 views</div>
              </div>
              <div className={styles.storyBar} style={{ width: '78%' }}></div>
            </div>
            <div className={styles.storyItem}>
              <span className={styles.storyRank}>3</span>
              <div className={styles.storyInfo}>
                <div className={styles.storyName}>Operations KPI Monitor</div>
                <div className={styles.storyViews}>1,892 views</div>
              </div>
              <div className={styles.storyBar} style={{ width: '66%' }}></div>
            </div>
            <div className={styles.storyItem}>
              <span className={styles.storyRank}>4</span>
              <div className={styles.storyInfo}>
                <div className={styles.storyName}>HR Analytics Report</div>
                <div className={styles.storyViews}>1,456 views</div>
              </div>
              <div className={styles.storyBar} style={{ width: '51%' }}></div>
            </div>
            <div className={styles.storyItem}>
              <span className={styles.storyRank}>5</span>
              <div className={styles.storyInfo}>
                <div className={styles.storyName}>Supply Chain Insights</div>
                <div className={styles.storyViews}>1,203 views</div>
              </div>
              <div className={styles.storyBar} style={{ width: '42%' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h4>Content Type Distribution</h4>
          <div className={styles.contentTypeGrid}>
            <div className={styles.contentTypeCard}>
              <div className={styles.contentTypeIcon} style={{ background: '#0070f2' }}>
                <Icon name="document" size="medium" />
              </div>
              <div className={styles.contentTypeValue}>186</div>
              <div className={styles.contentTypeLabel}>Stories</div>
              <div className={styles.contentTypePct}>66%</div>
            </div>
            <div className={styles.contentTypeCard}>
              <div className={styles.contentTypeIcon} style={{ background: '#188918' }}>
                <Icon name="collaborate" size="medium" />
              </div>
              <div className={styles.contentTypeValue}>52</div>
              <div className={styles.contentTypeLabel}>Analytic Apps</div>
              <div className={styles.contentTypePct}>19%</div>
            </div>
            <div className={styles.contentTypeCard}>
              <div className={styles.contentTypeIcon} style={{ background: '#925ace' }}>
                <Icon name="screen-split-three" size="medium" />
              </div>
              <div className={styles.contentTypeValue}>28</div>
              <div className={styles.contentTypeLabel}>Digital Boardroom</div>
              <div className={styles.contentTypePct}>10%</div>
            </div>
            <div className={styles.contentTypeCard}>
              <div className={styles.contentTypeIcon} style={{ background: '#d97706' }}>
                <Icon name="calendar" size="medium" />
              </div>
              <div className={styles.contentTypeValue}>14</div>
              <div className={styles.contentTypeLabel}>Planning Models</div>
              <div className={styles.contentTypePct}>5%</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.summaryNote}>
        <Icon name="lightbulb" size="small" /> 
        <span>Content usage data sourced from SAP Analytics Cloud activity logs. 
        Executive dashboards drive 45% of total views. Consider expanding self-service story creation to reduce IT bottlenecks.</span>
      </div>
    </div>
  );
}

export default SACStorySummary;



