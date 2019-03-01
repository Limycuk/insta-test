import { reducer as reduxFormReducer } from 'redux-form'
import { combineReducers } from 'redux'

import pages from './pages'

const reducer = combineReducers({
  pages,
  form: reduxFormReducer,
})

export default reducer
