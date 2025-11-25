import { useState, useMemo } from 'react';

export function useChartScale(data, visibleMetrics, allMetrics) {
  const [scale, setScale] = useState('auto');

  const yAxisDomain = useMemo(() => {
    if (scale === 'auto') return ['auto', 'auto'];
    
    const visibleData = data.flatMap(d => 
      allMetrics
        .filter(m => visibleMetrics[m.key])
        .map(m => d[m.key])
        .filter(v => typeof v === 'number')
    );
    
    if (visibleData.length === 0) return [0, 1000];
    
    const min = Math.min(...visibleData);
    const max = Math.max(...visibleData);
    const padding = (max - min) * 0.1;
    
    return [Math.max(0, min - padding), max + padding];
  }, [data, visibleMetrics, scale, allMetrics]);

  return { scale, setScale, yAxisDomain };
}

