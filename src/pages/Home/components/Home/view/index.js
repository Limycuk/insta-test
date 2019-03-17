import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

import CardList from '../../CardList'
import FilterList from '../../FilterList'
import FilterValues from '../../FilterValues'
import styles from './styles'

const Home = ({ classes }) => {
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <div>Сайтик</div>
        </Toolbar>
      </AppBar>
      <FilterList />
      <FilterValues />
      <CardList />
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
