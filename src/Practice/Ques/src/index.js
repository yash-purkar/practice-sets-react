import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideosContextProvider } from './Contexts/VideosContext';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <VideosContextProvider>
        <App />
      </VideosContextProvider>
    </Router>
  </StrictMode>
);
