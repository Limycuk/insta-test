import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connect from './connect';
import { FORM_NAME, SORT_OPTIONS } from '../../constants';
import View from './view';

class FilterListContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleTypeUsername = this.handleTypeUsername.bind(this);
    this.clearUsernamesSuggestions = this.clearUsernamesSuggestions.bind(this);
  }

  onSubmit(data) {
    const { actions } = this.props;

    actions.filterData({ data });
  }

  handleTypeUsername({ value }) {
    const { actions } = this.props;

    actions.hangleUserAutocomplete({ autocompleteValue: value });
  }

  clearUsernamesSuggestions() {
    const { actions } = this.props;

    actions.saveUsernameSuggestions({ preparedUsernameSuggestions: [] });
  }

  render() {
    const { usernameSuggestions } = this.props;

    const props = {
      form: FORM_NAME,
      onSubmit: this.onSubmit,
      sortOptions: SORT_OPTIONS,
      handleTypeUsername: this.handleTypeUsername,
      clearUsernamesSuggestions: this.clearUsernamesSuggestions,
      autocompleteUsernames: usernameSuggestions,
    };

    return <View {...props} />;
  }
}

FilterListContainer.propTypes = {
  actions: PropTypes.shape({
    filterData: PropTypes.func.isRequired,
    hangleUserAutocomplete: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(FilterListContainer);
