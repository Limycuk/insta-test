import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import NotAvailable from '~/assets/images/common/not-available.jpg'

import View from './view'

const AsyncImageContainer = ({ imageProps }) => {
  const [localImageProps, setImageProps] = useState(null)

  useEffect(() => {
    var img = new Image()

    img.onload = () => {
      setImageProps(imageProps)
    }

    img.onerror = () => {
      setImageProps({
        ...imageProps,
        src: NotAvailable,
        alt: 'изображение недоступно',
      })
    }

    img.src = imageProps.src
  })

  const props = {
    isLoading: localImageProps === null,
    imageProps: localImageProps,
  }

  return <View {...props} />
}

AsyncImageContainer.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}

export default React.memo(AsyncImageContainer)
