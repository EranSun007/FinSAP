/**
 * Navigation Configuration
 *
 * Single source of truth for all navigation items in the application.
 * When adding a new feature:
 * 1. Add the view constant in constants/views.js
 * 2. Add the navigation item here
 * 3. Add the route in routes.config.js
 * 4. Create your page component
 */

import { VIEWS, NAV_GROUPS } from '../constants/views';

export const navigationConfig = [
  {
    id: VIEWS.OVERVIEW,
    label: 'Overview',
    type: 'direct'
  },
  {
    id: NAV_GROUPS.SAAS_SUBSCRIPTIONS,
    label: 'SaaS Subscriptions',
    type: 'dropdown',
    items: [
      { id: VIEWS.SAM, label: 'Service and Asset Manager' },
      { id: VIEWS.PAPM, label: 'Profit and performance management' },
      { id: VIEWS.SIGNAVIO, label: 'Signavio' },
      { id: VIEWS.SAC, label: 'SAP Analytics Cloud' },
      { id: VIEWS.HARVESTING, label: 'Harvesting' },
    ]
  },
  {
    id: NAV_GROUPS.BILLING_VERIFICATION,
    label: 'Billing Verification',
    type: 'dropdown',
    items: [
      { id: VIEWS.SERVICE_MANAGER, label: 'Service Manager' },
      { id: VIEWS.INVOICES, label: 'Invoices' },
      { id: VIEWS.PAYMENT_HISTORY, label: 'Payment History' },
    ]
  },
  {
    id: VIEWS.COST_BREAKDOWN,
    label: 'Cost Breakdown',
    type: 'direct'
  },
  {
    id: NAV_GROUPS.CREDIT_EXPENDITURE,
    label: 'Credit Expenditure',
    type: 'dropdown',
    items: [
      { id: VIEWS.USAGE_HISTORY, label: 'Usage History' },
      { id: VIEWS.FORECAST, label: 'Forecast' },
    ]
  },
  {
    id: NAV_GROUPS.CROSS_CHARGING,
    label: 'Cross Charging',
    type: 'dropdown',
    items: [
      { id: VIEWS.INTERNAL_BILLING, label: 'Internal Billing' },
      { id: VIEWS.REPORTS, label: 'Reports' },
    ]
  },
  {
    id: VIEWS.MONITORING_ALERTING,
    label: 'Monitoring & Alerting',
    type: 'direct'
  },
  {
    id: VIEWS.COST_OPTIMIZATION,
    label: 'Cost Optimization',
    type: 'direct'
  },
  {
    id: VIEWS.JOULE,
    label: 'Joule',
    type: 'special' // Special handling for Joule chat panel
  },
];
