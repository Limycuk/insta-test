import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';
import { createFilter } from 'redux-persist-transform-filter';

const persistConfig = {
  key: 'redux',
  storage: localForage,
  transforms: [createFilter('modules', ['dataFilters'])],
};

import reducer from './reducer';

export default () => {
  const middlewares = applyMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(persistedReducer, composeEnhancers(middlewares));
  const persistor = persistStore(store);

  return { store, persistor };
};
