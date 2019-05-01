import { all } from 'redux-saga/effects'

import FollowerModule from '~/modules/Follower/saga'

export default function*() {
  yield all([FollowerModule()])
}
