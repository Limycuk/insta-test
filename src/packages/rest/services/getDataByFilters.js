import followers20190130 from '../data/2019-01-30/5-full-followers-list-with-likes.json';
import followers20190515 from '../data/2019-05-15/5-full-followers-list-with-likes.json';

import posts20190130 from '../data/2019-01-30/4-posts-list-with-likes.json';
import posts20190515 from '../data/2019-05-15/4-posts-list-with-likes.json';

export default ({ type, dates }) => {
  if (type === 'single') {
    switch (dates[0]) {
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
  }

  return {
    followers: [],
    posts: [],
  };
};
