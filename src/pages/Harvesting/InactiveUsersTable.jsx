import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import styles from '../../styles/pages/Harvesting.module.css';

function InactiveUsersTable({ 
  users, 
  selectedIndices, 
  onToggle, 
  onToggleAll 
}) {
  const allSelected = users.length > 0 && selectedIndices.length === users.length;

  return (
    <div className={styles.harvestingTableSection}>
      <h3>Inactive User</h3>
      <div className={styles.tableScrollContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader style={{ width: '40px' }}>
                <input 
                  type="checkbox" 
                  checked={allSelected}
                  onChange={() => onToggleAll(users.length)}
                />
              </TableHeader>
              <TableHeader>Last Activity Timestamp</TableHeader>
              <TableHeader>User</TableHeader>
              <TableHeader>Email</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow 
                key={index}
                selected={selectedIndices.includes(index)}
                onClick={() => onToggle(index)}
              >
                <TableCell>
                  <input 
                    type="checkbox" 
                    checked={selectedIndices.includes(index)}
                    onChange={() => onToggle(index)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </TableCell>
                <TableCell>{user.timestamp}</TableCell>
                <TableCell>{user.user}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default InactiveUsersTable;

