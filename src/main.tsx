import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes';
import ThemeProvider from './theme';
import './styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>
);
