import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import getLabelByValue from '~/modules/DataFilters/services/getLabelByValue';
import { EXISTED_TYPES, EXISTED_DATES } from '~/modules/DataFilters/constants';

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
          <span>
            Тип:&nbsp;<b>{getLabelByValue(EXISTED_TYPES, filters.type)}</b>
          </span>
          <span>
            Источник дат:&nbsp;<b>{filters.dates.map((date) => getLabelByValue(EXISTED_DATES, date)).join(' - ')}</b>
          </span>
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
