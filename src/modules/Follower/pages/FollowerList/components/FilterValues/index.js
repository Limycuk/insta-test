/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import View from './view';

class FilterValuesContainer extends Component {
  constructor(props) {
    super(props);

    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    const { count, maxCount, filters, removeFilter } = this.props;

    const props = {
      removeFilter,
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
  count: PropTypes.number.isRequired,
  maxCount: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default FilterValuesContainer;
