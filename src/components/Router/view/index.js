/* global process */
import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '~/pages/Home'
import FollowerLikes from '~/modules/Follower/pages/FollowerLikes'

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/follower-likes/:username" component={FollowerLikes} />
      </Fragment>
    </BrowserRouter>
  )
}

export default Router
