import Card, { CardHeader } from '../../components/ui/Card';
import BarLineChart from '../../components/charts/BarLineChart';
import { costForecast } from '../../data/costForecastData';

function CostForecast() {
  return (
    <Card>
      <CardHeader>
        <div>
          <div className="card-title">Cost and Forecast</div>
          <div className="card-subtitle">BTP EA + Business AI</div>
          <div className="chart-header-sub">
            <span>Actual: <strong>19,850.00 EUR</strong></span>
            <span>Forecast: <strong>24,320.00 EUR</strong></span>
          </div>
        </div>
        <div className="chart-header-value">24.3k</div>
      </CardHeader>
      <div style={{ height: '250px' }}>
        <BarLineChart 
          days={costForecast.days}
          btpeaData={costForecast.btpea}
          businessAIData={costForecast.businessAI}
        />
      </div>
    </Card>
  );
}

export default CostForecast;

