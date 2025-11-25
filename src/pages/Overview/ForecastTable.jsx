import Card, { CardHeader } from '../../components/ui/Card';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../components/ui/Table';
import ProgressBar from '../../components/ui/ProgressBar';
import { topServices } from '../../data/topServicesData';

function ForecastTable() {
  return (
    <Card>
      <CardHeader 
        title="Highest Credit Forecasts (Top 5)"
        subtitle="Global Account"
        action={<div style={{ color: 'var(--sap-blue)', fontSize: '0.8rem', cursor: 'pointer' }}>View All</div>}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Service / Metric</TableHeader>
            <TableHeader align="right">Cost</TableHeader>
            <TableHeader align="right">Increase</TableHeader>
            <TableHeader align="right">Forecast</TableHeader>
            <TableHeader>Forecast %</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {topServices.map((service, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="service-name">{service.name}</div>
                <div className="service-sub">{service.sub}</div>
              </TableCell>
              <TableCell align="right" className="cost-value">{service.cost}</TableCell>
              <TableCell align="right" style={{ color: service.increaseColor }}>{service.increase}</TableCell>
              <TableCell align="right" className="forecast-value">{service.forecast}</TableCell>
              <TableCell>
                <div className="progress-wrapper">
                  <div style={{ fontSize: '0.75rem', width: '30px' }}>{service.forecastPct}%</div>
                  <ProgressBar 
                    value={service.forecastPct} 
                    max={100} 
                    color={service.barColor}
                    className="progress-bg-custom"
                  />
                  <span className="status-icon" style={{ color: service.statusColor }}>{service.status}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default ForecastTable;

