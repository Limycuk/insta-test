import { takeLatest, all, put, select } from 'redux-saga/effects';

import data_04_01_2019 from '~/data/04-01-2019';

import * as actions from '../actions';
import * as selectors from '../selectors';
import { USERS_LIMIT } from '../constants';

function* initData() {
  const data = data_04_01_2019;

  yield put(
    actions.setData({
      data: data.slice(0, USERS_LIMIT),
      count: data.length
    })
  );
}

function* loadData() {
  const data = data_04_01_2019;

  const page = yield select(selectors.getPage);

  yield put(
    actions.updateData({
      data: data.slice(page * USERS_LIMIT, (page + 1) * USERS_LIMIT)
    })
  );
}

export default function*() {
  yield all([
    takeLatest(actions.initData, initData),
    takeLatest(actions.changePage, loadData)
  ]);
}
