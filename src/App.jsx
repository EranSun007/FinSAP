import { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import MainContainer from './components/layout/MainContainer';
import JouleChat from './components/layout/JouleChat';
import { VIEWS } from './constants/views';

function App() {
  const [activeView, setActiveView] = useState(VIEWS.WORKZONE_DETAILS);
  const [isJouleOpen, setIsJouleOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleJoule = () => {
    setIsJouleOpen(!isJouleOpen);
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setActiveView(VIEWS.SERVICE_DETAILS);
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
      <MainContainer
        activeView={activeView}
        onNavigate={setActiveView}
        selectedService={selectedService}
        onServiceSelect={handleServiceSelect}
      />
      <JouleChat isOpen={isJouleOpen} onClose={toggleJoule} />
    </div>
  );
}

export default App;

