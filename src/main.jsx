import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Importe o componente App


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolva o App com BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);