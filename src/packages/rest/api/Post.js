/* global Promise */

import getDataByFilters from '../services/getDataByFilters';
import config from '../config';

const getFollowerByUsername = (username) => {
  const { followers } = getDataByFilters(config.filters);

  return followers.find((follower) => {
    return follower.username === username;
  });
};

const getPostByShortCode = (shortCode) => {
  const { posts } = getDataByFilters(config.filters);

  return posts.list.find((post) => {
    return post.shortcode === shortCode;
  });
};

export const fetchLikedPostsByUsername = ({ username }) => {
  return new Promise((resolve) => {
    const follower = getFollowerByUsername(username);
    const likedPosts = follower.likes.likes.map(getPostByShortCode);

    resolve({
      likedPosts,
    });
  });
};

export const fetchDisLikedPostsByUsername = ({ username }) => {
  return new Promise((resolve) => {
    const follower = getFollowerByUsername(username);

    const likedPosts = follower.likes.dislikes.map(getPostByShortCode);

    resolve({
      likedPosts,
    });
  });
};
