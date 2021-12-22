import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { audience } from './audience';

import { RecursiveComponent } from './components/recursive-component';

import './index.scss';
import { store } from './store/store';

const App = () => (
  <Provider store={store}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <RecursiveComponent containers={audience.containers} />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
