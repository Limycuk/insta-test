/* global Promise */

import getDataByFilters from '../services/getDataByFilters';

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
