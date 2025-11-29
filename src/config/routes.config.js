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

// Main pages
const Overview = lazy(() => import('../pages/Overview'));

// SaaS Subscriptions - S/4
const ServiceAndAssetManager = lazy(() => import('../pages/ServiceAndAssetManager'));
const PaPM = lazy(() => import('../pages/PaPM'));

// SaaS Subscriptions - BTP
const BTPDashboard = lazy(() => import('../pages/BTP'));
const WorkZoneDetails = lazy(() => import('../pages/WorkZoneDetails'));
const AICore = lazy(() => import('../pages/AICore'));
const HANACloud = lazy(() => import('../pages/HANACloud'));

// SaaS Subscriptions - Other
const SACDashboard = lazy(() => import('../pages/SACDashboard'));
const Signavio = lazy(() => import('../pages/Signavio'));
const Harvesting = lazy(() => import('../pages/Harvesting'));

// Billing Verification
const ServiceManager = lazy(() => import('../pages/ServiceManager'));
const TechnicalAllocation = lazy(() => import('../pages/TechnicalAllocation'));

// Cost Breakdown
const CostBreakdown = lazy(() => import('../pages/CostBreakdown'));
const CostBreakdownDaily = lazy(() => import('../pages/CostBreakdownDaily'));
const CostBreakdownMonthly = lazy(() => import('../pages/CostBreakdownMonthly'));

// Credit Expenditure
const CreditsConsumption = lazy(() => import('../pages/CreditsConsumption'));
const CreditProjection = lazy(() => import('../pages/CreditProjection'));

// Cross Charging
const ManageTags = lazy(() => import('../pages/ManageTags'));
const CostByTagsDaily = lazy(() => import('../pages/CostByTagsDaily'));
const CostByTagsMonthly = lazy(() => import('../pages/CostByTagsMonthly'));
const DashboardDaily = lazy(() => import('../pages/DashboardDaily'));
const DashboardMonthly = lazy(() => import('../pages/DashboardMonthly'));

// Other
const ServiceDetails = lazy(() => import('../pages/ServiceDetails'));

// Cost Optimization
const RightsizingOptimization = lazy(() => import('../pages/CostOptimization/RightsizingPage'));
const ApplicationsUtilization = lazy(() => import('../pages/CostOptimization/ApplicationsUtilizationPage'));

/**
 * Routes map view IDs to components and their required props
 */
export const routes = {
  // Main pages
  [VIEWS.OVERVIEW]: {
    component: Overview,
    requiresProps: ['onNavigate', 'onServiceSelect']
  },

  // SaaS Subscriptions - S/4
  [VIEWS.SAM]: {
    component: ServiceAndAssetManager,
    requiresProps: []
  },
  [VIEWS.PAPM]: {
    component: PaPM,
    requiresProps: []
  },

  // SaaS Subscriptions - BTP
  [VIEWS.BTP]: {
    component: BTPDashboard,
    requiresProps: ['onNavigate']
  },
  [VIEWS.WORKZONE_DETAILS]: {
    component: WorkZoneDetails,
    requiresProps: ['onNavigate']
  },
  [VIEWS.AI_CORE]: {
    component: AICore,
    requiresProps: []
  },
  [VIEWS.HANA_CLOUD]: {
    component: HANACloud,
    requiresProps: []
  },

  // SaaS Subscriptions - Other
  [VIEWS.SAC]: {
    component: SACDashboard,
    requiresProps: []
  },
  [VIEWS.SIGNAVIO]: {
    component: Signavio,
    requiresProps: []
  },
  [VIEWS.HARVESTING]: {
    component: Harvesting,
    requiresProps: []
  },

  // Billing Verification
  [VIEWS.SERVICE_MANAGER]: {
    component: ServiceManager,
    requiresProps: []
  },
  [VIEWS.TECHNICAL_ALLOCATION]: {
    component: TechnicalAllocation,
    requiresProps: []
  },

  // Cost Breakdown
  [VIEWS.COST_BREAKDOWN]: {
    component: CostBreakdown,
    requiresProps: []
  },
  [VIEWS.COST_BREAKDOWN_DAILY]: {
    component: CostBreakdownDaily,
    requiresProps: []
  },
  [VIEWS.COST_BREAKDOWN_MONTHLY]: {
    component: CostBreakdownMonthly,
    requiresProps: []
  },

  // Credit Expenditure
  [VIEWS.CREDITS_CONSUMPTION]: {
    component: CreditsConsumption,
    requiresProps: []
  },
  [VIEWS.CREDIT_PROJECTION]: {
    component: CreditProjection,
    requiresProps: []
  },

  // Cross Charging
  [VIEWS.MANAGE_TAGS]: {
    component: ManageTags,
    requiresProps: []
  },
  [VIEWS.COST_BY_TAGS_DAILY]: {
    component: CostByTagsDaily,
    requiresProps: []
  },
  [VIEWS.COST_BY_TAGS_MONTHLY]: {
    component: CostByTagsMonthly,
    requiresProps: []
  },
  [VIEWS.DASHBOARD_DAILY]: {
    component: DashboardDaily,
    requiresProps: []
  },
  [VIEWS.DASHBOARD_MONTHLY]: {
    component: DashboardMonthly,
    requiresProps: []
  },

  // Other
  [VIEWS.SERVICE_DETAILS]: {
    component: ServiceDetails,
    requiresProps: ['serviceId']
  },

  // Cost Optimization
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
