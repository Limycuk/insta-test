import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PreviewPostCard from '~/modules/Post/components/PreviewPostCard';

import styles from './styles';
import getDisLikedPostsByUsername from './hooks/getDisLikedPostsByUsername';

const LikedPosts = ({ classes, match }) => {
  const { username } = match.params;

  const posts = getDisLikedPostsByUsername(username);

  return (
    <div className={classes.container}>
      {posts.map((post) => {
        return <PreviewPostCard key={post.shortcode} post={post} />;
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
