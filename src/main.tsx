
import React, { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import EnhancedUniverseIntro from './components/EnhancedUniverseIntro';
import './index.css';

const RootApp = () => {
  const [showIntro, setShowIntro] = useState(true);
    return (
      <StrictMode>
        {showIntro && <EnhancedUniverseIntro onFinish={() => setShowIntro(false)} />}
        {!showIntro && <App />}
      </StrictMode>
    );
};

createRoot(document.getElementById('root')!).render(
  <RootApp />
);
