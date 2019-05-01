import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { AsyncImage } from '~/packages/UI';

import styles from './styles';

const FollowerCard = ({ item, classes }) => {
  const imageProps = {
    src: item.avatar,
    alt: item.username,
    className: classes.avatar,
  };

  return (
    <MaterialCard className={classes.card}>
      <a
        href={'https://instagram.com/' + item.username}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <AsyncImage imageProps={imageProps} />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.username}
        </Typography>
        <p className={classes.name}>{item.fullName || '-'}</p>
        <ul className={classes.list}>
          <li>
            <b>{item.mediaCounts}</b> posts
          </li>
          <li>
            <b>{item.followers}</b> followers
          </li>
          <li>
            <b>{item.followings}</b> following
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <NavLink to={`/follower-likes/${item.username}`}>
              <b>{item.likes.count}</b> ({Math.floor(((item.likes.count * 100) / 50) * 100) / 100} %) likes
            </NavLink>
          </li>
          <li>
            <b>{50 - item.likes.count || '-'}</b> dislikes
          </li>
          <li />
        </ul>
      </CardContent>
    </MaterialCard>
  );
};

FollowerCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    mediaCounts: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    followings: PropTypes.number.isRequired,
    likes: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }).isRequired,
    comments: PropTypes.number.isRequired,
  }),
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(React.memo(FollowerCard));
