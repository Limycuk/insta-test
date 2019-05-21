/* global Promise */

import { EXISTED_DATES } from '~/modules/DataFilters/constants';

import getDataByFilters from '../services/getDataByFilters';
import prepareUsernameSuggestions from '../services/prepareUsernameSuggestions';
import * as FollowerServices from '../services/Follower';
import { FOLLOWERS_LIMIT } from '../constants';
import config from '../config';

export const fetchFollowerByUsername = ({ username }) => {
  return new Promise((resolve) => {
    const { followers } = getDataByFilters(config.filters);

    const follower = followers.find((follower) => {
      return follower.username === username;
    });

    resolve({
      follower,
    });
  });
};

export const fetchFollowersByFilters = ({ page, followersFilters }) => {
  return new Promise((resolve) => {
    const { followers } = getDataByFilters(config.filters);

    const filteredFollowers = FollowerServices.filterFollowers(followers, followersFilters);
    const sortedFollowers = FollowerServices.sortFollowers(filteredFollowers, followersFilters);
    const paginatedFollowers = FollowerServices.paginateFollowers(sortedFollowers, page, FOLLOWERS_LIMIT);

    resolve({
      followers: paginatedFollowers,
      count: filteredFollowers.length,
      maxCount: followers.length,
    });
  });
};

export const fetchAutocompleteUsernames = ({ autocompleteValue }) => {
  return new Promise((resolve) => {
    const { followers } = getDataByFilters(config.filters);

    const preparedUsernameSuggestions = prepareUsernameSuggestions(followers, autocompleteValue);
    resolve(preparedUsernameSuggestions);
  });
};

export const fetchAvailableFollowerCounters = () => {
  return new Promise((resolve) => {
    const data = EXISTED_DATES.reduce((memo, item) => {
      const { followers } = getDataByFilters({ type: 'single', dates: [item.value] });
      memo[item.label] = followers.length;
      return memo;
    }, {});

    resolve(data);
  });
};
