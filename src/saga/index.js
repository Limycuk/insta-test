import { all } from 'redux-saga/effects';

import pagesSaga from './pages';
import modulesSaga from './modules';

export default function*() {
  yield all([pagesSaga(), modulesSaga()]);
}
