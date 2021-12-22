import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { audience } from './audience';

import { RecursiveComponent } from './components/recursive-component';

import './index.scss';
import { store } from './store/store';

const App = () => {
  // const [policy, setPolicy] = React.useState<string>('private');
  // window.console.log(policy, 'policy');
  return (
    <Provider store={store}>
      <>
        {/* <div className="flex justify-between my-4">
          <div>Name: {audience.containers[0].containerInfo.title}</div>
          <div className="flex">
            <button onClick={() => setPolicy('public')}>public</button>
            <button onClick={() => setPolicy('private')}>private</button>
          </div>
        </div> */}
        <RecursiveComponent containers={audience.containers} />
      </>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
