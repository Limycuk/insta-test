import { takeLatest, all, put, select, call } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'

import data_04_01_2019 from '~/data/04-01-2019'

import * as actions from '../actions'
import * as selectors from '../selectors'
import { FOLLOWERS_LIMIT, FORM_NAME } from '../constants'
import filterFollowers from '../services/filterFollowers'
import sortFollowers from '../services/sortFollowers'
import paginateFollowers from '../services/paginateFollowers'

function* loadData() {
  const followers = data_04_01_2019

  const page = yield select(selectors.getPage)
  const formValues = yield select(getFormValues(FORM_NAME))

  const filteredFollowers = yield call(filterFollowers, followers, formValues)
  const sortedFollowers = yield call(sortFollowers, filteredFollowers, formValues)
  const paginatedFollowers = yield call(paginateFollowers, sortedFollowers, page, FOLLOWERS_LIMIT)

  yield put(
    actions.updateData({
      followers: paginatedFollowers,
      count: filteredFollowers.length,
    }),
  )
}

export default function*() {
  yield all([
    takeLatest(actions.initData, loadData),
    takeLatest(actions.changePage, loadData),
    takeLatest(actions.filterData, loadData),
  ])
}
