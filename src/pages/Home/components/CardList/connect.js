import { connect } from 'react-redux'

import * as selectors from '../../selectors'
import * as actions from '../../actions'

const mapStateToProps = (state) => {
  return {
    followers: selectors.getFollowers(state),
    count: selectors.getCount(state),
    page: selectors.getPage(state),
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
