import { createAction } from 'redux-actions';

import { APP_NAMESPACE } from '../constants';

export const changeDeviceInfo = createAction(APP_NAMESPACE + 'CHANGE_DEVICE_INFO');
