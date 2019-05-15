/* global Promise */

import getDataByFilters from '../services/getDataByFilters';

const getFollowerByUsername = (username, filters) => {
  const { followers } = getDataByFilters(filters);

  return followers.find((follower) => {
    return follower.username === username;
  });
};

const getPostByShortCode = (shortCode, filters) => {
  const { posts } = getDataByFilters(filters);

  return posts.list.find((post) => {
    return post.shortcode === shortCode;
  });
};

export const fetchLikedPostsByUsername = ({ username, filters }) => {
  return new Promise((resolve) => {
    const follower = getFollowerByUsername(username, filters);
    const likedPosts = follower.likes.likes.map((shortCode) => getPostByShortCode(shortCode, filters));

    resolve({
      likedPosts,
    });
  });
};

export const fetchDisLikedPostsByUsername = ({ username, filters }) => {
  return new Promise((resolve) => {
    const follower = getFollowerByUsername(username, filters);

    const likedPosts = follower.likes.dislikes.map((shortCode) => getPostByShortCode(shortCode, filters));

    resolve({
      likedPosts,
    });
  });
};
