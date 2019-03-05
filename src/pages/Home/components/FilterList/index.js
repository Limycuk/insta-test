import React, { Component } from 'react'
import PropTypes from 'prop-types'

import connect from './connect'
import { FORM_NAME } from '../../constants'
import View from './view'

class FilterListContainer extends Component {
  onSubmit(data) {
    console.log('data == ', data)
  }

  render() {
    const { count } = this.props

    const props = {
      form: FORM_NAME,
      onSubmit: this.onSubmit,
      count,
    }

    return <View {...props} />
  }
}

FilterListContainer.propTypes = {
  count: PropTypes.number.isRequired,
}

export default connect(FilterListContainer)
