import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as selectors from '../../selectors'
import * as actions from '../../actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)
