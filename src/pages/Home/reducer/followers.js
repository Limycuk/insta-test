import { handleActions } from 'redux-actions'

import * as actions from '../actions'

const defaultState = []

export default handleActions(
  {
    [actions.filterData]: () => {
      return defaultState
    },
    [actions.updateData]: (state, action) => {
      return [...state, ...action.payload.followers]
    },
  },
  defaultState,
)
