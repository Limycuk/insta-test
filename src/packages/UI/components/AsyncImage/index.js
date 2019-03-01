import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import NotAvailable from '~/assets/images/common/not-available.jpg'
import View from './view'

class AsyncImageContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      imageProps: null,
    }
  }

  componentDidMount() {
    const { imageProps } = this.props

    var img = new Image()

    img.onload = () => {
      this.setState({
        imageProps,
      })
    }

    img.onerror = () => {
      this.setState({
        imageProps: {
          ...imageProps,
          src: NotAvailable,
          alt: 'изображение недоступно',
        },
      })
    }

    img.src = imageProps.src
  }

  render() {
    const { imageProps } = this.state

    const props = {
      isLoading: imageProps === null,
      imageProps,
    }

    return <View {...props} />
  }
}

AsyncImageContainer.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

export default AsyncImageContainer
