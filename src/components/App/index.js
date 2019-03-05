import React from 'react'
import { Provider } from 'react-redux'

import { MuiThemeProvider } from '@material-ui/core/styles'

import Router from '../Router'
import createStore from '../../store'
import theme from './theme'

const { store } = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
