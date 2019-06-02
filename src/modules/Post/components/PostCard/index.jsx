import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { AsyncImage } from '~/packages/UI';

import useStyles from './styles';

const PostCard = ({ post, title, className }) => {
  const classes = useStyles();

  const imageProps = {
    src: 'https://instagram.com/p/' + post.shortcode + '/media/?size=t',
    alt: post.id,
    className: classes.avatar,
  };

  const followersLikesCount = post.likes.followers.length;
  const nonFollowersLikesCount = post.likes.nonFollowers.length;
  const likesCount = followersLikesCount + nonFollowersLikesCount;
  const followersPercent = Math.round((followersLikesCount * 100) / likesCount);
  const nonFollowersPercent = Math.round((nonFollowersLikesCount * 100) / likesCount);

  return (
    <MaterialCard className={classNames(classes.card, className)}>
      <a
        href={'https://instagram.com/p/' + post.shortcode}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <AsyncImage imageProps={imageProps} />
      </a>
      <CardContent className={classes.content}>
        {title && (
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
        )}
        <ul className={classes.list}>
          <li className={classes.likesLine}>
            <b>{likesCount}</b> <ThumbUpIcon className={classes.likeIcon} />
            &nbsp;(
            <b>
              {followersLikesCount} ({followersPercent}%)
            </b>
            &nbsp;foll +{' '}
            <b>
              {nonFollowersLikesCount} ({nonFollowersPercent}%)
            </b>
            &nbsp;non foll)
          </li>
        </ul>
      </CardContent>
    </MaterialCard>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    display_url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    likes: PropTypes.object.isRequired,
  }).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default React.memo(PostCard);
