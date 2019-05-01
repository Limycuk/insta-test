import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import * as selectors from '../../selectors';

const mapStateToProps = (state) => {
  return {
    usernameSuggestions: selectors.getUsernameSuggestions(state),
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
