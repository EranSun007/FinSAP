import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import styles from '../../styles/pages/CostBreakdown.module.css';

function CostBreakdownTable({ visibleRows, expandedIds, onToggleExpand }) {
  
  const getIcon = (level) => {
    const iconStyle = { width: '16px', height: '16px', display: 'block' };
    switch (level) {
      case 'Customer':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={iconStyle}>
            <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm-5 8a5 5 0 0110 0H3z"/>
          </svg>
        );
      case 'Global Account':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM6.5 5h3v1h-3V5zm0 2h3v1h-3V7zm0 2h3v1h-3V9z"/>
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        );
      case 'Datacenter':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="2" y="2" width="12" height="3" rx="1"/>
            <rect x="2" y="6" width="12" height="3" rx="1"/>
            <rect x="2" y="10" width="12" height="3" rx="1"/>
          </svg>
        );
      case 'Directory':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1 3a2 2 0 012-2h3.5a1 1 0 01.7.29L9 3h4a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V3z"/>
          </svg>
        );
      case 'Sub Account':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8" cy="8" r="2" fill="currentColor"/>
          </svg>
        );
      case 'Environment':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2h12v12H2V2zm2 2v8h8V4H4z"/>
          </svg>
        );
      case 'Service':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5a1.5 1.5 0 011.5 1.5v1.05a5.5 5.5 0 012.45 1.55l.96-.55a1.5 1.5 0 012.05 2.05l-.55.96a5.5 5.5 0 011.55 2.45H17a1.5 1.5 0 110 3h-1.05a5.5 5.5 0 01-1.55 2.45l.55.96a1.5 1.5 0 11-2.05 2.05l-.96-.55a5.5 5.5 0 01-2.45 1.55V17a1.5 1.5 0 11-3 0v-1.05a5.5 5.5 0 01-2.45-1.55l-.96.55a1.5 1.5 0 11-2.05-2.05l.55-.96A5.5 5.5 0 011.05 10H0a1.5 1.5 0 110-3h1.05a5.5 5.5 0 011.55-2.45l-.55-.96a1.5 1.5 0 112.05-2.05l.96.55A5.5 5.5 0 016.5 4.05V3A1.5 1.5 0 018 1.5zM8 6a2 2 0 100 4 2 2 0 000-4z"/>
          </svg>
        );
      case 'Instance':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="3" y="3" width="10" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8" cy="8" r="2" fill="currentColor"/>
          </svg>
        );
      case 'Application':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0v12h8V2H4z"/>
            <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
          </svg>
        );
      case 'Business AI':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 10h8s-1 3-4 3-4-3-4-3z"/>
          </svg>
        );
      case 'Package':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1L1 4v8l7 3 7-3V4L8 1zm0 1.5L13 5 8 7.5 3 5l5-2.5zM2 5.8l5 2.5v5.9l-5-2.2V5.8zm6 8.4V8.3l5-2.5v6l-5 2.4z"/>
          </svg>
        );
      case 'Feature':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5l-4.9 2.5.9-5.3-4-3.9L5.5 5 8 0z"/>
          </svg>
        );
      case 'User':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="4" r="3"/>
            <path d="M8 8c-3 0-5 2-5 4v2h10v-2c0-2-2-4-5-4z"/>
          </svg>
        );
      case 'Users':
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="5" cy="4" r="2.5"/>
            <circle cx="11" cy="4" r="2.5"/>
            <path d="M5 7c-2.5 0-4 1.5-4 3v2h8v-2c0-1.5-1.5-3-4-3z"/>
            <path d="M11 7c-1 0-1.8.3-2.5.8.5.7.8 1.5.8 2.2v2h5v-2c0-1.5-1.5-3-3.3-3z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const formatCurrency = (value, currency) => {
    if (value === null || value === undefined) return '';
    return `${parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
  };

  const formatDelta = (value, currency) => {
    if (value === null || value === undefined) return '';
    const sign = value >= 0 ? '' : '';
    return `${sign}${parseFloat(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
  };

  const formatPercentage = (value) => {
    if (value === null || value === undefined) return '';
    return `${value} %`;
  };

  const handleServiceClick = (row) => {
    // Placeholder for service detail view
    console.log('View services for:', row.name);
  };

  return (
    <div className={styles.tableWrapper}>
      <Table className={styles.costBreakdownTable}>
        <TableHead>
          <TableRow>
            <TableHeader style={{ minWidth: '300px' }}>Hierarchy</TableHeader>
            <TableHeader align="center" style={{ width: '80px' }}>Exclude</TableHeader>
            <TableHeader style={{ width: '100px' }}>Lifecycle</TableHeader>
            <TableHeader style={{ width: '130px' }}>Date</TableHeader>
            <TableHeader style={{ width: '100px' }}>Services</TableHeader>
            <TableHeader align="right" style={{ width: '120px' }}>Cost</TableHeader>
            <TableHeader align="right" style={{ width: '120px' }}>Delta Cost</TableHeader>
            <TableHeader align="right" style={{ width: '100px' }}>Delta Cost %</TableHeader>
            <TableHeader align="right" style={{ width: '140px' }}>Forecasted Cost</TableHeader>
            <TableHeader align="right" style={{ width: '140px' }}>Delta Forecasted ...</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            <TableRow 
              key={row.id}
              className={styles.treeRow}
            >
              <TableCell>
                <div 
                  className={styles.hierarchyCell}
                  style={{ paddingLeft: `${row.depth * 20}px` }}
                >
                  {row.hasChildren ? (
                    <button
                      className={styles.expandButton}
                      onClick={() => onToggleExpand(row.id)}
                      title={expandedIds.has(row.id) ? 'Collapse' : 'Expand'}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        {expandedIds.has(row.id) ? (
                          <path d="M6 8L2 4h8L6 8z"/>
                        ) : (
                          <path d="M4 2l4 4-4 4V2z"/>
                        )}
                      </svg>
                    </button>
                  ) : (
                    <span className={styles.noExpand}></span>
                  )}
                  <span className={styles.hierarchyIcon}>
                    {getIcon(row.level)}
                  </span>
                  <span className={styles.hierarchyName}>
                    <span className={styles.hierarchyLevel}>{row.level}:</span> {row.name}
                  </span>
                </div>
              </TableCell>
              <TableCell align="center">
                {row.exclude}
              </TableCell>
              <TableCell>
                {row.lifecycle}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.services && (
                  <button
                    className={styles.servicesLink}
                    onClick={() => handleServiceClick(row)}
                  >
                    {row.services.label}
                  </button>
                )}
              </TableCell>
              <TableCell align="right" className={styles.costCell}>
                {formatCurrency(row.cost, row.currency)}
              </TableCell>
              <TableCell align="right" className={styles.deltaCostCell}>
                <span className={row.deltaCost > 0 ? styles.deltaPositive : row.deltaCost < 0 ? styles.deltaNegative : ''}>
                  {formatDelta(row.deltaCost, row.currency)}
                </span>
              </TableCell>
              <TableCell align="right">
                {formatPercentage(row.deltaCostPct)}
              </TableCell>
              <TableCell align="right" className={styles.costCell}>
                {formatCurrency(row.forecastedCost, row.currency)}
              </TableCell>
              <TableCell align="right" className={styles.deltaCostCell}>
                <span className={row.deltaForecasted > 0 ? styles.deltaPositive : row.deltaForecasted < 0 ? styles.deltaNegative : ''}>
                  {formatDelta(row.deltaForecasted, row.currency)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CostBreakdownTable;

