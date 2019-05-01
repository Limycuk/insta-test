import { connect } from 'react-redux';

import * as appSelectors from '~/selectors/app';

const mapStateToProps = (state) => {
  const isDesktop = appSelectors.getIsDesktop(state);

  return {
    isNativeSelect: !isDesktop,
  };
};

export default connect(mapStateToProps);
