import { createAction } from 'redux-actions'

import { NAMESPACE } from '../constants'

export const initData = createAction(NAMESPACE + 'INIT_DATA')
export const setData = createAction(NAMESPACE + 'SET_DATA')
export const updateData = createAction(NAMESPACE + 'UPDATE_DATA')
export const changePage = createAction(NAMESPACE + 'CHANGE_PAGE')
export const filterData = createAction(NAMESPACE + 'FILTER_DATA')
