import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../../actions/app';
import * as appSelectors from '../../selectors/app';

const mapStateToProps = (state) => {
  return {
    deviceInfo: appSelectors.getDeviceInfo(state),
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
