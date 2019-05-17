import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';

import modules from './modules';
import app from './app';

const reducer = combineReducers({
  app,
  modules,
  form: reduxFormReducer,
});

export default reducer;
