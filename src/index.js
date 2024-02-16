import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>
</React.StrictMode>,
);

reportWebVitals();
