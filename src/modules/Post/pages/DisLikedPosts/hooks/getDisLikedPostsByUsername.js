import { useState, useEffect } from 'react';

import rest from '~/packages/rest';

export default (username) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    rest.Post.fetchDisLikedPostsByUsername({
      username,
    }).then(({ likedPosts }) => {
      setPosts(likedPosts);
    });
  }, []);

  return posts;
};
