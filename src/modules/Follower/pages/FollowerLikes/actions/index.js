import { createAction } from 'redux-actions'

import { NAMESPACE } from '../constants'

export const loadUserByUsername = createAction(NAMESPACE + 'LOAD_USER_BY_USERNAME')
