import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PokeProvider } from './PokeContext';

ReactDOM.render(
  <PokeProvider>
    <App />
  </PokeProvider>,
  document.getElementById('root')
);
