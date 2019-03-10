import { reducer as reduxFormReducer } from 'redux-form'
import { combineReducers } from 'redux'

import pages from './pages'
import app from './app'

const reducer = combineReducers({
  app,
  pages,
  form: reduxFormReducer,
})

export default reducer
