import { connect } from 'react-redux';

import * as filtersSelectors from '~/modules/DataFilters/selectors';

const mapStateToProps = (state) => {
  return {
    filters: filtersSelectors.getFilters(state),
  };
};

export default connect(mapStateToProps);
