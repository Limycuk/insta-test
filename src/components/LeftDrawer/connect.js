import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '~/actions/app';
import * as appSelectors from '~/selectors/app';

const mapStateToProps = (state) => {
  return {
    isOpenLeftMenu: appSelectors.getIsOpenLeftMenu(state),
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
