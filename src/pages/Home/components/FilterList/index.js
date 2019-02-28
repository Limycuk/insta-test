import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import { FORM_NAME } from '../../constants'
import View from './view'

class FilterListContainer extends Component {
  render() {
    const props = {
      form: FORM_NAME,
    }

    return <View {...props} />
  }
}

export default reduxForm()(FilterListContainer)
