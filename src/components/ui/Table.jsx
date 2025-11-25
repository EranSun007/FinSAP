import styles from '../../styles/components/Table.module.css';

export function Table({ children, className = '' }) {
  return (
    <div className={styles.tableContainer}>
      <table className={`${styles.table} ${className}`}>
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children }) {
  return <thead>{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children, onClick, selected = false, className = '' }) {
  const rowClasses = `${selected ? styles.selected : ''} ${className}`;
  return (
    <tr className={rowClasses} onClick={onClick}>
      {children}
    </tr>
  );
}

export function TableHeader({ children, align = 'left', style }) {
  return (
    <th style={{ textAlign: align, ...style }}>
      {children}
    </th>
  );
}

export function TableCell({ children, align = 'left', style, className = '' }) {
  return (
    <td style={{ textAlign: align, ...style }} className={className}>
      {children}
    </td>
  );
}

