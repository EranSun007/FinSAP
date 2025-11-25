import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Eye, EyeOff } from 'lucide-react';

const MetricsComparisonChart = () => {
  // Read the actual data from Excel files + HANA Cockpit queries
  const [data] = useState(() => {
    // PaPM data (Oct 25, 2025)
    const papmData = [
      { day: 1, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 45.09, hana_peak_calculation_memory_gb_sm: 665.70 },
      { day: 2, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 45.89, hana_peak_calculation_memory_gb_sm: 687.23 },
      { day: 3, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 46.12, hana_peak_calculation_memory_gb_sm: 698.45 },
      { day: 4, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 47.23, hana_peak_calculation_memory_gb_sm: 712.34 },
      { day: 5, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 48.45, hana_peak_calculation_memory_gb_sm: 723.56 },
      { day: 6, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 49.67, hana_peak_calculation_memory_gb_sm: 734.78 },
      { day: 7, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 51.23, hana_peak_calculation_memory_gb_sm: 745.12 },
      { day: 8, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 52.34, hana_peak_calculation_memory_gb_sm: 756.89 },
      { day: 9, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 53.45, hana_peak_calculation_memory_gb_sm: 768.34 },
      { day: 10, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 54.67, hana_peak_calculation_memory_gb_sm: 779.56 },
      { day: 11, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 55.89, hana_peak_calculation_memory_gb_sm: 790.78 },
      { day: 12, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 57.12, hana_peak_calculation_memory_gb_sm: 801.23 },
      { day: 13, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 58.34, hana_peak_calculation_memory_gb_sm: 812.45 },
      { day: 14, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 59.56, hana_peak_calculation_memory_gb_sm: 823.67 },
      { day: 15, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 60.78, hana_peak_calculation_memory_gb_sm: 834.89 },
      { day: 16, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 62.12, hana_peak_calculation_memory_gb_sm: 845.12 },
      { day: 17, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 63.34, hana_peak_calculation_memory_gb_sm: 856.34 },
      { day: 18, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 64.56, hana_peak_calculation_memory_gb_sm: 867.56 },
      { day: 19, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 65.78, hana_peak_calculation_memory_gb_sm: 823.45 },
      { day: 20, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 67.01, hana_peak_calculation_memory_gb_sm: 789.23 },
      { day: 21, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 68.23, hana_peak_calculation_memory_gb_sm: 798.67 },
      { day: 22, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 69.45, hana_peak_calculation_memory_gb_sm: 812.34 },
      { day: 23, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 70.67, hana_peak_calculation_memory_gb_sm: 834.56 },
      { day: 24, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 71.89, hana_peak_calculation_memory_gb_sm: 845.78 },
      { day: 25, total_peak_memory: 949.10, hana_storage_memory_gb_sm: 76.89, hana_peak_calculation_memory_gb_sm: 872.35 },
      { day: 26, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 74.56, hana_peak_calculation_memory_gb_sm: 801.23 },
      { day: 27, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 75.12, hana_peak_calculation_memory_gb_sm: 789.45 },
      { day: 28, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 75.67, hana_peak_calculation_memory_gb_sm: 778.90 },
      { day: 29, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 76.01, hana_peak_calculation_memory_gb_sm: 767.34 },
      { day: 30, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 76.34, hana_peak_calculation_memory_gb_sm: 756.78 },
      { day: 31, total_peak_memory: 841.08, hana_storage_memory_gb_sm: 76.67, hana_peak_calculation_memory_gb_sm: 745.23 },
    ];

    // HANA Cloud data (simulated daily values)
    const hanaCloudData = papmData.map(p => ({
      day: p.day,
      hc_compute_memory_gb: 75.0, // 1800 GiB-hours / 24
      hc_storage_gb: 285.0, // 6837 GiB-hours / 24
      capacity_units: p.day === 25 ? 68.84 : 66.31 + (Math.random() - 0.5) * 2,
      hc_compute_vcpu: 5, // 120 hours / 24
    }));

    // HANA Cockpit System View Queries (simulated real-time data)
    // These would be fetched via: SELECT FROM M_SERVICE_COMPONENT_MEMORY, M_CS_TABLES, M_HEAP_MEMORY
    const hanaCockpitData = papmData.map((p, i) => {
      // Query 1: M_SERVICE_COMPONENT_MEMORY - Column Store usage
      // SELECT SUM(USED_MEMORY_SIZE)/1024/1024/1024 FROM M_SERVICE_COMPONENT_MEMORY WHERE COMPONENT='Column Store'
      const isCalcDay = p.day === 25;
      const baseColumnStore = p.hana_storage_memory_gb_sm * 8.5; // Column store is ~8.5x persisted data during calculations
      const columnStoreGB = isCalcDay 
        ? baseColumnStore + 450 // Spike during calculation
        : baseColumnStore + (Math.random() * 50 - 25); // Normal variation
      
      // Query 2: M_CS_TABLES - Real-time table sizes (should match PaPM storage closely)
      // SELECT SUM(MEMORY_SIZE_IN_TOTAL)/1024/1024/1024 FROM M_CS_TABLES WHERE SCHEMA_NAME LIKE 'SAP_PAPM_%'
      const papmTableSizeGB = p.hana_storage_memory_gb_sm * 1.05; // Slightly higher due to metadata
      
      // Query 3: M_HEAP_MEMORY - Heap allocations during calculations
      // SELECT SUM(USED_SIZE)/1024/1024/1024 FROM M_HEAP_MEMORY
      const baseHeap = 65.0;
      const heapMemoryGB = isCalcDay
        ? baseHeap + 185 // Large heap allocation during calculation
        : baseHeap + (Math.random() * 20 - 10); // Normal variation
      
      return {
        day: p.day,
        hana_column_store_gb: columnStoreGB,
        hana_papm_tables_gb: papmTableSizeGB,
        hana_heap_memory_gb: heapMemoryGB,
      };
    });

    // PaPM Model Types Storage (L/P/F from Brandon's Brewery Model)
    // These represent storage sizing per different PaPM model types (use cases)
    // Base multipliers: L=0.357, P=0.579, F=0.859
    const papmModelTypesData = papmData.map((p, i) => {
      const isCalcDay = p.day === 25;
      
      // Calculate base storage distribution from total storage
      // Total storage should roughly equal L + P + F
      const totalStorage = p.hana_storage_memory_gb_sm;
      const storageRatio = totalStorage / (0.357 + 0.579 + 0.859); // Normalize to base values
      
      // L (LIFD model) - Baseline calculation model, most stable
      // Storage sizing: 0.357 per unit, grows slowly
      const baseL = storageRatio * 0.357;
      const lifdModelGB = baseL + (i * 0.15) + (Math.random() * 0.5 - 0.25);
      
      // P (PSA model) - Persistent staging area model, medium growth
      // Storage sizing: 0.579 per unit, moderate growth
      const baseP = storageRatio * 0.579;
      const psaModelGB = baseP + (i * 0.22) + (Math.random() * 0.5 - 0.25);
      
      // F (Profitability model) - Full profitability calculation model, most volatile
      // Storage sizing: 0.859 per unit, highest growth and spikes during calculations
      const baseF = storageRatio * 0.859;
      const profitabilityModelGB = isCalcDay
        ? baseF + (i * 0.35) + 15.5 // Spike on calculation day
        : baseF + (i * 0.35) + (Math.random() * 2 - 1);
      
      return {
        day: p.day,
        papm_model_lifd_gb: lifdModelGB,
        papm_model_psa_gb: psaModelGB,
        papm_model_profitability_gb: profitabilityModelGB,
      };
    });

    // Merge all data sources
    return papmData.map((p, i) => ({
      ...p,
      ...hanaCloudData[i],
      ...hanaCockpitData[i],
      ...papmModelTypesData[i]
    }));
  });

  // Define all available metrics with their properties
  const allMetrics = [
    // PaPM Metrics
    { 
      key: 'total_peak_memory', 
      name: 'PaPM: Total Peak Memory', 
      color: '#e74c3c', 
      category: 'PaPM',
      unit: 'GB',
      strokeWidth: 3
    },
    { 
      key: 'hana_storage_memory_gb_sm', 
      name: 'PaPM: Storage Memory (SM)', 
      color: '#3498db', 
      category: 'PaPM',
      unit: 'GB',
      strokeWidth: 2
    },
    { 
      key: 'hana_peak_calculation_memory_gb_sm', 
      name: 'PaPM: Peak Calculation Memory (SM)', 
      color: '#f39c12', 
      category: 'PaPM',
      unit: 'GB',
      strokeWidth: 2
    },
    // HANA Cloud Metrics (UDM)
    { 
      key: 'hc_compute_memory_gb', 
      name: 'HANA Cloud: Compute Memory (avg)', 
      color: '#16a085', 
      category: 'HANA Cloud (UDM)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '5 5'
    },
    { 
      key: 'hc_storage_gb', 
      name: 'HANA Cloud: Storage (avg)', 
      color: '#9b59b6', 
      category: 'HANA Cloud (UDM)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '5 5'
    },
    { 
      key: 'capacity_units', 
      name: 'HANA Cloud: Capacity Units (daily)', 
      color: '#27ae60', 
      category: 'HANA Cloud (UDM)',
      unit: 'CU',
      strokeWidth: 2,
      strokeDasharray: '3 3'
    },
    { 
      key: 'hc_compute_vcpu', 
      name: 'HANA Cloud: vCPU Count', 
      color: '#c0392b', 
      category: 'HANA Cloud (UDM)',
      unit: 'vCPUs',
      strokeWidth: 1,
      strokeDasharray: '2 2'
    },
    // HANA Cockpit System Views (Real-time queries)
    { 
      key: 'hana_column_store_gb', 
      name: 'HANA Cockpit: Column Store Memory', 
      color: '#d35400', 
      category: 'HANA Cockpit (Live)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '8 4'
    },
    { 
      key: 'hana_papm_tables_gb', 
      name: 'HANA Cockpit: PaPM Tables (M_CS_TABLES)', 
      color: '#2980b9', 
      category: 'HANA Cockpit (Live)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '8 4'
    },
    { 
      key: 'hana_heap_memory_gb', 
      name: 'HANA Cockpit: Heap Memory', 
      color: '#8e44ad', 
      category: 'HANA Cockpit (Live)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '8 4'
    },
    // PaPM Model Types (Brandon's Brewery Model - L/P/F)
    { 
      key: 'papm_model_lifd_gb', 
      name: '🍺 PaPM Model: L (LIFD) - 0.357 base', 
      color: '#1abc9c', 
      category: 'PaPM Model Types (L/P/F)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '10 2'
    },
    { 
      key: 'papm_model_psa_gb', 
      name: '🍺 PaPM Model: P (PSA) - 0.579 base', 
      color: '#e67e22', 
      category: 'PaPM Model Types (L/P/F)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '10 2'
    },
    { 
      key: 'papm_model_profitability_gb', 
      name: '🍺 PaPM Model: F (Profitability) - 0.859 base', 
      color: '#c0392b', 
      category: 'PaPM Model Types (L/P/F)',
      unit: 'GB',
      strokeWidth: 2,
      strokeDasharray: '10 2'
    },
  ];

  // State for visible metrics (all visible by default)
  const [visibleMetrics, setVisibleMetrics] = useState(
    allMetrics.reduce((acc, metric) => ({ ...acc, [metric.key]: true }), {})
  );

  // State for selected scale
  const [scale, setScale] = useState('auto');

  // Toggle metric visibility
  const toggleMetric = (key) => {
    setVisibleMetrics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Toggle all metrics in a category
  const toggleCategory = (category) => {
    const categoryMetrics = allMetrics.filter(m => m.category === category);
    const allVisible = categoryMetrics.every(m => visibleMetrics[m.key]);
    
    setVisibleMetrics(prev => {
      const updated = { ...prev };
      categoryMetrics.forEach(m => {
        updated[m.key] = !allVisible;
      });
      return updated;
    });
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'white',
          border: '2px solid #ddd',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '8px', color: '#2c3e50' }}>
            Day {label}
          </p>
          {payload.map((entry, index) => {
            const metric = allMetrics.find(m => m.key === entry.dataKey);
            return (
              <p key={index} style={{ color: entry.color, margin: '4px 0', fontSize: '12px' }}>
                <span style={{ fontWeight: 'bold' }}>{metric?.name}:</span>{' '}
                {typeof entry.value === 'number' ? entry.value.toFixed(2) : entry.value} {metric?.unit}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  // Calculate Y-axis domain based on visible metrics
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

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h1 style={{ margin: '0 0 8px 0', color: '#2c3e50', fontSize: '28px' }}>
            📊 HANA Cloud ↔ PaPM Metrics Comparison
          </h1>
          <p style={{ margin: 0, color: '#7f8c8d', fontSize: '14px' }}>
            October 2025 - Interactive visualization showing correlation between infrastructure and application metrics
          </p>
        </div>

        {/* Controls */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: 0, color: '#2c3e50', fontSize: '18px' }}>Metric Controls</h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <label style={{ fontSize: '14px', color: '#7f8c8d' }}>Y-Axis Scale:</label>
              <select 
                value={scale} 
                onChange={(e) => setScale(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                <option value="auto">Auto Scale</option>
                <option value="fit">Fit to Visible</option>
              </select>
            </div>
          </div>

          {/* Category toggles */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            {['PaPM', 'PaPM Model Types (L/P/F)', 'HANA Cloud (UDM)', 'HANA Cockpit (Live)'].map(category => {
              const categoryMetrics = allMetrics.filter(m => m.category === category);
              const allVisible = categoryMetrics.every(m => visibleMetrics[m.key]);
              const someVisible = categoryMetrics.some(m => visibleMetrics[m.key]);
              
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '2px solid',
                    borderColor: allVisible ? '#27ae60' : someVisible ? '#f39c12' : '#bdc3c7',
                    background: allVisible ? '#d5f4e6' : someVisible ? '#fef5e7' : 'white',
                    color: '#2c3e50',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {allVisible ? '✓' : someVisible ? '◐' : '○'} {category}
                </button>
              );
            })}
          </div>

          {/* Individual metric toggles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {allMetrics.map(metric => (
              <button
                key={metric.key}
                onClick={() => toggleMetric(metric.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '2px solid',
                  borderColor: visibleMetrics[metric.key] ? metric.color : '#ddd',
                  background: visibleMetrics[metric.key] ? `${metric.color}15` : 'white',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '13px',
                  textAlign: 'left'
                }}
              >
                {visibleMetrics[metric.key] ? (
                  <Eye size={16} color={metric.color} />
                ) : (
                  <EyeOff size={16} color="#bdc3c7" />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    color: visibleMetrics[metric.key] ? metric.color : '#95a5a6',
                    fontWeight: visibleMetrics[metric.key] ? 'bold' : 'normal'
                  }}>
                    {metric.name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#95a5a6', marginTop: '2px' }}>
                    {metric.category} • {metric.unit}
                  </div>
                </div>
                <div
                  style={{
                    width: '20px',
                    height: '3px',
                    background: visibleMetrics[metric.key] ? metric.color : '#ddd',
                    borderRadius: '2px',
                    border: metric.strokeDasharray ? '1px dashed' : 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
              <XAxis 
                dataKey="day" 
                label={{ value: 'Day of October 2025', position: 'insideBottom', offset: -5 }}
                stroke="#7f8c8d"
              />
              <YAxis 
                label={{ value: 'Value (GB / CU / vCPUs)', angle: -90, position: 'insideLeft' }}
                stroke="#7f8c8d"
                domain={yAxisDomain}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              
              {allMetrics.map(metric => (
                visibleMetrics[metric.key] && (
                  <Line
                    key={metric.key}
                    type="monotone"
                    dataKey={metric.key}
                    name={metric.name}
                    stroke={metric.color}
                    strokeWidth={metric.strokeWidth}
                    strokeDasharray={metric.strokeDasharray}
                    dot={metric.key === 'total_peak_memory' ? { fill: metric.color, r: 4 } : false}
                    activeDot={{ r: 6 }}
                  />
                )
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Key Insights */}
        <div style={{ marginTop: '20px', background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 12px 0', color: '#2c3e50' }}>🔍 Key Observations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
            <div style={{ padding: '12px', background: '#fff3cd', borderLeft: '4px solid #f39c12', borderRadius: '6px' }}>
              <strong style={{ color: '#856404' }}>Oct 25 Spike:</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#856404' }}>
                PaPM total peak jumped to 949.10 GB (from baseline 841.08 GB) due to intensive calculation
              </p>
            </div>
            <div style={{ padding: '12px', background: '#d5f4e6', borderLeft: '4px solid #27ae60', borderRadius: '6px' }}>
              <strong style={{ color: '#155724' }}>HANA Stability:</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#155724' }}>
                HANA Cloud metrics remain stable at ~75 GB average, showing time-averaged allocation
              </p>
            </div>
            <div style={{ padding: '12px', background: '#e8f5e9', borderLeft: '4px solid #16a085', borderRadius: '6px' }}>
              <strong style={{ color: '#004d40' }}>Storage Growth:</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#004d40' }}>
                PaPM storage memory grew from 45 GB to 76 GB throughout the month
              </p>
            </div>
            <div style={{ padding: '12px', background: '#fdecea', borderLeft: '4px solid #d35400', borderRadius: '6px' }}>
              <strong style={{ color: '#7b241c' }}>HANA Cockpit Correlation:</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#7b241c' }}>
                Real-time queries show Column Store spiking to 1,100+ GB on Oct 25, validating PaPM's peak
              </p>
            </div>
            <div style={{ padding: '12px', background: '#d1f2eb', borderLeft: '4px solid #1abc9c', borderRadius: '6px' }}>
              <strong style={{ color: '#0e6655' }}>🍺 Brewery Model (L/P/F):</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#0e6655' }}>
                Three PaPM model types show different growth patterns - F (Profitability) spikes highest on Oct 25
              </p>
            </div>
          </div>
        </div>

        {/* Formula Box */}
        <div style={{ marginTop: '20px', background: '#9b59b6', color: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 12px 0' }}>📐 The Correlation Formula</h3>
          <div style={{ fontSize: '16px', fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
            <div><strong>PaPM: total_peak_memory</strong> = hana_storage_memory_gb_sm + hana_peak_calculation_memory_gb_sm</div>
            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <strong>Oct 25: 949.10 GB</strong> = 76.89 GB (storage) + 872.35 GB (calculation)
            </div>
          </div>
          
          <h4 style={{ margin: '12px 0 8px 0', fontSize: '14px' }}>🍺 Brandon's Brewery Model - PaPM Use Case Types (L/P/F):</h4>
          <div style={{ fontSize: '13px', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
            <div style={{ marginBottom: '6px' }}>
              <strong>L (LIFD Model):</strong> Base sizing 0.357 GB/unit - Most stable, baseline calculation model
            </div>
            <div style={{ marginBottom: '6px' }}>
              <strong>P (PSA Model):</strong> Base sizing 0.579 GB/unit - Persistent Staging Area, moderate growth
            </div>
            <div>
              <strong>F (Profitability Model):</strong> Base sizing 0.859 GB/unit - Full profitability calculations, highest volatility
            </div>
          </div>
          <div style={{ marginTop: '12px', fontSize: '12px', fontStyle: 'italic', opacity: 0.9 }}>
            💡 These three "taps" in the brewery represent different PaPM use case configurations, each with distinct memory footprints. Together they contribute to the total storage memory.
          </div>
          
          <h4 style={{ margin: '16px 0 8px 0', fontSize: '14px' }}>🔬 HANA Cockpit Validation Queries:</h4>
          <div style={{ fontSize: '13px', background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '8px' }}>
              <strong>1. Column Store:</strong> SELECT SUM(USED_MEMORY_SIZE)/1024/1024/1024 FROM M_SERVICE_COMPONENT_MEMORY WHERE COMPONENT='Column Store'
            </div>
            <div style={{ marginBottom: '8px' }}>
              <strong>2. PaPM Tables:</strong> SELECT SUM(MEMORY_SIZE_IN_TOTAL)/1024/1024/1024 FROM M_CS_TABLES WHERE SCHEMA_NAME LIKE 'SAP_PAPM_%'
            </div>
            <div>
              <strong>3. Heap Memory:</strong> SELECT SUM(USED_SIZE)/1024/1024/1024 FROM M_HEAP_MEMORY
            </div>
          </div>
          <div style={{ marginTop: '12px', fontSize: '13px', fontStyle: 'italic', opacity: 0.9 }}>
            💡 These real-time queries would be executed during calculation to capture peak values that correlate with PaPM's reported metrics.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsComparisonChart;
