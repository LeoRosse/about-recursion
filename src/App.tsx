import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { audience } from './audience';

import { RecursiveComponent } from './components/recursive-component';

import './index.scss';
import { store } from './store/store';

const App = () => (
  <Provider store={store}>
    <>
      <RecursiveComponent containers={audience.containers} />
    </>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
