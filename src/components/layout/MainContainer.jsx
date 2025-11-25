import { lazy, Suspense } from 'react';
import styles from '../../styles/components/MainContainer.module.css';

// Lazy load pages
const Overview = lazy(() => import('../../pages/Overview'));
const Harvesting = lazy(() => import('../../pages/Harvesting'));
const PaPM = lazy(() => import('../../pages/PaPM'));
const ServiceAndAssetManager = lazy(() => import('../../pages/ServiceAndAssetManager'));
const Signavio = lazy(() => import('../../pages/Signavio'));
const SACDashboard = lazy(() => import('../../pages/SACDashboard'));
const ServiceManager = lazy(() => import('../../pages/BillingVerification/ServiceManager'));
const CostBreakdown = lazy(() => import('../../pages/CostBreakdown'));

function MainContainer({ activeView }) {
  const renderPage = () => {
    switch (activeView) {
      case 'overview':
        return <Overview />;
      case 'harvesting':
        return <Harvesting />;
      case 'papm':
        return <PaPM />;
      case 'sam':
        return <ServiceAndAssetManager />;
      case 'signavio':
        return <Signavio />;
      case 'sac':
        return <SACDashboard />;
      case 'service-manager':
        return <ServiceManager />;
      case 'cost-breakdown':
        return <CostBreakdown />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}

export default MainContainer;

