import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import styles from '../../styles/pages/WorkZone.module.css';

function WorkZoneTrendChart({ data }) {
  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Monthly Prepaid Quota Breakdown (12-Month Trend)</h2>
      
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
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
                value: 'Users', 
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
                  total: 'Total Prepaid Quota',
                  referenced: 'Referenced Quota (Static)',
                  dynamic: 'Dynamic Quota',
                  actualUsage: 'Actual Usage'
                };
                return [`${value} users`, labels[name] || name];
              }}
            />
            <Legend 
              verticalAlign="top"
              height={36}
              formatter={(value) => {
                const labels = {
                  total: 'Total Prepaid Quota',
                  referenced: 'Referenced Quota (Static)',
                  dynamic: 'Dynamic Quota',
                  actualUsage: 'Actual Usage'
                };
                return labels[value] || value;
              }}
            />
            <Line 
              type="monotone" 
              dataKey="total" 
              stroke="#5d36ff" 
              strokeWidth={3}
              dot={{ fill: '#5d36ff', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="referenced" 
              stroke="#e9730c" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#e9730c', strokeWidth: 2, r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="dynamic" 
              stroke="#107e3e" 
              strokeWidth={2}
              dot={{ fill: '#107e3e', strokeWidth: 2, r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="actualUsage" 
              stroke="#0a6ed1" 
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={{ fill: '#0a6ed1', strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WorkZoneTrendChart;

