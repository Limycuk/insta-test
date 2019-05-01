import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import View from './view'
import connect from './connect'

const FollowerLikesContainer = ({ actions, match }) => {
  useEffect(() => {
    actions.loadUserByUsername({
      username: match.params.username,
    })
  })

  const props = {}

  return <View {...props} />
}

FollowerLikesContainer.propTypes = {
  actions: PropTypes.shape({
    loadUserByUsername: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default connect(FollowerLikesContainer)
