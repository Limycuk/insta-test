import { connect } from 'react-redux';

import * as dataFiltersSelectors from '~/modules/DataFilters/selectors';

const mapStateToProps = (state) => {
  return {
    filters: dataFiltersSelectors.getFilters(state),
  };
};

export default connect(mapStateToProps);
