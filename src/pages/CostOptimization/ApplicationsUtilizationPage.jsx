import Card, { CardHeader } from '../../components/ui/Card';
import ApplicationsUtilization from './ApplicationsUtilization';
import styles from '../../styles/pages/CostOptimization.module.css';

function ApplicationsUtilizationPage() {
  return (
    <div className={styles.costOptimization}>
      <Card className={styles.mainCard}>
        <CardHeader title="Applications Utilization" />
        <div className={styles.content}>
          <ApplicationsUtilization />
        </div>
      </Card>
    </div>
  );
}

export default ApplicationsUtilizationPage;

