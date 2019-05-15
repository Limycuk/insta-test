import { useState, useEffect, useContext } from 'react';

import rest from '~/packages/rest';
import FiltersContext from '~/contexts/filters';

export default (username) => {
  const [follower, setFollower] = useState(null);
  const filters = useContext(FiltersContext);
  useEffect(() => {
    rest.Follower.fetchFollowerByUsername({
      username,
      filters,
    }).then(({ follower }) => {
      setFollower(follower);
    });
  }, []);

  return follower;
};
