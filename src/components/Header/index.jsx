import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import getLabelByValue from '~/modules/DataFilters/services/getLabelByValue';
import { EXISTED_TYPES, EXISTED_DATES } from '~/modules/DataFilters/constants';

import useStyles from './styles';
import connect from './connect';

const Header = ({ filters, appActions }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={appActions.toggleLeftDrawer}
        >
          <MenuIcon />
        </IconButton>
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
  filters: PropTypes.shape({
    type: PropTypes.string.isRequired,
    dates: PropTypes.array.isRequired,
  }).isRequired,
  appActions: PropTypes.shape({
    toggleLeftDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(Header);
