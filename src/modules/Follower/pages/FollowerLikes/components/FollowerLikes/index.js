import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import LikedPosts from '~/modules/Post/pages/LikedPosts';
import DisLikedPosts from '~/modules/Post/pages/DisLikedPosts';
import Header from '~/components/Header';

import Tabs from '../Tabs';
import Follower from '../Follower';
import styles from './styles';

const FollowerLikesContainer = ({ classes, match }) => {
  const { username, tab } = match.params;

  if (!tab) {
    return <Redirect to={`/follower-likes/${username}/likes`} />;
  }

  return (
    <div className={classes.container}>
      <Header />
      <Follower username={username} />
      <Paper square className={classes.tabsContainer}>
        <Tabs username={username} tab={tab}>
          <Route exact path="/follower-likes/:username/likes" component={LikedPosts} />
          <Route exact path="/follower-likes/:username/dislikes" component={DisLikedPosts} />
        </Tabs>
      </Paper>
    </div>
  );
};

FollowerLikesContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tab: PropTypes.string,
    }).isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowerLikesContainer);
