import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/BTP.module.css';

function BTPBurndownChart({ data }) {
  return (
    <div className={styles.btpChart}>
      <h3>
        <Icon name="trending-down" size="medium" />
        HANA Cloud Quota Burn-down (November 2025)
      </h3>
      
      <div className={styles.chartLegend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.remaining}`}></span>
          Remaining Quota
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.consumed}`}></span>
          Consumed
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRemaining" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0a6ed1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#0a6ed1" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorConsumed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="day" 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(day) => `Day ${day}`}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
          />
          <Tooltip 
            contentStyle={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            formatter={(value, name) => [
              `${value.toLocaleString()} GB-hours`,
              name === 'remaining' ? 'Remaining' : 'Consumed'
            ]}
            labelFormatter={(day) => `Day ${day}`}
          />
          <Area 
            type="monotone" 
            dataKey="remaining" 
            stroke="#0a6ed1" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorRemaining)" 
          />
          <Area 
            type="monotone" 
            dataKey="consumed" 
            stroke="#dc2626" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorConsumed)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BTPBurndownChart;

