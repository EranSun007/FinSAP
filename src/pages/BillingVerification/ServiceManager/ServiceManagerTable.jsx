import { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../../components/ui/Table';
import ProgressBar from '../../../components/ui/ProgressBar';
import styles from '../../../styles/pages/ServiceManager.module.css';

function ServiceManagerTable({ data, loading }) {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(data.map(item => item.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedData = () => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;
      
      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  };

  const formatCurrency = (value, currency) => {
    return `${parseFloat(value).toFixed(2)} ${currency}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const formatMonth = (monthString) => {
    if (!monthString || monthString.length !== 6) return monthString;
    const year = monthString.slice(0, 4);
    const month = monthString.slice(4, 6);
    return `${year}${month}`;
  };

  const getForecastColor = (percentage) => {
    if (percentage <= 50) return '#2d7d32'; // Green
    if (percentage <= 100) return '#5fa526'; // Light green
    if (percentage <= 114) return '#e77719'; // Orange
    return '#cc1414'; // Red
  };

  const sortedData = getSortedData();

  if (loading) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.loadingState}>Loading service data...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={styles.tableContainer}>
        <div className={styles.emptyState}>No services found matching the current filters.</div>
      </div>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.tableTitle}>
          Services ({data.length})
        </div>
        {selectedRows.size > 0 && (
          <div className={styles.selectedInfo}>
            {selectedRows.size} selected
          </div>
        )}
      </div>

      <Table className={styles.serviceTable}>
        <TableHead>
          <TableRow>
            <TableHeader style={{ width: '40px' }}>
              <input
                type="checkbox"
                checked={selectedRows.size === data.length && data.length > 0}
                onChange={handleSelectAll}
                className={styles.checkbox}
              />
            </TableHeader>
            <TableHeader 
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('date')}
            >
              Date {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader 
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('month')}
            >
              Month {sortConfig.key === 'month' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader 
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('service')}
            >
              Service {sortConfig.key === 'service' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader 
              align="right"
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('cost')}
            >
              Cost {sortConfig.key === 'cost' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader 
              align="right"
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('deltaCost')}
            >
              Delta Cost {sortConfig.key === 'deltaCost' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader style={{ width: '150px' }}>
              Chart
            </TableHeader>
            <TableHeader 
              align="right"
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('forecastedPct')}
            >
              Forecasted {sortConfig.key === 'forecastedPct' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader 
              align="right"
              style={{ cursor: 'pointer' }}
              onClick={() => handleSort('forecastedCost')}
            >
              Forecasted Cost {sortConfig.key === 'forecastedCost' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </TableHeader>
            <TableHeader align="center">
              Commercial
            </TableHeader>
            <TableHeader align="center">
              Technical
            </TableHeader>
            <TableHeader style={{ width: '40px' }}>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow 
              key={row.id}
              selected={selectedRows.has(row.id)}
              className={styles.tableRow}
            >
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                  className={styles.checkbox}
                />
              </TableCell>
              <TableCell>{formatDate(row.date)}</TableCell>
              <TableCell>{formatMonth(row.month)}</TableCell>
              <TableCell className={styles.serviceName}>{row.service}</TableCell>
              <TableCell align="right" className={styles.costCell}>
                {formatCurrency(row.cost, row.currency)}
              </TableCell>
              <TableCell align="right" className={styles.deltaCostCell}>
                <span className={row.deltaCost >= 0 ? styles.deltaPositive : styles.deltaNegative}>
                  {formatCurrency(row.deltaCost, row.currency)}
                </span>
              </TableCell>
              <TableCell>
                <div className={styles.chartContainer}>
                  <ProgressBar 
                    value={row.forecastedPct}
                    max={100}
                    color={getForecastColor(row.forecastedPct)}
                    className={styles.progressBar}
                  />
                  {row.forecastedPct > 100 && (
                    <ProgressBar 
                      value={row.forecastedPct - 100}
                      max={100}
                      color="#cc1414"
                      className={styles.progressBarOverflow}
                    />
                  )}
                </div>
              </TableCell>
              <TableCell align="right" className={styles.forecastPctCell}>
                <span className={row.forecastedPct > 100 ? styles.overForecast : ''}>
                  {row.forecastedPct} %
                </span>
              </TableCell>
              <TableCell align="right" className={styles.costCell}>
                {formatCurrency(row.forecastedCost, row.currency)}
              </TableCell>
              <TableCell align="center">{row.commercialCount}</TableCell>
              <TableCell align="center">{row.technicalCount}</TableCell>
              <TableCell>
                <button className={styles.rowActionButton} title="More actions">
                  ›
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ServiceManagerTable;

