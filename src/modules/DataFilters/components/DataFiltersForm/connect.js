import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialize } from 'redux-form';
import { getFormValues } from 'redux-form';

import * as dataFiltersSelectors from '~/modules/DataFilters/selectors';
import * as dataFiltersActions from '~/modules/DataFilters/actions';

import { FORM_NAME } from './constants';

const mapStateToProps = (state) => {
  return {
    filters: dataFiltersSelectors.getFilters(state),
    formValues: getFormValues(FORM_NAME)(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initializeForm: bindActionCreators(initialize, dispatch),
    dataFiltersActions: bindActionCreators(dataFiltersActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
