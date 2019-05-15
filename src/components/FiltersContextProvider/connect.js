import { connect } from 'react-redux';

import * as filtersSelectors from '~/selectors/filters';

const mapStateToProps = (state) => {
  return {
    filters: filtersSelectors.getFilters(state),
  };
};

export default connect(mapStateToProps);
