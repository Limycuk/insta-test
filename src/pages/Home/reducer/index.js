import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import data from './data'
import page from './page'
import count from './count'

const reducer = combineReducers({
  data,
  page,
  count,
  form: reduxFormReducer,
})

export default reducer
