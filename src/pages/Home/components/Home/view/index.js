import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CardList from '../../CardList';

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>Сайтик</div>
        </Toolbar>
      </AppBar>
      <CardList />
    </div>
  );
};

export default Home;
