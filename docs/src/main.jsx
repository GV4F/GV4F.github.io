import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-pmy16a1er7xwwipy.us.auth0.com"
    clientId="2dkynfTXseNGN9bLP7FIiQWOubvhFJ6i"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
