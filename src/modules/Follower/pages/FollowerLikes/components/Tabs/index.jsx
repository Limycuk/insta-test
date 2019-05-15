import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MaterialTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Tabs = ({ children, username, tab }) => {
  return (
    <div>
      <MaterialTabs value={tab} indicatorColor="primary" textColor="primary" centered>
        <Tab component={Link} value="likes" to={`/follower-likes/${username}/likes`} label="Liked Posts" />
        <Tab component={Link} value="dislikes" to={`/follower-likes/${username}/dislikes`} label="Not Liked Posts" />
      </MaterialTabs>
      {children}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.any.isRequired,
  username: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
};

export default Tabs;
