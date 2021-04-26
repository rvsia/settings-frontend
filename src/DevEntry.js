import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './App';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
import logger from 'redux-logger';

const Settings = () => (
  <Provider store={init(logger).getStore()}>
    <BrowserRouter basename={getBaseName(window.location.pathname, 1)}>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Settings;
