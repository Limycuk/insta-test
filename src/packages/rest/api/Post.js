/* global Promise */

import followers from '../data/5-full-followers-list-with-likes.json';
import posts from '../data/4-posts-list-with-likes.json';

const getFollowerByUsername = (username) => {
  return followers.find((follower) => {
    return follower.username === username;
  });
};

const getPostByShortCode = (shortCode) => {
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
