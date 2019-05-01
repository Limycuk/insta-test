import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const FollowerLikes = ({ classes }) => {
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <div>Сайтик</div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

FollowerLikes.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FollowerLikes)
