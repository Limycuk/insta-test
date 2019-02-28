import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const FilterList = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.panel}>dataw</div>
    </div>
  )
}

FilterList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterList)
