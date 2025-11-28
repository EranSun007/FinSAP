import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import styles from '../../styles/pages/Harvesting.module.css';

function NoLogonUsersTable({ 
  users, 
  selectedIndices, 
  onToggle, 
  onToggleAll,
  licenseType 
}) {
  const allSelected = users.length > 0 && selectedIndices.length === users.length;
  
  // Check if this license type uses the new detailed structure
  const hasDetailedStructure = users.length > 0 && users[0].hasOwnProperty('assignDate');

  // Helper function to format date to short format (e.g., "Oct 2024")
  const formatShortDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  // Helper function to format email (firstname...@5chars...)
  const formatEmail = (email) => {
    const [localPart, domain] = email.split('@');
    const firstName = localPart.split('.')[0];
    const companyName = domain.split('.')[0].substring(0, 5);
    return `${firstName}...@${companyName}...`;
  };

  // Helper function to extract days from assignment duration string
  const getDaysFromDuration = (durationString) => {
    const match = durationString.match(/(\d+)\s*days?/i);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Helper function to determine if user can be harvested
  // Both Active and Manager Approval must be green (specific conditions)
  const canBeHarvested = (user) => {
    if (!hasDetailedStructure) return true;
    
    const days = getDaysFromDuration(user.assignmentDuration);
    
    // Active status: Not Active (green) if duration >= 75 days
    const activeIsGreen = days >= 75;
    
    // Manager Approval: Yes is green
    const approvalIsGreen = user.managerApproval === 'Yes';
    
    return activeIsGreen && approvalIsGreen;
  };

  // Helper function to get active status display and color based on duration
  const getActiveStatusInfo = (user) => {
    const days = getDaysFromDuration(user.assignmentDuration);
    
    // Duration >= 75 days = Not Active (GREEN)
    if (days >= 75) {
      return { label: 'Not Active', className: styles.statusActive };
    }
    // Duration < 75 days = Active (RED)
    return { label: 'Active', className: styles.statusInactive };
  };

  return (
    <div className={styles.harvestingTableSection}>
      <h3>No Log-On User</h3>
      <div className={styles.tableScrollContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader style={{ padding: '0.75rem 16px', width: '48px', textAlign: 'center' }}>
                <input 
                  type="checkbox" 
                  checked={allSelected}
                  onChange={() => onToggleAll(users.length)}
                />
              </TableHeader>
              {hasDetailedStructure ? (
                <>
                  <TableHeader>Assign Date</TableHeader>
                  <TableHeader>Assignment Duration</TableHeader>
                  <TableHeader>License</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>User</TableHeader>
                  <TableHeader>Active</TableHeader>
                  <TableHeader>Company</TableHeader>
                  <TableHeader>Organization</TableHeader>
                  <TableHeader>Manager</TableHeader>
                  <TableHeader>Manager Approval</TableHeader>
                </>
              ) : (
                <>
                  <TableHeader>User</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>License</TableHeader>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => {
              const harvestable = canBeHarvested(user);
              
              return (
                <TableRow 
                  key={index}
                  selected={selectedIndices.includes(index)}
                  onClick={() => harvestable && onToggle(index)}
                  style={{ cursor: harvestable ? 'pointer' : 'not-allowed', opacity: harvestable ? 1 : 0.6 }}
                >
                  <TableCell style={{ padding: '0.75rem 16px', width: '48px', textAlign: 'center' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedIndices.includes(index)}
                      onChange={() => onToggle(index)}
                      onClick={(e) => e.stopPropagation()}
                      disabled={!harvestable}
                    />
                  </TableCell>
                  {hasDetailedStructure ? (
                    <>
                      <TableCell>{formatShortDate(user.assignDate)}</TableCell>
                      <TableCell>{user.assignmentDuration}</TableCell>
                      <TableCell>{user.license}</TableCell>
                      <TableCell>{formatEmail(user.email)}</TableCell>
                      <TableCell>{user.user}</TableCell>
                      <TableCell>
                        {(() => {
                          const statusInfo = getActiveStatusInfo(user);
                          return (
                            <span className={`${styles.statusLabel} ${statusInfo.className}`}>
                              {statusInfo.label}
                            </span>
                          );
                        })()}
                      </TableCell>
                      <TableCell>{user.company}</TableCell>
                      <TableCell>{user.organization}</TableCell>
                      <TableCell>{user.manager}</TableCell>
                      <TableCell>
                        <span className={`${styles.statusLabel} ${user.managerApproval === 'Yes' ? styles.statusApproved : styles.statusNotApproved}`}>
                          {user.managerApproval}
                        </span>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{user.user}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.license}</TableCell>
                    </>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default NoLogonUsersTable;

