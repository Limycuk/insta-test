import { takeLatest, all, put } from 'redux-saga/effects'

import fullFollowersListWithLikes from '~/data/5-full-followers-list-with-likes.json'

import * as actions from '../actions'

function* loadUserByUsername(action) {
  const { username } = action.payload
  const followers = fullFollowersListWithLikes

  const follower = followers.find((follower) => {
    return follower.username === username
  })

  yield put(actions.saveFollower({ follower }))
}

export default function*() {
  yield all([takeLatest(actions.loadUserByUsername, loadUserByUsername)])
}
