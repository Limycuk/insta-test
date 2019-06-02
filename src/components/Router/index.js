/* global process */

import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import FollowerList from '~/modules/Follower/pages/FollowerList';
import FollowerLikes from '~/modules/Follower/pages/FollowerLikes';
import Retention from '~/modules/Post/pages/Retention';

import LeftDrawer from '../LeftDrawer';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <LeftDrawer />
        <Route exact path="/" component={Home} />
        <Route exact path="/follower-list" component={FollowerList} />
        <Route exact path="/follower-likes/:username/:tab?" component={FollowerLikes} />

        <Route exact path="/statistics/retention" component={Retention} />
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
