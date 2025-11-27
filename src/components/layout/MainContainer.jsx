import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { routes, getDefaultView } from '../../config/routes.config';
import styles from '../../styles/components/MainContainer.module.css';

function MainContainer({ activeView, onNavigate, selectedService, onServiceSelect }) {
  const renderPage = () => {
    // Get the route configuration for the active view
    const route = routes[activeView] || routes[getDefaultView()];

    if (!route) {
      // Fallback to default view if route not found
      const defaultRoute = routes[getDefaultView()];
      const DefaultComponent = defaultRoute.component;
      return <DefaultComponent onNavigate={onNavigate} onServiceSelect={onServiceSelect} />;
    }

    const PageComponent = route.component;

    // Build props object based on what the component needs
    const props = {};

    if (route.requiresProps.includes('onNavigate')) {
      props.onNavigate = onNavigate;
    }

    if (route.requiresProps.includes('onServiceSelect')) {
      props.onServiceSelect = onServiceSelect;
    }

    if (route.requiresProps.includes('serviceId')) {
      props.serviceId = selectedService;
    }

    return <PageComponent {...props} />;
  };

  return (
    <div className={styles.mainContainer}>
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}

MainContainer.propTypes = {
  activeView: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  selectedService: PropTypes.string,
  onServiceSelect: PropTypes.func.isRequired
};

MainContainer.defaultProps = {
  selectedService: null
};

export default MainContainer;

