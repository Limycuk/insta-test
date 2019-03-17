import { combineReducers } from 'redux'

import followers from './followers'
import page from './page'
import count from './count'
import usernameSuggestions from './usernameSuggestions'
import filters from './filters'

const reducer = combineReducers({
  followers,
  page,
  count,
  usernameSuggestions,
  filters,
})

export default reducer
