import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RobotProvider } from './hooks/useRobot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RobotProvider>
      <App />
    </RobotProvider>
  </React.StrictMode>
);