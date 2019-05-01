/* global Promise */

import followers from '../../data/5-full-followers-list-with-likes.json';

export const fetchFollowerByUsername = ({ username }) => {
  return new Promise((resolve) => {
    const follower = followers.find((follower) => {
      return follower.username === username;
    });

    resolve({
      follower,
    });
  });
};
