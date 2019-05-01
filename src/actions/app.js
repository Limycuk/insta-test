import { createAction } from 'redux-actions';

import { NAMESPACE } from '../constants';

export const changeDeviceInfo = createAction(NAMESPACE + 'CHANGE_DEVICE_INFO');
