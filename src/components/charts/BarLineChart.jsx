import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function BarLineChart({ days, btpeaData, businessAIData }) {
  const chartData = {
    labels: days,
    datasets: [
      {
        type: 'bar',
        label: 'BTP EA Cost',
        data: btpeaData.costData,
        backgroundColor: '#008b8b',
        order: 3
      },
      {
        type: 'line',
        label: 'BTP EA Forecast',
        data: btpeaData.forecastData,
        borderColor: '#005f5f',
        borderWidth: 2,
        pointRadius: 2,
        order: 1,
        tension: 0.1
      },
      {
        type: 'bar',
        label: 'Business AI Cost',
        data: businessAIData.costData,
        backgroundColor: '#9b59b6',
        order: 4
      },
      {
        type: 'line',
        label: 'Business AI Forecast',
        data: businessAIData.forecastData,
        borderColor: '#6c3483',
        borderWidth: 2,
        pointRadius: 2,
        order: 2,
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        align: 'start',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 11 }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0'
        },
        ticks: {
          font: { size: 10 }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: { size: 10 }
        }
      }
    }
  };

  return <Chart type='bar' data={chartData} options={options} />;
}

export default BarLineChart;

