import { handleActions } from 'redux-actions'

import * as actions from '../actions'

const defaultState = []

export default handleActions(
  {
    [actions.setData]: (state, action) => {
      return action.payload.data
    },
    [actions.updateData]: (state, action) => {
      return [...state, ...action.payload.data]
    },
  },
  defaultState,
)
