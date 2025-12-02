import Card, { CardHeader } from '../../components/ui/Card';
import RightsizingOptimization from './RightsizingOptimization';
import styles from '../../styles/pages/CostOptimization.module.css';

function RightsizingPage() {
  return (
    <div className={styles.costOptimization}>
      <Card className={styles.mainCard}>
        <CardHeader title="Rightsizing & Waste Optimization" />
        <div className={styles.content}>
          <RightsizingOptimization />
        </div>
      </Card>
    </div>
  );
}

export default RightsizingPage;



