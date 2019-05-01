import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import * as selectors from '../../selectors';

const mapStateToProps = (state) => {
  return {
    count: selectors.getCount(state),
    maxCount: selectors.getMaxCount(state),
    filters: selectors.getFilters(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
