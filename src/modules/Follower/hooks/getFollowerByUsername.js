import { useState, useEffect, useContext } from 'react';

import rest from '~/packages/rest';
import DataFiltersContext from '~/modules/DataFilters/contexts/DataFilters';

export default (username) => {
  const [follower, setFollower] = useState(null);
  const filters = useContext(DataFiltersContext);

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
