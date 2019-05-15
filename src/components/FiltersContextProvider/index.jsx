import React from 'react';
import PropTypes from 'prop-types';

import FiltersContext from '~/contexts/filters';

import connect from './connect';

const FiltersContextProvider = ({ children, filters }) => {
  return <FiltersContext.Provider value={filters}>{children}</FiltersContext.Provider>;
};

FiltersContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  filters: PropTypes.object.isRequired,
};

export default connect(FiltersContextProvider);
