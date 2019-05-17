import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import getMappedType from '~/modules/DataFilters/services/getMappedType';

import styles from './styles';
import connect from './connect';

const Header = ({ classes, filters }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <Link to="/" className={classes.logo}>
            Сайтик
          </Link>
        </div>
        <div className={classes.filters}>
          <div>
            <span>
              Тип:&nbsp;<b>{getMappedType(filters.type)}</b>
            </span>
            <span className={classes.dates}>
              Источник дат:&nbsp;<b>{filters.dates.join(' - ')}</b>
            </span>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  filters: PropTypes.shape({
    type: PropTypes.string.isRequired,
    dates: PropTypes.array.isRequired,
  }).isRequired,
};

export default connect(withStyles(styles)(Header));
