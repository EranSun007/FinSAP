import { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import MainContainer from './components/layout/MainContainer';
import JouleChat from './components/layout/JouleChat';

function App() {
  const [activeView, setActiveView] = useState('overview');
  const [isJouleOpen, setIsJouleOpen] = useState(false);

  const toggleJoule = () => {
    setIsJouleOpen(!isJouleOpen);
  };

  return (
    <div className="app">
      <Header />
      <Navigation 
        activeView={activeView} 
        onNavigate={setActiveView}
        isJouleOpen={isJouleOpen}
        onToggleJoule={toggleJoule}
      />
      <MainContainer activeView={activeView} />
      <JouleChat isOpen={isJouleOpen} onClose={toggleJoule} />
    </div>
  );
}

export default App;

