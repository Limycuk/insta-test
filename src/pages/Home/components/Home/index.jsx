import React from 'react';

import Header from '~/components/Header';
import DataFiltersForm from '~/modules/DataFilters/components/DataFiltersForm';

import FollowersChart from '../FollowersChart';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.chart}>
        <FollowersChart />
      </div>
      <div>
        <DataFiltersForm />
      </div>
    </div>
  );
};

export default Home;
