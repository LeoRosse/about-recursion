import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import { returnRoutes } from './routes';
import { store } from './store/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>{returnRoutes()}</BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
