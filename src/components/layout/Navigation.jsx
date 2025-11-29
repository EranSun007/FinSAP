import PropTypes from 'prop-types';
import Dropdown, { DropdownItem, DropdownSubmenu, DropdownSeparator } from '../ui/Dropdown';
import { navigationConfig } from '../../config/navigation.config';
import styles from '../../styles/components/Navigation.module.css';

/**
 * Render dropdown items recursively (supports submenus and separators)
 */
function renderDropdownItems(items, onNavigate) {
  return items.map((item, index) => {
    // Handle separator
    if (item.type === 'separator') {
      return <DropdownSeparator key={`separator-${index}`} />;
    }

    // Handle submenu
    if (item.type === 'submenu') {
      return (
        <DropdownSubmenu key={item.id} label={item.label}>
          {item.items.map((subItem) => (
            <DropdownItem
              key={subItem.id}
              onClick={() => onNavigate(subItem.id)}
            >
              {subItem.label}
            </DropdownItem>
          ))}
        </DropdownSubmenu>
      );
    }

    // Handle regular dropdown item
    return (
      <DropdownItem
        key={item.id}
        onClick={() => onNavigate(item.id)}
      >
        {item.label}
      </DropdownItem>
    );
  });
}

function Navigation({ activeView, onNavigate, isJouleOpen, onToggleJoule}) {
  return (
    <nav className={styles.navBar}>
      {navigationConfig.map((item) => {
        // Handle dropdown navigation items
        if (item.type === 'dropdown') {
          return (
            <Dropdown key={item.id} label={item.label}>
              {renderDropdownItems(item.items, onNavigate)}
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
