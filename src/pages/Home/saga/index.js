import { takeLatest, all, put, select } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'

import data_04_01_2019 from '~/data/04-01-2019'

import * as actions from '../actions'
import * as selectors from '../selectors'
import { USERS_LIMIT, FORM_NAME } from '../constants'

function* initData() {
  const data = data_04_01_2019

  yield put(
    actions.setData({
      data: data.slice(0, USERS_LIMIT),
      count: data.length,
    }),
  )
}

function* loadData() {
  let data = data_04_01_2019

  const page = yield select(selectors.getPage)
  const filters = yield select(getFormValues(FORM_NAME))

  if (filters.likesFrom) {
    const likesFrom = parseInt(filters.likesFrom)
    console.log({ likesFrom })
    data = data.filter((item) => likesFrom >= item.likes)
    console.log({ data })
  }

  data = data.slice(page * USERS_LIMIT, (page + 1) * USERS_LIMIT)

  yield put(
    actions.updateData({
      data,
    }),
  )
}

export default function*() {
  yield all([
    takeLatest(actions.initData, initData),
    takeLatest(actions.changePage, loadData),
    takeLatest(actions.filterData, loadData),
  ])
}
