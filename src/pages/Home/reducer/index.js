import { combineReducers } from 'redux'

import followers from './followers'
import page from './page'
import count from './count'
import maxCount from './maxCount'
import usernameSuggestions from './usernameSuggestions'
import filters from './filters'

const reducer = combineReducers({
  followers,
  page,
  count,
  maxCount,
  usernameSuggestions,
  filters,
})

export default reducer
