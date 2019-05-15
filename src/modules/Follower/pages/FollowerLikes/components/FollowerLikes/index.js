import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import Follower from '../Follower';
import styles from './styles';

const FollowerLikesContainer = ({ classes, match }) => {
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <div>Сайтик</div>
        </Toolbar>
      </AppBar>
      <Follower username={match.params.username} />
    </div>
  );
};

FollowerLikesContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowerLikesContainer);
