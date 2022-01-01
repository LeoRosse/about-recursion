import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import { Routes } from './routes';
import { store } from './store/store';

const Bootstrap = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>,
  document.getElementById('bootstrap'),
);
