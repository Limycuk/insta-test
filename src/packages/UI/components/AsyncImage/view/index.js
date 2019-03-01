import React from 'react'
import PropTypes from 'prop-types'

import { ContextLoader } from '~/packages/UI'

const AsyncImage = ({ isLoading, imageProps }) => {
  return isLoading ? <ContextLoader /> : <img {...imageProps} src={imageProps.src} alt={imageProps.alt} />
}

AsyncImage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default AsyncImage
