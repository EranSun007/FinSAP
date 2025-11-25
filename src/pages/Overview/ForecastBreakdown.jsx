import Card, { CardHeader } from '../../components/ui/Card';
import DonutChart from '../../components/charts/DonutChart';
import { forecastBreakdown } from '../../data/forecastData';

function ForecastBreakdown() {
  return (
    <Card>
      <CardHeader 
        title="Forecast Breakdown"
        subtitle="By Directory"
      />
      <div style={{ height: '250px', position: 'relative' }}>
        <DonutChart 
          labels={forecastBreakdown.labels}
          data={forecastBreakdown.data}
          colors={forecastBreakdown.colors}
        />
      </div>
    </Card>
  );
}

export default ForecastBreakdown;

