/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import View from './view';
import connect from './connect';

class FilterValuesContainer extends Component {
  constructor(props) {
    super(props);

    this.removeFilter = this.removeFilter.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  removeFilter(fieldName) {
    return () => {
      const { actions } = this.props;

      actions.removeFilter({ fieldName });
    };
  }

  toggleFilter() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    const { count, maxCount, filters } = this.props;

    const props = {
      removeFilter: this.removeFilter,
      toggleFilter: this.toggleFilter,
      count,
      maxCount,
      percent: Math.floor(((count * 100) / maxCount) * 100) / 100,
      filters,
    };

    return <View {...props} />;
  }
}

FilterValuesContainer.propTypes = {
  actions: PropTypes.shape({
    removeFilter: PropTypes.func.isRequired,
  }).isRequired,
  count: PropTypes.number.isRequired,
  maxCount: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
};

export default connect(FilterValuesContainer);
