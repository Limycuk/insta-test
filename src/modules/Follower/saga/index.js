import { all } from 'redux-saga/effects'

import FollowerLikesPage from '../pages/FollowerLikes/saga'

export default function*() {
  yield all([FollowerLikesPage()])
}
