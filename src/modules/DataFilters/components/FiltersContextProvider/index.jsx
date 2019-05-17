import React from 'react';
import PropTypes from 'prop-types';

import DataFilters from '~/modules/DataFilters/contexts/DataFilters';

import connect from './connect';

const FiltersContextProvider = ({ children, filters }) => {
  return <DataFilters.Provider value={filters}>{children}</DataFilters.Provider>;
};

FiltersContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  filters: PropTypes.object.isRequired,
};

export default connect(FiltersContextProvider);
