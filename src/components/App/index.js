import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import DeviceDetector from '../DeviceDetector';

import Router from '../Router';
import createStore from '../../store';
import theme from './theme';
import UpdaterRestDataFilters from '~/modules/DataFilters/components/UpdaterRestDataFilters';

const { store, persistor } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DeviceDetector />
        <MuiThemeProvider theme={theme}>
          <UpdaterRestDataFilters />
          <Router />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
