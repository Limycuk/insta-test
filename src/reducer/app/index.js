import { combineReducers } from 'redux';

import deviceInfo from './deviceInfo';
import isOpenLeftMenu from './isOpenLeftMenu';

const reducer = combineReducers({
  deviceInfo,
  isOpenLeftMenu,
});

export default reducer;
