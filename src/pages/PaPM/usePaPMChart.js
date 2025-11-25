import { useState, useMemo } from 'react';
import { generatePapmData } from '../../data/papmDataGenerator';
import { papmMetrics } from '../../data/papmMetricsData';

export function usePaPMChart() {
  const [data] = useState(() => generatePapmData());
  const [visibleMetrics, setVisibleMetrics] = useState(() =>
    papmMetrics.reduce((acc, m) => ({ ...acc, [m.key]: true }), {})
  );
  const [scale, setScale] = useState('auto');

  const yAxisDomain = useMemo(() => {
    if (scale === 'auto') return ['auto', 'auto'];
    
    const visibleData = data.flatMap(d => 
      papmMetrics
        .filter(m => visibleMetrics[m.key])
        .map(m => d[m.key])
        .filter(v => typeof v === 'number')
    );
    
    if (visibleData.length === 0) return [0, 1000];
    
    const min = Math.min(...visibleData);
    const max = Math.max(...visibleData);
    const padding = (max - min) * 0.1;
    
    return [Math.max(0, min - padding), max + padding];
  }, [data, visibleMetrics, scale]);

  const toggleMetric = (key) => {
    setVisibleMetrics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (category) => {
    const categoryMetrics = papmMetrics.filter(m => m.category === category);
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

