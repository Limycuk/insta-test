import { connect } from 'react-redux'

import * as selectors from '../../selectors'
import * as actions from '../../actions'

const mapStateToProps = (state) => {
  return {
    data: selectors.getData(state),
    count: selectors.getCount(state),
  }
}

const mapDispatchToProps = {
  initData: actions.initData,
  changePage: actions.changePage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
