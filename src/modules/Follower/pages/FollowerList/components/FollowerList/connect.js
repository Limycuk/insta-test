import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change } from 'redux-form';

const mapDispatchToProps = (dispatch) => {
  return {
    changeForm: bindActionCreators(change, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
);
