import { all } from 'redux-saga/effects';

import pagesSaga from '~/pages/Home/saga';

export default function*() {
  yield all([pagesSaga()]);
}
