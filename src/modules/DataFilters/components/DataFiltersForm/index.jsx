import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { EXISTED_TYPES, EXISTED_DATES, TWO_DATES_TYPES } from '~/modules/DataFilters/constants';
import { FormSelect } from '~/packages/form';

import { FORM_NAME } from './constants';
import styles from './styles';
import connect from './connect';

const DataFiltersForm = ({
  classes,
  handleSubmit,
  initializeForm,
  filters,
  formValues,
  dataFiltersActions,
  history,
}) => {
  useEffect(() => {
    initializeForm(FORM_NAME, {
      type: filters.type,
      dateFrom: filters.dates[0],
      dateTo: filters.dates[1],
    });
  }, []);

  const onSubmit = (data) => {
    const dates = [data.dateFrom];

    if (TWO_DATES_TYPES.includes(data.type)) {
      dates.push(data.dateTo);
    }

    dataFiltersActions.changeFilters({
      type: data.type,
      dates,
    });
    history.push('/follower-list');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
      <Field name="type" className={classes.field} component={FormSelect} options={EXISTED_TYPES} label="Тип:" />
      <Field
        name="dateFrom"
        className={classes.field}
        component={FormSelect}
        options={EXISTED_DATES}
        label="Сортировать по:"
      />
      <Field
        name="dateTo"
        isDisabled={formValues && !TWO_DATES_TYPES.includes(formValues.type)}
        className={classes.field}
        component={FormSelect}
        options={EXISTED_DATES}
        label="Сортировать по:"
      />
      <Button variant="contained" color="primary" type="submit" className={classes.button}>
        Фильтровать
      </Button>
    </form>
  );
};

DataFiltersForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initializeForm: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    type: PropTypes.string.isRequired,
    dates: PropTypes.array.isRequired,
  }).isRequired,
  formValues: PropTypes.shape({
    type: PropTypes.string,
  }),
  dataFiltersActions: PropTypes.shape({
    changeFilters: PropTypes.func.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default compose(
  connect,
  withRouter,
  withStyles(styles),
  reduxForm({
    form: FORM_NAME,
  }),
)(DataFiltersForm);
