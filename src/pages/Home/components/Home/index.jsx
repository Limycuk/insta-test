import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Header from '~/components/Header';
import FollowersChart from '~/modules/Follower/components/FollowersChart';
import styles from './styles';

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.chart}>
        <FollowersChart />
      </div>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
