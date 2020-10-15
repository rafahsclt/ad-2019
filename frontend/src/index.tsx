import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import GlobalStyles from './styles/global'

import { AuthProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);