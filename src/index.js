import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import MainSection from './MainSection';
import { GlobelProvider } from './Context/Globel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobelProvider>
      <MainSection />
    </GlobelProvider>
  </React.StrictMode>
);


