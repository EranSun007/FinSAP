import PropTypes from 'prop-types';
import Dropdown, { DropdownItem } from '../ui/Dropdown';
import { navigationConfig } from '../../config/navigation.config';
import styles from '../../styles/components/Navigation.module.css';

function Navigation({ activeView, onNavigate, isJouleOpen, onToggleJoule}) {
  return (
    <nav className={styles.navBar}>
      {navigationConfig.map((item) => {
        // Handle dropdown navigation items
        if (item.type === 'dropdown') {
          return (
            <Dropdown key={item.id} label={item.label}>
              {item.items.map((dropdownItem) => (
                <DropdownItem
                  key={dropdownItem.id}
                  onClick={() => onNavigate(dropdownItem.id)}
                >
                  {dropdownItem.label}
                </DropdownItem>
              ))}
            </Dropdown>
          );
        }

        // Handle Joule special case (slide-in chat panel)
        if (item.type === 'special' && item.id === 'joule') {
          return (
            <a
              key={item.id}
              className={`${styles.navItem} ${styles.jouleButton} ${isJouleOpen ? styles.active : ''}`}
              onClick={onToggleJoule}
            >
              {item.label}
            </a>
          );
        }

        // Handle direct navigation items
        return (
          <a
            key={item.id}
            className={`${styles.navItem} ${activeView === item.id ? styles.active : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

Navigation.propTypes = {
  activeView: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  isJouleOpen: PropTypes.bool.isRequired,
  onToggleJoule: PropTypes.func.isRequired
};

export default Navigation;

