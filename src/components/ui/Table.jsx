import PropTypes from 'prop-types';
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

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Table.defaultProps = {
  className: ''
};

export function TableHead({ children }) {
  return <thead>{children}</thead>;
}

TableHead.propTypes = {
  children: PropTypes.node.isRequired
};

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export function TableRow({ children, onClick, selected = false, className = '' }) {
  const rowClasses = `${selected ? styles.selected : ''} ${className}`;
  return (
    <tr className={rowClasses} onClick={onClick}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  className: PropTypes.string
};

TableRow.defaultProps = {
  onClick: undefined,
  selected: false,
  className: ''
};

export function TableHeader({ children, align = 'left', style }) {
  return (
    <th style={{ textAlign: align, ...style }}>
      {children}
    </th>
  );
}

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object
};

TableHeader.defaultProps = {
  align: 'left',
  style: undefined
};

export function TableCell({ children, align = 'left', style, className = '' }) {
  return (
    <td style={{ textAlign: align, ...style }} className={className}>
      {children}
    </td>
  );
}

TableCell.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object,
  className: PropTypes.string
};

TableCell.defaultProps = {
  children: null,
  align: 'left',
  style: undefined,
  className: ''
};

