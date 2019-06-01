import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import useStyles from './styles';
import connect from './connect';
import { LEFT_BAR_LINKS } from './constants';

const LeftDrawer = ({ isOpenLeftMenu, appActions }) => {
  const classes = useStyles();

  return (
    <Drawer open={isOpenLeftMenu} onClose={appActions.toggleLeftDrawer}>
      <div className={classes.list} role="presentation" onClick={appActions.toggleLeftDrawer}>
        <List>
          {LEFT_BAR_LINKS.map((item) => (
            <ListItem button key={item.link} component={Link} to={item.link}>
              <ListItemIcon>
                <item.Icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  isOpenLeftMenu: PropTypes.bool.isRequired,
  appActions: PropTypes.shape({
    toggleLeftDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(LeftDrawer);
