import followers20190130 from '../data/2019-01-30/5-full-followers-list-with-likes.json';
import followers20190515 from '../data/2019-05-15/5-full-followers-list-with-likes.json';
import followers20190522 from '../data/2019-05-22/5-full-followers-list-with-likes.json';

import posts20190130 from '../data/2019-01-30/4-posts-list-with-likes.json';
import posts20190515 from '../data/2019-05-15/4-posts-list-with-likes.json';
import posts20190522 from '../data/2019-05-22/4-posts-list-with-likes.json';

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
    case '2019-05-22': {
      return {
        followers: followers20190522,
        posts: posts20190522,
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

    const fromFollowerIds = fromData.followers.map((follower) => follower.id);
    const newFollowers = toData.followers.filter((item) => !fromFollowerIds.includes(item.id));

    return {
      followers: newFollowers,
      posts: toData.posts,
    };
  } else if (type === 'old_followers') {
    const fromData = getDataByDate(dates[0]);
    const toData = getDataByDate(dates[1]);

    const toFollowerIds = toData.followers.map((follower) => follower.id);
    const oldFollowers = fromData.followers.filter((item) => !toFollowerIds.includes(item.id));

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
