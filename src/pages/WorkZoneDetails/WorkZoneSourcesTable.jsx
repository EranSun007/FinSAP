import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import styles from '../../styles/pages/WorkZone.module.css';

function WorkZoneSourcesTable({ sources, totalUsers }) {
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>Referenced Entitlement Sources</h2>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Contract</TableHeader>
            <TableHeader>Contract ID</TableHeader>
            <TableHeader>Logical Product</TableHeader>
            <TableHeader>Quota Type</TableHeader>
            <TableHeader align="right">Users</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {sources.map((source, index) => (
            <TableRow key={index}>
              <TableCell>{source.contract}</TableCell>
              <TableCell className={styles.monoText}>{source.contractId}</TableCell>
              <TableCell>{source.logicalProduct}</TableCell>
              <TableCell>
                <span className={`${styles.badge} ${styles.referenced}`}>
                  {source.quotaType}
                </span>
              </TableCell>
              <TableCell align="right">{source.users}</TableCell>
              <TableCell>
                <span className={`${styles.statusBadge} ${styles.active}`}>
                  {source.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className={styles.totalRow}>
            <TableCell colSpan={4}>
              <strong>Total Referenced Entitlement</strong>
            </TableCell>
            <TableCell align="right">
              <strong>{totalUsers}</strong>
            </TableCell>
            <TableCell>—</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default WorkZoneSourcesTable;

