
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Define custom colors for Simply CIPC
document.documentElement.style.setProperty('--cipc-blue', '#1E4A9E');
document.documentElement.style.setProperty('--cipc-lightBlue', '#3A6BD6');
document.documentElement.style.setProperty('--cipc-darkBlue', '#0B2B68');
document.documentElement.style.setProperty('--cipc-gray', '#F5F5F7');

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
