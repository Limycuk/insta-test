import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const ContextLoader = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classNames(classes.item, classes.child1)} />
      <div className={classNames(classes.item, classes.child2)} />
      <div className={classNames(classes.item, classes.child3)} />
      <div className={classNames(classes.item, classes.child4)} />
      <div className={classNames(classes.item, classes.child5)} />
      <div className={classNames(classes.item, classes.child6)} />
      <div className={classNames(classes.item, classes.child7)} />
      <div className={classNames(classes.item, classes.child8)} />
      <div className={classNames(classes.item, classes.child9)} />
      <div className={classNames(classes.item, classes.child10)} />
      <div className={classNames(classes.item, classes.child11)} />
      <div className={classNames(classes.item, classes.child12)} />
    </div>
  );
};

ContextLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContextLoader);
