/* global Promise */

import getDataByFilters from '../services/getDataByFilters';
import config from '../config';
import { POSTS_LIMIT } from '../constants';

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

export const fetchLikesByPost = (selectedPost = 0) => {
  return new Promise((resolve) => {
    const { posts } = getDataByFilters(config.filters);

    const chartData = {
      labels: [],
      values: {},
    };

    for (let i = selectedPost; i < POSTS_LIMIT; i++) {
      chartData.labels.push(`${i + 1} Post`);
    }

    const clonnedList = posts.list.slice(0).reverse();
    const preparedPosts = clonnedList.slice(selectedPost);
    const targetPost = preparedPosts[0];
    const targetFollowers = targetPost.likes.followers;

    chartData.values = preparedPosts.map((item) => {
      const retention = item.likes.followers.reduce((memo, item) => {
        if (targetFollowers.includes(item)) {
          memo++;
        }

        return memo;
      }, 0);

      return Math.round((retention * 100) / targetFollowers.length);
    });

    resolve({
      posts: clonnedList,
      chartData,
    });
  });
};
