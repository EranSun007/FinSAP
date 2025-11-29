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
      // S/4 Submenu
      {
        id: NAV_GROUPS.S4,
        label: 'S/4',
        type: 'submenu',
        items: [
          { id: VIEWS.SAM, label: 'Service and Asset Manager' },
          { id: VIEWS.PAPM, label: 'Profit and Performance Management' },
        ]
      },
      // BTP Submenu
      {
        id: NAV_GROUPS.BTP_SUBMENU,
        label: 'Business Technology Platform',
        type: 'submenu',
        items: [
          { id: VIEWS.BTP, label: 'BTP Overview' },
          { id: VIEWS.WORKZONE_DETAILS, label: 'Work Zone' },
          { id: VIEWS.HANA_CLOUD, label: 'HANA Cloud' },
        ]
      },
      // Direct items
      { id: VIEWS.SAC, label: 'SAP Analytics Cloud' },
      { id: VIEWS.SIGNAVIO, label: 'Signavio' },
      // Separator
      { type: 'separator' },
      { id: VIEWS.HARVESTING, label: 'Harvesting' },
    ]
  },
  {
    id: NAV_GROUPS.BILLING_VERIFICATION,
    label: 'Billing Verification',
    type: 'dropdown',
    items: [
      { id: VIEWS.SERVICE_MANAGER, label: 'Service Manager' },
      { id: VIEWS.TECHNICAL_ALLOCATION, label: 'Technical Allocation Dashboard' },
    ]
  },
  {
    id: NAV_GROUPS.COST_BREAKDOWN,
    label: 'Cost Breakdown',
    type: 'dropdown',
    items: [
      { id: VIEWS.COST_BREAKDOWN_DAILY, label: 'Daily' },
      { id: VIEWS.COST_BREAKDOWN_MONTHLY, label: 'Monthly' },
    ]
  },
  {
    id: NAV_GROUPS.CREDIT_EXPENDITURE,
    label: 'Credit Expenditure',
    type: 'dropdown',
    items: [
      { id: VIEWS.CREDITS_CONSUMPTION, label: 'Credits Consumption' },
      { id: VIEWS.CREDIT_PROJECTION, label: 'Credit Projection' },
    ]
  },
  {
    id: NAV_GROUPS.CROSS_CHARGING,
    label: 'Cross Charging',
    type: 'dropdown',
    items: [
      { id: VIEWS.MANAGE_TAGS, label: 'Manage Tags' },
      { id: VIEWS.COST_BY_TAGS_DAILY, label: 'Cost By Tags - Daily' },
      { id: VIEWS.COST_BY_TAGS_MONTHLY, label: 'Cost By Tags - Monthly' },
      { id: VIEWS.DASHBOARD_DAILY, label: 'Dashboard - Daily' },
      { id: VIEWS.DASHBOARD_MONTHLY, label: 'Dashboard - Monthly' },
    ]
  },
  {
    id: VIEWS.MONITORING_ALERTING,
    label: 'Monitoring & Alerting',
    type: 'direct'
  },
  {
    id: NAV_GROUPS.COST_OPTIMIZATION,
    label: 'Cost Optimization',
    type: 'dropdown',
    items: [
      { id: VIEWS.RIGHTSIZING, label: 'Rightsizing & Waste Optimization' },
      { id: VIEWS.APPLICATIONS_UTILIZATION, label: 'Applications Utilization' },
    ]
  },
  {
    id: VIEWS.JOULE,
    label: 'Joule',
    type: 'special' // Special handling for Joule chat panel
  },
];
