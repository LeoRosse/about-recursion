import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import './index.scss';
import { Routes } from './routes';
import { store } from './store/store';
import { client } from './clients/graphql-client';

const Entry = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Provider>
);

export default Entry;
