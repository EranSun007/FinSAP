import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function MetricsChart({ data, metrics, visibleMetrics, yAxisDomain }) {
  const chartData = {
    labels: data.map(d => d.day),
    datasets: metrics
      .filter(m => visibleMetrics[m.key])
      .map(metric => ({
        label: metric.name,
        data: data.map(d => d[metric.key]),
        borderColor: metric.color,
        backgroundColor: metric.color,
        borderWidth: metric.strokeWidth,
        borderDash: metric.strokeDasharray || [],
        pointRadius: metric.key === 'total_peak_memory' ? 4 : 0,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: false
      }))
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 10
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#2c3e50',
        bodyColor: '#2c3e50',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          title: (context) => `Day ${context[0].label}`,
          label: (context) => {
            const metric = metrics.find(m => m.name === context.dataset.label);
            return `${context.dataset.label}: ${context.raw.toFixed(2)} ${metric ? metric.unit : ''}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of October 2025'
        },
        grid: {
          color: '#ecf0f1'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value (GB / CU / vCPUs)'
        },
        grid: {
          color: '#ecf0f1'
        },
        beginAtZero: true,
        min: yAxisDomain[0] === 'auto' ? undefined : yAxisDomain[0],
        max: yAxisDomain[1] === 'auto' ? undefined : yAxisDomain[1]
      }
    }
  };

  return <Line data={chartData} options={options} />;
}

export default MetricsChart;

