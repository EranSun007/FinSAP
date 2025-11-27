# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **demo application** for showcasing SAP BTP financial operations dashboards. It's designed as a playground for prototyping features and demonstrating UI/UX concepts to stakeholders - not for production use.

## Development Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Tab-Based Navigation System

The application uses a **centralized view management system** where the entire UI is controlled by a single `activeView` state in App.jsx:

```
App.jsx (activeView state)
  ├─> Navigation.jsx (sets activeView via onNavigate)
  └─> MainContainer.jsx (renders page based on activeView)
        └─> Lazy-loaded page components
```

**Key points:**
- Navigation items in Navigation.jsx map to view IDs (e.g., 'overview', 'papm', 'service-manager')
- MainContainer.jsx has a switch statement that renders the appropriate page component
- All navigation is in-memory - no routing library is used
- Joule is a special UI element (slide-in chat panel) toggled separately from activeView

### Data Architecture

This app uses **mock data generators** - there is no backend or API layer. Each feature has dedicated data modules in `src/data/`:

- Data modules export pure JavaScript objects or generator functions
- Data is imported directly into page components
- Pattern: `[featureName]Data.js` for static data, `[featureName]DataGenerator.js` for dynamic data

Example:
```javascript
// src/data/forecastData.js
export const forecastBreakdown = {
  labels: ['Exploration SBX', 'Cursor DEV', ...],
  data: [35.8, 13.2, ...],
  colors: ['#0070f2', '#e8743b', ...]
};
```

### Component Structure

**Layout Components** (src/components/layout/):
- `Header.jsx` - Top application header with logo
- `Navigation.jsx` - Horizontal navigation bar with dropdowns
- `MainContainer.jsx` - Page wrapper with lazy loading and suspense
- `JouleChat.jsx` - Slide-in AI assistant panel

**UI Components** (src/components/ui/):
Reusable building blocks like Card, Table, Button, ProgressBar, Dropdown

**Chart Components** (src/components/charts/):
Chart.js wrappers like DonutChart, BarLineChart, MetricsChart

**Page Components** (src/pages/):
Each page follows a **consistent folder structure** - every page has its own folder with an `index.jsx` file, even if it's a single component. This provides room for growth and maintains predictability.

```
src/pages/
├── Overview/
│   ├── index.jsx
│   ├── ForecastTable.jsx
│   ├── CostForecast.jsx
│   └── ...
├── ServiceManager/
│   ├── index.jsx
│   ├── ServiceManagerTable.jsx
│   └── ...
├── Signavio/
│   └── index.jsx          # Single component, but in folder
└── ...
```

### CSS Architecture

- **CSS Modules** for component-scoped styles (e.g., `Button.module.css`)
- **global.css** defines CSS variables for SAP Fiori design system colors:
  - `--sap-blue`, `--sap-green`, `--sap-orange`, etc.
  - `--sap-bg`, `--sap-white`, `--sap-text`
- **File naming**: Match component name (e.g., `MainContainer.module.css` for MainContainer.jsx)

### State Management Pattern

This application uses **component-level state only** (useState hooks):
- `activeView` state in App.jsx controls page navigation
- `selectedService` state in App.jsx for drill-down views (e.g., service details)
- Individual pages manage their own local state (filters, selections, etc.)

**Inter-component communication**:
- Props drilling from App.jsx to pass `onNavigate` and `onServiceSelect` callbacks
- No global state management library (Redux, Context, etc.)

## Adding New Features

The navigation and routing system is centralized in configuration files for easy maintenance. All view IDs are defined as constants to prevent typos.

### 1. Add View Constant

Update `src/constants/views.js`:
```javascript
export const VIEWS = {
  // Add your new view constant
  MY_FEATURE: 'my-feature',
  // ... other views
};
```

### 2. Add Navigation Entry

Update `src/config/navigation.config.js`:
```javascript
import { VIEWS } from '../constants/views';

export const navigationConfig = [
  // Add direct navigation item:
  {
    id: VIEWS.MY_FEATURE,
    label: 'My Feature',
    type: 'direct'
  },

  // Or add to existing dropdown:
  {
    id: NAV_GROUPS.EXISTING_DROPDOWN,
    label: 'Existing Dropdown',
    type: 'dropdown',
    items: [
      { id: VIEWS.MY_FEATURE, label: 'My Feature' }
    ]
  }
];
```

### 3. Register Route

Update `src/config/routes.config.js`:
```javascript
import { VIEWS } from '../constants/views';

// Import your component
const MyFeature = lazy(() => import('../pages/MyFeature'));

// Add to routes object
export const routes = {
  [VIEWS.MY_FEATURE]: {
    component: MyFeature,
    requiresProps: [] // Or ['onNavigate', 'onServiceSelect', 'serviceId']
  },
  // ... other routes
};
```

### 4. Create Page Component

Create `src/pages/MyFeature/index.jsx` (and sub-components if needed).

### 5. Create Data Module (if needed)

Create `src/data/myFeatureData.js` with exported data objects.

### 6. Add Styles

Create `src/styles/pages/MyFeature.module.css` for page-specific styles.

### Using View Constants in Components

When navigating programmatically in your components, always use view constants:

```javascript
import { VIEWS } from '../../constants/views';

function MyComponent({ onNavigate }) {
  const handleClick = () => {
    onNavigate(VIEWS.SERVICE_DETAILS); // ✓ Good - uses constant
    // onNavigate('service-details');   // ✗ Bad - hardcoded string
  };

  return <button onClick={handleClick}>View Details</button>;
}
```

**Benefits:**
- IDE autocomplete for view IDs
- Compile-time errors for typos
- Easy refactoring (change constant, not strings everywhere)
- Self-documenting code

## File Size Guidelines

The project follows a **micro-file philosophy** optimized for AI-assisted development:
- Components: 50-150 lines
- Data modules: 50-200 lines
- Pages: Split into sub-components if > 200 lines

This makes files easier for AI IDEs to understand and modify in context.

## Design System

Follows **SAP Fiori design guidelines**:
- Use CSS variables from global.css for colors
- Font: '72', 'Roboto', sans-serif
- Consistent spacing and shadows
- Professional, enterprise UI aesthetic

## Code Quality

### PropTypes Validation

All components use PropTypes for runtime type checking:

```javascript
import PropTypes from 'prop-types';

function Button({ children, onClick, variant = 'default' }) {
  // ...
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger'])
};

Button.defaultProps = {
  onClick: undefined,
  variant: 'default'
};
```

**Benefits:**
- Catches prop type errors during development
- Self-documenting component APIs
- Better IDE autocomplete

### Data Module Conventions

Data modules follow clear naming conventions:
- `[feature]Data.js` - Exports static objects/arrays (e.g., `forecastData.js`, `topServicesData.js`)
- `[feature]Generator.js` - Exports functions that generate data (e.g., `papmDataGenerator.js`)

## Technology Choices

- **React 18** with functional components and hooks
- **Vite** for fast HMR and builds
- **Chart.js** (via react-chartjs-2) for data visualization
- **CSS Modules** for styling
- **PropTypes** for runtime type validation
- **No routing library** - tab-based navigation only
- **No state management library** - component state only
- **No backend** - mock data generators only
