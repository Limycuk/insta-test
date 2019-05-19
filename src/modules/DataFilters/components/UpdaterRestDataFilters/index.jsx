import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { setConfig } from '~/packages/rest';
import connect from './connect';

const UpdaterRestDataFilters = ({ filters }) => {
  useEffect(() => {
    setConfig('filters', filters);
  }, [filters]);

  return null;
};

UpdaterRestDataFilters.propTypes = {
  filters: PropTypes.object.isRequired,
};

export default connect(UpdaterRestDataFilters);
