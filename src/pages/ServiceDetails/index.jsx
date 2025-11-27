import Card, { CardHeader } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import ProgressBar from '../../components/ui/ProgressBar';
import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/Overview.module.css'; // Reusing overview styles for consistency

// Mock data to simulate the screenshot content
const mockServiceData = [
    { date: 'Nov 25, 2025', month: '202511', service: 'SAP HANA Cloud', cost: 638.29, currency: 'USD', delta: 21.08, forecast: 70, forecastCost: 765.95, status: 'success' },
    { date: 'Nov 25, 2025', month: '202511', service: 'SAP AI Launchpad', cost: 637.00, currency: 'USD', delta: 0.00, forecast: 50, forecastCost: 637.00, status: 'success' },
    { date: 'Nov 25, 2025', month: '202511', service: 'Cloud Foundry Runtime', cost: 367.99, currency: 'USD', delta: 0.00, forecast: 100, forecastCost: 371.36, status: 'warning' },
    { date: 'Nov 25, 2025', month: '202511', service: 'SAP Build Work Zone', cost: 135.00, currency: 'USD', delta: 0.00, forecast: 50, forecastCost: 135.00, status: 'success' },
    { date: 'Nov 25, 2025', month: '202511', service: 'Business Application Studio', cost: 30.00, currency: 'USD', delta: 0.00, forecast: 100, forecastCost: 30.00, status: 'success' },
    { date: 'Nov 25, 2025', month: '202511', service: 'Identity Authentication', cost: 18.00, currency: 'USD', delta: 0.00, forecast: 114, forecastCost: 20.64, status: 'error' },
];

function ServiceDetails({ serviceId }) {
    // In a real app, we would filter or fetch based on serviceId
    // For now, we display the list as per the screenshot

    return (
        <div className={styles.overview}> {/* Reusing layout class */}
            <h2 style={{ marginBottom: '1rem' }}>Service Details: {serviceId || 'All Services'}</h2>

            <Card>
                <CardHeader
                    title={`Services (${mockServiceData.length})`}
                    subtitle="Daily Breakdown"
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Date</TableHeader>
                            <TableHeader>Month</TableHeader>
                            <TableHeader>Service</TableHeader>
                            <TableHeader align="right">Cost</TableHeader>
                            <TableHeader align="right">Delta Cost</TableHeader>
                            <TableHeader>Chart</TableHeader>
                            <TableHeader align="right">Forecasted</TableHeader>
                            <TableHeader align="right">Forecasted Cost</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockServiceData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.month}</TableCell>
                                <TableCell>{row.service}</TableCell>
                                <TableCell align="right">{row.cost.toFixed(2)} {row.currency}</TableCell>
                                <TableCell align="right">{row.delta.toFixed(2)} {row.currency}</TableCell>
                                <TableCell>
                                    <ProgressBar
                                        value={row.forecast}
                                        max={100}
                                        color={row.status === 'error' ? 'var(--sap-negative)' : row.status === 'warning' ? 'var(--sap-critical)' : 'var(--sap-positive)'}
                                    />
                                </TableCell>
                                <TableCell align="right" style={{ color: row.status === 'error' ? 'var(--sap-negative)' : row.status === 'warning' ? 'var(--sap-critical)' : 'var(--sap-positive)' }}>
                                    {row.forecast}%
                                </TableCell>
                                <TableCell align="right">{row.forecastCost.toFixed(2)} {row.currency}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}

export default ServiceDetails;
