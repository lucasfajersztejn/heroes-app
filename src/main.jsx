import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
)
