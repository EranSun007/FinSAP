import Card, { CardHeader } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import { harvestingData, licenseCosts } from '../../data/harvestingData';

function HarvestingPreview({ onViewAll }) {
  // Calculate opportunities for each license type
  const opportunities = Object.keys(harvestingData).map(licenseKey => {
    const data = harvestingData[licenseKey];
    const inactiveCount = data.inactiveUsers.length;
    const noLogonCount = data.noLogOnUsers.length;
    const total = inactiveCount + noLogonCount;
    const costPerUser = licenseCosts[licenseKey].cost;
    const savings = total * costPerUser;

    return {
      key: licenseKey,
      name: licenseCosts[licenseKey].name,
      subtitle: licenseCosts[licenseKey].subtitle,
      inactiveCount,
      noLogonCount,
      total,
      savings,
      percentage: Math.min(100, (total / 30) * 100)
    };
  });

  // Sort and get top 3
  const top3 = opportunities.sort((a, b) => b.total - a.total).slice(0, 3);

  return (
    <Card className="harvesting-opportunities-card">
      <CardHeader 
        title="License Harvesting Opportunities (Top 3)"
        subtitle="All License Types"
        action={
          <a href="#" className="view-all-link" onClick={(e) => { e.preventDefault(); onViewAll?.(); }}>
            View All
          </a>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>License Type</TableHeader>
            <TableHeader>Inactive Users</TableHeader>
            <TableHeader>No Log-On Users</TableHeader>
            <TableHeader>Total Harvestable</TableHeader>
            <TableHeader>Est. Monthly Savings</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {top3.map((opp) => {
            const statusClass = opp.percentage >= 70 ? 'warning' : opp.percentage >= 40 ? 'medium' : 'high';
            const statusIcon = opp.percentage >= 70 ? '⚠️' : opp.percentage >= 40 ? '⚡' : '✓';

            return (
              <TableRow key={opp.key}>
                <TableCell>
                  <div className="license-type-cell">{opp.name}</div>
                  <div className="license-subtitle">{opp.subtitle}</div>
                </TableCell>
                <TableCell><span className="user-count">{opp.inactiveCount}</span></TableCell>
                <TableCell><span className="user-count">{opp.noLogonCount}</span></TableCell>
                <TableCell><span className="user-count">{opp.total}</span></TableCell>
                <TableCell>
                  <span className="savings-amount">{opp.savings.toFixed(2)} USD</span>
                </TableCell>
                <TableCell>
                  <div className="status-cell">
                    <div className="status-progress">
                      <div className="status-progress-bar">
                        <div 
                          className={`status-progress-fill ${statusClass}`} 
                          style={{ width: `${opp.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="status-icon">{statusIcon}</span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}

export default HarvestingPreview;

