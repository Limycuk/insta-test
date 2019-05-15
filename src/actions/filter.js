import { createAction } from 'redux-actions';

import { FILTER_NAMESPACE } from '../constants';

export const changeDates = createAction(FILTER_NAMESPACE + 'CHANGE_DATES');
