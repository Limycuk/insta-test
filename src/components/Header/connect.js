import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as dataFiltersSelectors from '~/modules/DataFilters/selectors';
import * as appActions from '~/actions/app';

const mapStateToProps = (state) => {
  return {
    filters: dataFiltersSelectors.getFilters(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
