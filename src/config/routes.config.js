/**
 * Routes Configuration
 *
 * Maps view IDs to their corresponding page components.
 * Uses lazy loading for optimal performance.
 *
 * When adding a new page:
 * 1. Add the view constant in constants/views.js
 * 2. Import the component with lazy()
 * 3. Add it to the routes object using the view constant
 * 4. Specify which props the component needs
 */

import { lazy } from 'react';
import { VIEWS, getDefaultView as getDefaultViewFromConstants } from '../constants/views';

// Lazy load all page components
// All pages now follow consistent structure: pages/[PageName]/index.jsx
const Overview = lazy(() => import('../pages/Overview'));
const Harvesting = lazy(() => import('../pages/Harvesting'));
const PaPM = lazy(() => import('../pages/PaPM'));
const ServiceAndAssetManager = lazy(() => import('../pages/ServiceAndAssetManager'));
const Signavio = lazy(() => import('../pages/Signavio'));
const SACDashboard = lazy(() => import('../pages/SACDashboard'));
const ServiceManager = lazy(() => import('../pages/ServiceManager'));
const CostBreakdown = lazy(() => import('../pages/CostBreakdown'));
const ServiceDetails = lazy(() => import('../pages/ServiceDetails'));
const RightsizingOptimization = lazy(() => import('../pages/CostOptimization/RightsizingPage'));
const ApplicationsUtilization = lazy(() => import('../pages/CostOptimization/ApplicationsUtilizationPage'));

/**
 * Routes map view IDs to components and their required props
 */
export const routes = {
  [VIEWS.OVERVIEW]: {
    component: Overview,
    requiresProps: ['onNavigate', 'onServiceSelect']
  },
  [VIEWS.HARVESTING]: {
    component: Harvesting,
    requiresProps: []
  },
  [VIEWS.PAPM]: {
    component: PaPM,
    requiresProps: []
  },
  [VIEWS.SAM]: {
    component: ServiceAndAssetManager,
    requiresProps: []
  },
  [VIEWS.SIGNAVIO]: {
    component: Signavio,
    requiresProps: []
  },
  [VIEWS.SAC]: {
    component: SACDashboard,
    requiresProps: []
  },
  [VIEWS.SERVICE_MANAGER]: {
    component: ServiceManager,
    requiresProps: []
  },
  [VIEWS.COST_BREAKDOWN]: {
    component: CostBreakdown,
    requiresProps: []
  },
  [VIEWS.SERVICE_DETAILS]: {
    component: ServiceDetails,
    requiresProps: ['serviceId']
  },
  [VIEWS.RIGHTSIZING]: {
    component: RightsizingOptimization,
    requiresProps: []
  },
  [VIEWS.APPLICATIONS_UTILIZATION]: {
    component: ApplicationsUtilization,
    requiresProps: []
  }
};

/**
 * Get the default/fallback view
 */
export const getDefaultView = getDefaultViewFromConstants;

/**
 * Check if a view ID is valid
 */
export const isValidView = (viewId) => {
  return Object.keys(routes).includes(viewId);
};
