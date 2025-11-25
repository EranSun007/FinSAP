import { useState } from 'react';
import styles from '../../styles/components/Dropdown.module.css';

function Dropdown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className={styles.dropdownLabel}>{label} ▼</span>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({ children, onClick }) {
  return (
    <a className={styles.dropdownItem} onClick={onClick}>
      {children}
    </a>
  );
}

export default Dropdown;

