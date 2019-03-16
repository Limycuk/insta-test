import { combineReducers } from 'redux'

import followers from './followers'
import page from './page'
import count from './count'
import usernameSuggestions from './usernameSuggestions'

const reducer = combineReducers({
  followers,
  page,
  count,
  usernameSuggestions,
})

export default reducer
