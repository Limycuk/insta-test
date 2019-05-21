import followers20190130 from '../data/2019-01-30/5-full-followers-list-with-likes.json';
import followers20190515 from '../data/2019-05-15/5-full-followers-list-with-likes.json';

import posts20190130 from '../data/2019-01-30/4-posts-list-with-likes.json';
import posts20190515 from '../data/2019-05-15/4-posts-list-with-likes.json';

const getDataByDate = (date) => {
  switch (date) {
    case '2019-01-30': {
      return {
        followers: followers20190130,
        posts: posts20190130,
      };
    }
    case '2019-05-15': {
      return {
        followers: followers20190515,
        posts: posts20190515,
      };
    }
  }
};

export default ({ type, dates }) => {
  if (type === 'single') {
    return getDataByDate(dates[0]);
  } else if (type === 'new_followers') {
    const fromData = getDataByDate(dates[0]);
    const toData = getDataByDate(dates[1]);

    const fromFollowerUsernames = fromData.followers.map((follower) => follower.username);
    const newFollowers = toData.followers.filter((item) => !fromFollowerUsernames.includes(item.username));

    return {
      followers: newFollowers,
      posts: toData.posts,
    };
  } else if (type === 'old_followers') {
    const fromData = getDataByDate(dates[0]);
    const toData = getDataByDate(dates[1]);

    const toFollowerUsernames = toData.followers.map((follower) => follower.username);
    const oldFollowers = fromData.followers.filter((item) => !toFollowerUsernames.includes(item.username));

    return {
      followers: oldFollowers,
      posts: fromData.posts,
    };
  }

  return {
    followers: [],
    posts: [],
  };
};
