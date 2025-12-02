import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import Card, { CardHeader } from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import { licenseUtilizationData } from '../../data/licenseUtilizationData';
import styles from '../../styles/components/LicenseUtilizationTile.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend
);

const LicenseUtilizationTile = () => {
  // Process data for chart - use shortName for chart axis labels
  const labels = licenseUtilizationData.map(d => d.shortName || d.name);
  
  const currentUtilization = licenseUtilizationData.map(d => (d.used / d.contracted) * 100);
  const unusedPercent = licenseUtilizationData.map(d => ((d.contracted - d.used) / d.contracted) * 100);
  const forecastUtilization = licenseUtilizationData.map(d => d.forecastPercent);

  // Map actions to colors
  const getActionColor = (action) => {
    switch(action) {
      case 'upsell': return '#bb0000'; // sapNegativeColor
      case 'reduce': return '#107e3e'; // sapPositiveColor
      default: return '#e9730c'; // sapCriticalColor
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Used Licenses',
        data: currentUtilization,
        backgroundColor: '#0070f2',
        borderRadius: 4,
        stack: 'current',
        order: 2
      },
      {
        label: 'Unused Licenses',
        data: unusedPercent,
        backgroundColor: '#e5f3ff', // Light blue instead of red
        borderRadius: 4,
        stack: 'current',
        order: 3
      },
      {
        label: 'Forecast at Renewal',
        data: forecastUtilization,
        type: 'line',
        backgroundColor: 'transparent',
        borderColor: licenseUtilizationData.map(d => getActionColor(d.action)),
        borderWidth: 0, // We only want points/icons, not the line connecting them
        pointRadius: 8,
        pointHoverRadius: 10,
        pointStyle: 'circle',
        pointBackgroundColor: licenseUtilizationData.map(d => getActionColor(d.action)),
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        order: 1
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          padding: 15,
          font: { size: 12 },
          usePointStyle: true,
          filter: (item) => item.text !== 'Forecast at Renewal' // Hide the complex line legend, we explain it below
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataIndex = context.dataIndex;
            const product = licenseUtilizationData[dataIndex];
            const datasetLabel = context.dataset.label;

            if (datasetLabel === 'Forecast at Renewal') {
              return [
                `Forecast: ${product.forecastPercent}% utilization`,
                `Recommended: ${Math.round(product.contracted * (product.forecastPercent / 100))} licenses`,
                `Renewal in: ${product.daysUntilRenewal} days`
              ];
            } else if (datasetLabel === 'Used Licenses') {
              return `Used: ${product.used} / ${product.contracted} (${Math.round((product.used/product.contracted)*100)}%)`;
            }
            return `Unused: ${product.contracted - product.used} licenses`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 150, // Allow space for forecast > 100%
        ticks: {
          callback: (value) => value + '%',
          stepSize: 25
        },
        grid: {
          color: (context) => context.tick.value === 100 ? '#e9730c' : 'rgba(0,0,0,0.1)',
          lineWidth: (context) => context.tick.value === 100 ? 2 : 1
        }
      },
      y: {
        stacked: true,
        grid: { display: false }
      }
    }
  };

  // Custom plugin to draw icons and text
  const forecastAnnotations = {
    id: 'forecastAnnotations',
    afterDatasetsDraw: (chart) => {
      const { ctx, scales: { x: xAxis, y: yAxis } } = chart;
      
      chart.data.datasets[2].data.forEach((value, index) => {
        const product = licenseUtilizationData[index];
        const y = yAxis.getPixelForValue(index);
        const xPos = xAxis.getPixelForValue(value);
        
        // Define FontAwesome unicode characters for icons
        // triangle-exclamation (warning) = \uf071
        // check (accept) = \uf00c
        // circle-half-stroke (status-in-process) = \uf5c0
        let iconChar = '\uf5c0'; 
        if (product.action === 'upsell') iconChar = '\uf071';
        if (product.action === 'reduce') iconChar = '\uf00c';

        // Set font for FontAwesome
        ctx.font = '900 16px "Font Awesome 6 Free"';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = getActionColor(product.action);
        ctx.fillText(iconChar, xPos, y);

        // Draw percentage text
        ctx.font = 'bold 10px Arial';
        ctx.fillText(`${value}%`, xPos, y + 15);
      });
    }
  };

  const getActionIcon = (action) => {
    switch(action) {
      case 'upsell': return 'warning';
      case 'reduce': return 'accept';
      default: return 'status-in-process';
    }
  };

  const getActionIconColor = (action) => {
    switch(action) {
      case 'upsell': return 'var(--sapNegativeColor, #bb0000)';
      case 'reduce': return 'var(--sapPositiveColor, #107e3e)';
      default: return 'var(--sapCriticalColor, #e9730c)';
    }
  };

  return (
    <Card>
      <CardHeader 
        title="License Utilization & Forecast" 
        subtitle="Portfolio view with renewal recommendations"
      />
      <div className={styles.container}>
        <div className={styles.chartContainer}>
          <Chart 
            type="bar" 
            data={data} 
            options={options} 
            plugins={[forecastAnnotations]}
          />
        </div>

        <div className={styles.legendGrid}>
          {licenseUtilizationData.map((product) => (
            <div 
              key={product.name} 
              className={`${styles.legendItem} ${styles[`action-${product.action}`]}`}
            >
              <div className={styles.iconWrapper}>
                <Icon 
                  name={getActionIcon(product.action)} 
                  color={getActionIconColor(product.action)}
                  size="large"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.recommendation}>
                  Current: {product.used} ({Math.round((product.used/product.contracted)*100)}%)
                  <span className={styles.forecastValue}>
                    Forecast: {product.forecastPercent}% of contract
                  </span>
                </div>
                <div className={styles.actionBadge}>
                  {product.action === 'upsell' ? '⚠️ UPSELL REQUIRED' : 
                   product.action === 'reduce' ? '✓ REDUCE AT RENEWAL' : 
                   '⏱ MONITOR'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default LicenseUtilizationTile;
