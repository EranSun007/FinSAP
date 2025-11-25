import Icon from '../../components/ui/Icon';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import styles from '../../styles/pages/CostBreakdown.module.css';

function CostBreakdownTable({ visibleRows, expandedIds, onToggleExpand }) {
  
  const getIconName = (level) => {
    switch (level) {
      case 'Customer':
        return 'customer';
      case 'Global Account':
        return 'globe';
      case 'Datacenter':
        return 'inventory';
      case 'Directory':
        return 'folder-blank';
      case 'Sub Account':
        return 'account';
      case 'Environment':
        return 'cloud';
      case 'Service':
        return 'it-system';
      case 'Instance':
        return 'instance';
      case 'Application':
        return 'app';
      case 'Business AI':
        return 'machine-learning';
      case 'Package':
        return 'product';
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
      case 'Space':
        return 'spaces';
      default:
        return 'product';
    }
  };
  
  const getIcon = (level) => {
    return <Icon name={getIconName(level)} size="medium" />;
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
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '6%' }} />
          <col style={{ width: '8%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '8%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '8%' }} />
          <col style={{ width: '6%' }} />
          <col style={{ width: '8%' }} />
          <col style={{ width: '6%' }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableHeader>Hierarchy</TableHeader>
            <TableHeader align="center">Exclude</TableHeader>
            <TableHeader>Lifecycle</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Services</TableHeader>
            <TableHeader align="right">Cost</TableHeader>
            <TableHeader align="right">Delta Cost</TableHeader>
            <TableHeader align="right">Delta Cost %</TableHeader>
            <TableHeader align="right">Forecasted Cost</TableHeader>
            <TableHeader align="right">Delta Forecasted</TableHeader>
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

