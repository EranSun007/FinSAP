# SAP BTP Financial Operations Demo

A modular React application showcasing SAP BTP financial operations dashboards, designed as a playground for demonstrating new features before development.

## 🎯 Purpose

This is a **demo application** - not a production app. It serves as a playground to:
- Showcase financial operations features
- Prototype new functionality
- Demonstrate UI/UX concepts
- Test ideas with stakeholders

## 🏗️ Architecture

### Modular Structure (AI IDE Optimized)

The project is organized into small, focused files (50-200 lines each) optimized for AI-assisted development:

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Navigation, MainContainer
│   ├── ui/            # Card, Table, Button, ProgressBar, Dropdown
│   └── charts/        # DonutChart, BarLineChart, MetricsChart
├── pages/             # Feature pages (loaded by tabs)
│   ├── Overview/      # Dashboard with forecasts and metrics
│   ├── Harvesting/    # License harvesting management
│   ├── PaPM/          # Performance management analytics
│   └── [others]       # SAM, Signavio, SAC placeholders
├── data/              # Data modules (single responsibility)
├── styles/            # CSS modules (scoped styling)
│   ├── global.css
│   ├── components/
│   └── pages/
└── hooks/             # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📊 Features

### Overview Dashboard
- Top 5 credit forecasts
- License harvesting opportunities preview
- Forecast breakdown by directory (donut chart)
- Cost and forecast trends (bar/line chart)

### Harvesting Page
- Interactive license management
- Inactive user tracking
- No log-on user identification
- Bulk selection and tagging
- Multiple license types (SAC, Signavio, Business AI)

### PaPM Analytics
- Interactive metrics comparison
- 13+ metrics across 4 categories:
  - PaPM metrics
  - PaPM Model Types (L/P/F - Brewery Model)
  - HANA Cloud (UDM)
  - HANA Cockpit (Live)
- Dynamic chart controls
- Insights by time period
- Formula explanations

### Placeholder Pages
- Service and Asset Manager
- Signavio Process Transformation
- SAP Analytics Cloud

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Chart.js** - Data visualization
- **CSS Modules** - Scoped styling
- **SAP Fiori Design** - UI/UX guidelines

## 📝 Development Guidelines

### Adding New Features

1. **Create Page Component**
   ```
   src/pages/NewFeature/index.jsx
   ```

2. **Add Sub-components** (if needed)
   ```
   src/pages/NewFeature/Component1.jsx
   src/pages/NewFeature/Component2.jsx
   ```

3. **Add Data Module**
   ```
   src/data/newFeatureData.js
   ```

4. **Add Styles**
   ```
   src/styles/pages/NewFeature.module.css
   ```

5. **Register in Navigation**
   Update `src/components/layout/Navigation.jsx` and `MainContainer.jsx`

### File Size Guidelines
- Components: 50-150 lines
- Data modules: 50-200 lines
- Pages: Split into sub-components if > 200 lines

### CSS Conventions
- Use CSS modules for component-specific styles
- Use global.css for shared utilities
- Follow SAP Fiori color scheme (CSS variables)

## 🔧 Configuration

### Vite Config
Hot module replacement (HMR) enabled for instant updates during development.

### Port
Default: `5173` (configurable in `vite.config.js`)

## 📦 Project Structure Benefits

- **AI-Friendly**: Small files are easy for AI IDEs to understand and modify
- **Modular**: Each feature is self-contained
- **Scalable**: Easy to add new demo features
- **Maintainable**: Clear separation of concerns
- **Fast**: Vite provides instant hot reloading

## 🎭 Demo Mode

This application is intentionally structured as a demo:
- Mock data generators (no backend)
- Simulated user interactions
- Alert/confirm dialogs for actions
- Easy to swap data for different scenarios

## 🤝 Contributing

When adding new features:
1. Keep files small and focused
2. Use descriptive component names
3. Create reusable components when possible
4. Add CSS modules for new components
5. Update this README

## 📄 License

This is a demonstration project for internal use.

