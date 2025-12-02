import { useState, useMemo } from 'react';
import { generateSignavioData } from '../../data/signavioDataGenerator';
import { signavioMetrics } from '../../data/signavioMetricsData';

export function useSignavioChart() {
  const [data] = useState(() => generateSignavioData());
  const [visibleMetrics, setVisibleMetrics] = useState(() =>
    signavioMetrics.reduce((acc, m) => ({ ...acc, [m.key]: true }), {})
  );
  const [scale, setScale] = useState('auto');

  const yAxisDomain = useMemo(() => {
    if (scale === 'auto') return ['auto', 'auto'];
    
    const visibleData = data.flatMap(d => 
      signavioMetrics
        .filter(m => visibleMetrics[m.key])
        .map(m => d[m.key])
        .filter(v => typeof v === 'number')
    );
    
    if (visibleData.length === 0) return [0, 100];
    
    const min = Math.min(...visibleData);
    const max = Math.max(...visibleData);
    const padding = (max - min) * 0.1;
    
    return [Math.max(0, min - padding), max + padding];
  }, [data, visibleMetrics, scale]);

  const toggleMetric = (key) => {
    setVisibleMetrics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (category) => {
    const categoryMetrics = signavioMetrics.filter(m => m.category === category);
    const allVisible = categoryMetrics.every(m => visibleMetrics[m.key]);
    
    setVisibleMetrics(prev => {
      const updated = { ...prev };
      categoryMetrics.forEach(m => {
        updated[m.key] = !allVisible;
      });
      return updated;
    });
  };

  return {
    data,
    visibleMetrics,
    scale,
    setScale,
    yAxisDomain,
    toggleMetric,
    toggleCategory
  };
}



