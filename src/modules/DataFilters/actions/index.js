import { createAction } from 'redux-actions';

import { NAMESPACE } from '../constants';

export const changeDates = createAction(NAMESPACE + 'CHANGE_DATES');
