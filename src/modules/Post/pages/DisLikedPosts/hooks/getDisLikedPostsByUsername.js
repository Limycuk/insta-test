import { useState, useEffect, useContext } from 'react';

import rest from '~/packages/rest';
import DataFiltersContext from '~/modules/DataFilters/contexts/DataFilters';

export default (username) => {
  const [posts, setPosts] = useState([]);
  const filters = useContext(DataFiltersContext);

  useEffect(() => {
    rest.Post.fetchDisLikedPostsByUsername({
      username,
      filters,
    }).then(({ likedPosts }) => {
      setPosts(likedPosts);
    });
  }, []);

  return posts;
};
