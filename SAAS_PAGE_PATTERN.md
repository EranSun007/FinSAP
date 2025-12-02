# SaaS Subscription Page Pattern

This document describes the reusable pattern for creating SaaS subscription product pages (like PaPM, Signavio, SAC, etc.) in the Cloud FinOps application.

## Architecture Overview

Each SaaS product page follows a consistent structure with these components:

```
src/pages/{ProductName}/
├── index.jsx                 # Main page component (composition)
├── {ProductName}Header.jsx   # Page header with title and context
├── {ProductName}Sidebar.jsx  # Metric controls with accordion groups
├── {ProductName}Chart.jsx    # Time-series chart visualization
├── {ProductName}Insights.jsx # Key observations with period selector
├── {ProductName}Formula.jsx  # Product-specific technical details (optional)
└── use{ProductName}Chart.js  # Custom hook for chart state management

src/data/
├── {productName}MetricsData.js   # Metric definitions
├── {productName}DataGenerator.js # Time-series data generation
└── {productName}InsightsData.js  # Period-based insights

src/styles/pages/
└── {ProductName}.module.css      # Page-specific styles
```

## Step-by-Step Implementation Guide

### Step 1: Define Metrics (`src/data/{productName}MetricsData.js`)

```javascript
export const {productName}Metrics = [
  {
    key: 'metric_key',           // Unique identifier
    name: 'Display Name',        // Human-readable name
    color: '#hexcolor',          // Chart line color
    category: 'Category Name',   // Accordion group
    unit: 'unit',                // Display unit (GB, %, hours, etc.)
    strokeWidth: 2,              // Line thickness (1-3)
    strokeDasharray: [5, 5]      // Optional: dashed line pattern
  },
  // ... more metrics
];

export const {productName}Categories = [
  'Category 1',
  'Category 2',
  // ... category names in display order
];
```

### Step 2: Create Data Generator (`src/data/{productName}DataGenerator.js`)

```javascript
export function generate{ProductName}Data() {
  const days = 31; // October 2025
  const data = [];

  for (let day = 1; day <= days; day++) {
    // Generate realistic patterns based on:
    // - Weekends (lower activity)
    // - Month-end (higher volume)
    // - Special events (spikes/dips)
    
    data.push({
      day,
      metric_key: calculatedValue,
      // ... all metrics
    });
  }

  return data;
}
```

### Step 3: Create Insights (`src/data/{productName}InsightsData.js`)

```javascript
export const {productName}Insights = {
  'last-month': [
    {
      title: 'Insight Title',
      text: 'Detailed observation text...',
      color: '#hexcolor',      // Border color
      bg: '#bgColor',          // Background color
      textColor: '#textColor'  // Text color
    },
    // ... more insights
  ],
  'last-3-months': [...],
  'last-6-months': [...],
  'last-year': [...]
};
```

### Step 4: Create Components

#### Header Component
```jsx
import Icon from '../../components/ui/Icon';
import styles from '../../styles/pages/{ProductName}.module.css';

function {ProductName}Header() {
  return (
    <div className={styles.{productName}Header}>
      <h1><Icon name="icon-name" size="large" /> Product Full Name</h1>
      <p>Month Year - Description of what the dashboard shows</p>
    </div>
  );
}
```

#### Sidebar Component
Copy from `SignavioSidebar.jsx` or `PaPMSidebar.jsx` and update imports.

#### Chart Component
Copy from `SignavioChart.jsx` and update imports/metrics reference.

#### Insights Component
Copy from `SignavioInsights.jsx` and update imports.

#### Domain-Specific Component (Optional)
Create a unique component that explains product-specific concepts:
- PaPM: `PaPMFormula.jsx` - Memory calculation formulas
- Signavio: `SignavioProcessFlow.jsx` - Process flow visualization

### Step 5: Create Custom Hook (`use{ProductName}Chart.js`)

```javascript
import { useState, useMemo } from 'react';
import { generate{ProductName}Data } from '../../data/{productName}DataGenerator';
import { {productName}Metrics } from '../../data/{productName}MetricsData';

export function use{ProductName}Chart() {
  const [data] = useState(() => generate{ProductName}Data());
  const [visibleMetrics, setVisibleMetrics] = useState(() =>
    {productName}Metrics.reduce((acc, m) => ({ ...acc, [m.key]: true }), {})
  );
  const [scale, setScale] = useState('auto');

  // ... yAxisDomain calculation, toggleMetric, toggleCategory

  return { data, visibleMetrics, scale, setScale, yAxisDomain, toggleMetric, toggleCategory };
}
```

### Step 6: Create Styles

Copy `Signavio.module.css` and rename all class prefixes from `signavio` to `{productName}`.

### Step 7: Compose Main Page (`index.jsx`)

```jsx
import {ProductName}Header from './{ProductName}Header';
import {ProductName}Sidebar from './{ProductName}Sidebar';
import {ProductName}Chart from './{ProductName}Chart';
import {ProductName}Insights from './{ProductName}Insights';
import {ProductName}SpecialSection from './{ProductName}SpecialSection';
import { use{ProductName}Chart } from './use{ProductName}Chart';
import styles from '../../styles/pages/{ProductName}.module.css';

function {ProductName}() {
  const { data, visibleMetrics, scale, setScale, yAxisDomain, toggleMetric, toggleCategory } = use{ProductName}Chart();

  return (
    <div className={styles.{productName}Container}>
      <{ProductName}Header />
      <div className={styles.{productName}DashboardLayout}>
        <{ProductName}Sidebar
          visibleMetrics={visibleMetrics}
          scale={scale}
          onScaleChange={setScale}
          onToggleMetric={toggleMetric}
          onToggleCategory={toggleCategory}
        />
        <div className={styles.{productName}MainContent}>
          <{ProductName}Chart data={data} visibleMetrics={visibleMetrics} yAxisDomain={yAxisDomain} />
          <{ProductName}Insights />
          <{ProductName}SpecialSection />
        </div>
      </div>
    </div>
  );
}

export default {ProductName};
```

## Existing Implementations

| Product | Folder | Unique Feature |
|---------|--------|----------------|
| PaPM | `src/pages/PaPM/` | Formula section with SQL queries |
| Signavio | `src/pages/Signavio/` | Process flow visualization |

## Metrics Design Guidelines

### Color Palette
Use distinct colors per category. Suggested base colors:
- Red family: `#e74c3c`, `#c0392b`
- Blue family: `#3498db`, `#2980b9`
- Green family: `#27ae60`, `#16a085`
- Orange family: `#f39c12`, `#e67e22`, `#d35400`
- Purple family: `#9b59b6`, `#8e44ad`
- Gray family: `#34495e`, `#7f8c8d`, `#2c3e50`

### Line Styles
- **Solid lines**: Primary metrics
- **Dashed [5,5]**: Secondary/derived metrics
- **Dashed [8,4]**: External system metrics
- **Dashed [3,3]**: Calculated/intelligence metrics
- **Dashed [10,2]**: User engagement metrics

### Units
Common units: `GB`, `%`, `hours`, `count`, `processes/day`, `runs/day`, `users`, `views/day`

## Navigation Integration

Routes and navigation are already configured. New pages appear automatically in the SaaS Subscriptions dropdown. See:
- `src/constants/views.js` - View ID constants
- `src/config/navigation.config.js` - Navigation structure
- `src/config/routes.config.js` - Route definitions



