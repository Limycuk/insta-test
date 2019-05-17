import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Header from '~/components/Header';
import DataFiltersContext from '~/modules/DataFilters/contexts/DataFilters';
import rest from '~/packages/rest';

import { FORM_NAME } from '../../constants';
import connect from './connect';
import CardList from '../CardList';
import FilterList from '../FilterList';
import FilterValues from '../FilterValues';
import styles from './styles';

const FollowerList = ({ classes, changeForm }) => {
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(0);
  const [followersData, setFollowersData] = useState({ followers: [], count: 0, maxCount: 0 });

  const dataFilters = useContext(DataFiltersContext);
  useEffect(() => {
    rest.Follower.fetchFollowersByFilters({
      followersFilters: filters,
      page,
      filters: dataFilters,
    }).then(({ followers, count, maxCount }) => {
      setFollowersData({
        followers: followersData.followers.concat(followers),
        count,
        maxCount,
      });
    });
  }, [filters, page]);

  const { followers, count, maxCount } = followersData;

  const propperties = {
    filterListProps: {
      onSubmit: (data) => {
        setFilters(data);
        setPage(0);
        setFollowersData({
          followers: [],
          count: 0,
          maxCount: 0,
        });
      },
    },
    filterValuesProps: {
      count,
      maxCount,
      filters,
      removeFilter: (filterName) => {
        const { [filterName]: deleted, ...restFilters } = filters; // eslint-disable-line

        setFilters(restFilters);
        setPage(0);
        setFollowersData({
          followers: [],
          count: 0,
          maxCount: 0,
        });
        changeForm(FORM_NAME, filterName, '');
      },
    },
    cardListProps: {
      page,
      setPage,
      followers,
      count,
    },
  };

  return (
    <div className={classes.container}>
      <Header />
      <FilterList {...propperties.filterListProps} />
      <FilterValues {...propperties.filterValuesProps} />
      <CardList {...propperties.cardListProps} />
    </div>
  );
};

FollowerList.propTypes = {
  classes: PropTypes.object.isRequired,
  changeForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(connect(FollowerList));
