import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
