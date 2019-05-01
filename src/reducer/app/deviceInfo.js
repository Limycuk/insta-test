/* global window */
import { handleActions } from 'redux-actions';

import * as appActions from '../../actions/app';
import calculateDevice from '../../services/calculateDevice';

const defaultState = calculateDevice(window.innerWidth);

export default handleActions(
  {
    [appActions.changeDeviceInfo]: (state, action) => {
      const { deviceInfo } = action.payload;

      return deviceInfo;
    },
  },
  defaultState,
);
