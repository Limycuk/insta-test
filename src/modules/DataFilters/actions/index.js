import { createAction } from 'redux-actions';

import { NAMESPACE } from '../constants';

export const changeFilters = createAction(NAMESPACE + 'CHANGE_FILTERS');
