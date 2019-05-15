import React from 'react';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';

import DeviceDetector from '../DeviceDetector';

import Router from '../Router';
import createStore from '../../store';
import theme from './theme';
import FiltersContextProvider from '../FiltersContextProvider';

const { store } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <DeviceDetector />
      <MuiThemeProvider theme={theme}>
        <FiltersContextProvider>
          <Router />
        </FiltersContextProvider>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
