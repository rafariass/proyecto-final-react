import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.scss';
import App from './App';
import * as bootstrap from 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-6wdct7pjvco1o2ve.us.auth0.com'
      clientId='TyKWCz9RBnpXLUP18LRwGMQALn0AJEuL'
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
