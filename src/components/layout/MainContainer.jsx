import { lazy, Suspense } from 'react';
import styles from '../../styles/components/MainContainer.module.css';

// Lazy load pages
const Overview = lazy(() => import('../../pages/Overview'));
const Harvesting = lazy(() => import('../../pages/Harvesting'));
const PaPM = lazy(() => import('../../pages/PaPM'));
const ServiceAndAssetManager = lazy(() => import('../../pages/ServiceAndAssetManager'));
const Signavio = lazy(() => import('../../pages/Signavio'));
const SACDashboard = lazy(() => import('../../pages/SACDashboard'));

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

