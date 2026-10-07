// src/main.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { LedgerProvider } from './context/LedgerContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

import LandingPage from './views/marketing/LandingPage';
import ComingSoon from './views/ComingSoon';

const App = () => {
  const [currentView, setCurrentView] = useState<'marketing' | 'comingsoon'>('marketing');

  return (
    <LedgerProvider>
      <div style={{
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: '#020617',
        position: 'relative'
      }}>
        <AnimatePresence mode="wait">
          {currentView === 'marketing' && (
            <ErrorBoundary key="marketing-boundary">
              <LandingPage
                key="marketing"
                onGetStarted={() => setCurrentView('comingsoon')}
              />
            </ErrorBoundary>
          )}

          {currentView === 'comingsoon' && (
            <ErrorBoundary key="comingsoon-boundary">
              <ComingSoon
                key="comingsoon"
                onBack={() => setCurrentView('marketing')}
              />
            </ErrorBoundary>
          )}
        </AnimatePresence>
      </div>
    </LedgerProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
