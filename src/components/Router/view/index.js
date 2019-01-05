import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '~/pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={Home} />
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
