import React, { Component } from 'react'
import PropTypes from 'prop-types'

import View from './view'
import connect from './connect'

class FilterValuesContainer extends Component {
  constructor(props) {
    super(props)

    this.removeFilter = this.removeFilter.bind(this)
  }

  removeFilter(fieldName) {
    return () => {
      const { actions } = this.props

      actions.removeFilter({ fieldName })
    }
  }

  render() {
    const { count, filters } = this.props

    const props = {
      removeFilter: this.removeFilter,
      count,
      filters,
    }

    return <View {...props} />
  }
}

FilterValuesContainer.propTypes = {
  actions: PropTypes.shape({
    removeFilter: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(FilterValuesContainer)
