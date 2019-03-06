import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import followers from './followers'
import page from './page'
import count from './count'

const reducer = combineReducers({
  followers,
  page,
  count,
  form: reduxFormReducer,
})

export default reducer
