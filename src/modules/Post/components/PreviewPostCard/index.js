import React from 'react';
import PropTypes from 'prop-types';

import MaterialCard from '@material-ui/core/Card';

import { AsyncImage } from '~/packages/UI';

import useStyles from './styles';

const PreviewPostCard = ({ post }) => {
  const classes = useStyles();

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

PreviewPostCard.propTypes = {
  post: PropTypes.shape({
    display_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    shortcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(PreviewPostCard);
