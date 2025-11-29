import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import styles from '../../styles/pages/WorkZone.module.css';

function WorkZoneDynamicChart({ data }) {
  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Dynamic Quota Components (Monthly Detail)</h2>
      
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
            <XAxis 
              dataKey="month" 
              stroke="#6a6d70"
              fontSize={12}
              tickMargin={10}
            />
            <YAxis 
              stroke="#6a6d70"
              fontSize={12}
              label={{ 
                value: 'Users (Dynamic Quota)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#6a6d70' }
              }}
            />
            <Tooltip 
              contentStyle={{
                background: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              formatter={(value, name) => {
                const labels = {
                  processAutomation: 'Build Process Automation',
                  buildApps: 'Build Apps',
                  workAutomation: 'Build Work Automation'
                };
                return [`${value} users`, labels[name] || name];
              }}
              labelFormatter={(month) => month}
            />
            <Legend 
              verticalAlign="top"
              height={36}
              formatter={(value) => {
                const labels = {
                  processAutomation: 'Build Process Automation',
                  buildApps: 'Build Apps',
                  workAutomation: 'Build Work Automation'
                };
                return labels[value] || value;
              }}
            />
            <Bar 
              dataKey="processAutomation" 
              stackId="a" 
              fill="#0a6ed1"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="buildApps" 
              stackId="a" 
              fill="#e9730c"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="workAutomation" 
              stackId="a" 
              fill="#107e3e"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WorkZoneDynamicChart;

