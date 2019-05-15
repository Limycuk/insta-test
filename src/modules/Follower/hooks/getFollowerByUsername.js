import { useState, useEffect } from 'react';

import rest from '~/packages/rest';

export default (username) => {
  const [follower, setFollower] = useState(null);

  useEffect(() => {
    rest.Follower.fetchFollowerByUsername({
      username,
    }).then(({ follower }) => {
      setFollower(follower);
    });
  }, []);

  return follower;
};
