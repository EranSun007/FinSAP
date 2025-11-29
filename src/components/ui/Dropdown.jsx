import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import styles from '../../styles/components/Dropdown.module.css';

function Dropdown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className={styles.dropdownLabel}>
        {label} <Icon name="slim-arrow-down" size="small" />
      </span>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export function DropdownItem({ children, onClick }) {
  return (
    <a className={styles.dropdownItem} onClick={onClick}>
      {children}
    </a>
  );
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export function DropdownSubmenu({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.submenu}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.submenuLabel}>
        {label}
        <Icon name="chevron-right" size="small" />
      </div>
      {isOpen && (
        <div className={styles.submenuContent}>
          {children}
        </div>
      )}
    </div>
  );
}

DropdownSubmenu.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export function DropdownSeparator() {
  return <div className={styles.separator} />;
}

export default Dropdown;
