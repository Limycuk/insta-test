import { all } from 'redux-saga/effects';

import pagesSaga from './pages';

export default function*() {
  yield all([pagesSaga()]);
}
