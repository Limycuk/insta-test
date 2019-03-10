import React, { Component } from 'react'
import PropTypes from 'prop-types'

import connect from './connect'
import { FORM_NAME, SORT_OPTIONS } from '../../constants'
import View from './view'

class FilterListContainer extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(data) {
    const { actions } = this.props

    actions.filterData({ data })
  }

  render() {
    const { count } = this.props

    const props = {
      form: FORM_NAME,
      onSubmit: this.onSubmit,
      count,
      sortOptions: SORT_OPTIONS,
    }

    return <View {...props} />
  }
}

FilterListContainer.propTypes = {
  count: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    filterData: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(FilterListContainer)
