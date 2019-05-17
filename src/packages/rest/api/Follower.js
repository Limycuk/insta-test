/* global Promise */

import getDataByFilters from '../services/getDataByFilters';
import prepareUsernameSuggestions from '../services/prepareUsernameSuggestions';
import * as FollowerServices from '../services/Follower';
import { FOLLOWERS_LIMIT } from '../constants';

export const fetchFollowerByUsername = ({ username, filters }) => {
  return new Promise((resolve) => {
    const { followers } = getDataByFilters(filters);

    const follower = followers.find((follower) => {
      return follower.username === username;
    });

    resolve({
      follower,
    });
  });
};

export const fetchFollowersByFilters = ({ filters, page, followersFilters }) => {
  return new Promise((resolve) => {
    const { followers } = getDataByFilters(filters);

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

export const fetchAutocompleteUsernames = ({ filters, autocompleteValue }) => {
  return new Promise((resolve) => {
    const { followers } = getDataByFilters(filters);

    const preparedUsernameSuggestions = prepareUsernameSuggestions(followers, autocompleteValue);
    resolve(preparedUsernameSuggestions);
  });
};
