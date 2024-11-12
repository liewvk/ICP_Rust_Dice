// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

// Retrieve the backend canister ID from environment variables
const backendCanisterId = import.meta.env.VITE_BACKEND_CANISTER_ID;

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App backendCanisterId={backendCanisterId} />
  </React.StrictMode>
);














