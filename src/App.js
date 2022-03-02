import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingContext';
import { WalletProvider } from './contexts/WalletContext';
import Routes from './Routes';
import ThemeConfig from './theme';

export default function App() {
  return (
    <ThemeConfig>
      <LoadingProvider>
        <WalletProvider>
          <Router>
            <Routes />
          </Router>
        </WalletProvider>
      </LoadingProvider>
    </ThemeConfig>
  );
}
