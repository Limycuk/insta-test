import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FollowerCard from '~/modules/Follower/components/FollowerCard';
import getFollowerByUsername from '~/modules/Follower/hooks/getFollowerByUsername';

import styles from './styles';

const FollowerContainer = ({ classes, username }) => {
  const follower = getFollowerByUsername(username);

  return <div className={classes.container}>{follower && <FollowerCard item={follower} />}</div>;
};

FollowerContainer.propTypes = {
  username: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(FollowerContainer);
