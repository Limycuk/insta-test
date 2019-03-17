import { handleActions } from 'redux-actions'

import * as actions from '../actions'

const defaultState = {}

export default handleActions(
  {
    [actions.saveFilters]: (state, action) => {
      return action.payload.filters
    },
  },
  defaultState,
)
