import React from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import styles from './styles';
import serializeFilter from '../../../services/serializeFilter';

const FilterValues = ({ classes, filters, count, maxCount, percent, removeFilter, toggleFilter }) => {
  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.filter}>
          Количество:{' '}
          <b>
            {count}/{maxCount} ({percent}%)
          </b>
        </div>
        {Object.entries(filters).map((filter) => {
          const [filterName, filterValue] = filter;
          const chip = serializeFilter(filterName, filterValue);

          return (
            <Chip
              key={filterName}
              icon={<Icon>{chip.icon}</Icon>}
              variant="outlined"
              label={
                <span>
                  {chip.label}{' '}
                  <b>
                    {chip.sign} {chip.value}
                  </b>
                </span>
              }
              onClick={toggleFilter}
              onDelete={removeFilter(filterName)}
              className={classes.chip}
            />
          );
        })}
      </div>
    </div>
  );
};

FilterValues.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  removeFilter: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  maxCount: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default withStyles(styles)(FilterValues);
