/* global process */

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import FollowerList from '~/modules/Follower/pages/FollowerList';
import FollowerLikes from '~/modules/Follower/pages/FollowerLikes';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Route exact path="/follower-list" component={FollowerList} />
        <Route exact path="/follower-likes/:username/:tab?" component={FollowerLikes} />
        <Redirect to="/follower-list" />
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
