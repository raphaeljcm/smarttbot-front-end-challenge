import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PaginationProvider } from './hooks/usePagination';
import { RobotProvider } from './hooks/useRobot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginationProvider>
      <RobotProvider>
        <App />
      </RobotProvider>
    </PaginationProvider>
  </React.StrictMode>
);