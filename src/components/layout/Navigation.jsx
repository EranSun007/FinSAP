import Dropdown, { DropdownItem } from '../ui/Dropdown';
import styles from '../../styles/components/Navigation.module.css';

function Navigation({ activeView, onNavigate }) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    {
      id: 'saas-subscriptions',
      label: 'SaaS Subscriptions',
      dropdown: [
        { id: 'sam', label: 'Service and Asset Manager' },
        { id: 'papm', label: 'Profit and performance management' },
        { id: 'signavio', label: 'Signavio' },
        { id: 'sac', label: 'SAP Analytics Cloud' },
        { id: 'harvesting', label: 'Harvesting' },
      ]
    },
    {
      id: 'billing-verification',
      label: 'Billing Verification',
      dropdown: [
        { id: 'invoices', label: 'Invoices' },
        { id: 'payment-history', label: 'Payment History' },
      ]
    },
    {
      id: 'cost-breakdown',
      label: 'Cost Breakdown',
      dropdown: [
        { id: 'by-service', label: 'By Service' },
        { id: 'by-region', label: 'By Region' },
        { id: 'by-cost-center', label: 'By Cost Center' },
      ]
    },
    {
      id: 'credit-expenditure',
      label: 'Credit Expenditure',
      dropdown: [
        { id: 'usage-history', label: 'Usage History' },
        { id: 'forecast', label: 'Forecast' },
      ]
    },
    {
      id: 'cross-charging',
      label: 'Cross Charging',
      dropdown: [
        { id: 'internal-billing', label: 'Internal Billing' },
        { id: 'reports', label: 'Reports' },
      ]
    },
    { id: 'monitoring-alerting', label: 'Monitoring & Alerting' },
    { id: 'cost-optimization', label: 'Cost Optimization' },
    { id: 'joule', label: 'Joule' },
  ];

  return (
    <nav className={styles.navBar}>
      {navItems.map((item) =>
        item.dropdown ? (
          <Dropdown key={item.id} label={item.label}>
            {item.dropdown.map((dropdownItem) => (
              <DropdownItem
                key={dropdownItem.id}
                onClick={() => onNavigate(dropdownItem.id)}
              >
                {dropdownItem.label}
              </DropdownItem>
            ))}
          </Dropdown>
        ) : (
          <a
            key={item.id}
            className={`${styles.navItem} ${activeView === item.id ? styles.active : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}

export default Navigation;

