import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import Context from './Context.jsx'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
   
  </React.StrictMode>
);


