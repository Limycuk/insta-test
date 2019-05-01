import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import rest from '~/packages/rest';

const FollowerLikesContainer = ({ classes, username }) => {
  useEffect(() => {
    rest.Follower.fetchFollowerByUsername({
      username,
    }).then((payload) => {
      console.log('payload == ', payload);
    });
  });

  return <div className={classes.container}>еуые</div>;
};

FollowerLikesContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FollowerLikesContainer;
