import { useState, useMemo } from 'react';
import { generateSACData } from '../../data/sacDataGenerator';
import { sacMetrics, sacCategories } from '../../data/sacMetricsData';

export function useSACChart() {
  const data = useMemo(() => generateSACData(), []);

  // Initialize all metrics as visible
  const [visibleMetrics, setVisibleMetrics] = useState(
    sacMetrics.reduce((acc, m) => ({ ...acc, [m.key]: true }), {})
  );

  const [scale, setScale] = useState('auto');

  // Toggle a single metric
  const toggleMetric = (key) => {
    setVisibleMetrics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Toggle all metrics in a category
  const toggleCategory = (category) => {
    const catMetrics = sacMetrics.filter(m => m.category === category);
    const allVisible = catMetrics.every(m => visibleMetrics[m.key]);

    setVisibleMetrics(prev => {
      const updated = { ...prev };
      catMetrics.forEach(m => {
        updated[m.key] = !allVisible;
      });
      return updated;
    });
  };

  // Calculate y-axis domain based on visible metrics
  const yAxisDomain = useMemo(() => {
    if (scale === 'auto') {
      return ['auto', 'auto'];
    }

    const visibleKeys = Object.keys(visibleMetrics).filter(k => visibleMetrics[k]);
    if (visibleKeys.length === 0) return [0, 100];

    let min = Infinity;
    let max = -Infinity;

    data.forEach(d => {
      visibleKeys.forEach(key => {
        const val = d[key];
        if (typeof val === 'number') {
          if (val < min) min = val;
          if (val > max) max = val;
        }
      });
    });

    if (min === Infinity) min = 0;
    if (max === -Infinity) max = 100;

    const padding = (max - min) * 0.1;
    return [Math.max(0, Math.floor(min - padding)), Math.ceil(max + padding)];
  }, [data, visibleMetrics, scale]);

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

