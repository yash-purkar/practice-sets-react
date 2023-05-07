import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MenuContextProvider } from './Contexts/MenuContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </Router>
  </StrictMode>
);
