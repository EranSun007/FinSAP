import { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import MainContainer from './components/layout/MainContainer';

function App() {
  const [activeView, setActiveView] = useState('overview');

  return (
    <div className="app">
      <Header />
      <Navigation activeView={activeView} onNavigate={setActiveView} />
      <MainContainer activeView={activeView} />
    </div>
  );
}

export default App;

