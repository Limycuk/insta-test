import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PostCard from '~/modules/Post/components/PostCard';

import styles from './styles';
import getLikedPostsByUsername from './hooks/getLikedPostsByUsername';

const LikedPosts = ({ classes, match }) => {
  const { username } = match.params;

  const posts = getLikedPostsByUsername(username);

  return (
    <div className={classes.container}>
      {posts.map((post) => {
        return <PostCard key={post.shortcode} post={post} />;
      })}
    </div>
  );
};

LikedPosts.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tab: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(LikedPosts);
