import { handleActions } from 'redux-actions'

import * as actions from '../actions'

const defaultState = 0

export default handleActions(
  {
    [actions.filterData]: () => {
      return defaultState
    },
    [actions.changePage]: (state, action) => {
      return action.payload.page
    },
  },
  defaultState,
)
