import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeAppProvider } from './context/ThemeContext';
import {store} from './redux/store/index'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeAppProvider>
        <App />
      </ThemeAppProvider>
    </Provider>
  </React.StrictMode>
)

