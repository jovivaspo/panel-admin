import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeAppProvider } from './context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  </React.StrictMode>
)

