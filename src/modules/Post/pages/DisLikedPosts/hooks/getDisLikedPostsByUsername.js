import { useState, useEffect, useContext } from 'react';

import rest from '~/packages/rest';
import FiltersContext from '~/contexts/filters';

export default (username) => {
  const [posts, setPosts] = useState([]);
  const filters = useContext(FiltersContext);

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
