import { createAction } from 'redux-actions'

import { NAMESPACE } from '../constants'

export const initData = createAction(NAMESPACE + 'INIT_DATA')
export const setData = createAction(NAMESPACE + 'SET_DATA')
export const updateData = createAction(NAMESPACE + 'UPDATE_DATA')
export const changePage = createAction(NAMESPACE + 'CHANGE_PAGE')
export const filterData = createAction(NAMESPACE + 'FILTER_DATA')
export const hangleUserAutocomplete = createAction(NAMESPACE + 'HANDLE_USER_AUTOCOMPLETE')
export const saveUsernameSuggestions = createAction(NAMESPACE + 'SAVE_USERNAME_SUGGESTIONS')
export const saveFilters = createAction(NAMESPACE + 'SAVE_FILTERS')
export const removeFilter = createAction(NAMESPACE + 'REMOVE_FILTER')
