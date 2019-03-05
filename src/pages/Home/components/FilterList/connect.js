import { connect } from 'react-redux'

import * as selectors from '../../selectors'

const mapStateToProps = (state) => {
  return {
    count: selectors.getCount(state),
  }
}

export default connect(mapStateToProps)
