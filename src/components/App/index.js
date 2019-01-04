import React from 'react';
import { Provider } from 'react-redux';

import Router from '../Router';
import createStore from '../../store';

const { store } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
