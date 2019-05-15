import React from 'react';
import PropTypes from 'prop-types';

import MaterialCard from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import { AsyncImage } from '~/packages/UI';

import styles from './styles';

const PostCard = ({ post, classes }) => {
  const imageProps = {
    src: 'https://instagram.com/p/' + post.shortcode + '/media/?size=t',
    alt: post.id,
    className: classes.avatar,
  };

  return (
    <MaterialCard className={classes.card}>
      <a
        href={'https://instagram.com/p/' + post.shortcode}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <AsyncImage imageProps={imageProps} />
      </a>
    </MaterialCard>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    display_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shortcode: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(React.memo(PostCard));
