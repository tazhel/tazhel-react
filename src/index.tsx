import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TazhelProvider from './context/tazhelProvider';

ReactDOM.render(
  <React.StrictMode>
    <TazhelProvider>
      <App />
    </TazhelProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
