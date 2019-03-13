import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import { FormInput, FormSelect, FormAutocomplete } from '~/packages/form'

import styles from './styles'

const FilterList = ({ classes, handleSubmit, count, sortOptions }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.group}>
          <Field
            name="likesFrom"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Лайков от:"
            type="number"
          />
          <Field
            name="likesTo"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Лайков до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="commentsFrom"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Коментариев от:"
            type="number"
          />
          <Field
            name="commentsTo"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Коментариев до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="followersFrom"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Подписчиков от:"
            type="number"
          />
          <Field
            name="followersTo"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Подписчиков до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="followingsFrom"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Подписок от:"
            type="number"
          />
          <Field
            name="followingsTo"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Подписок до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="postsFrom"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Постов от:"
            type="number"
          />
          <Field
            name="postsTo"
            className={classes.field}
            component={FormInput}
            pattern="[0-9]*"
            inputMode="numeric"
            label="Постов до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="sort"
            className={classes.field}
            component={FormSelect}
            options={sortOptions}
            label="Сортировать по:"
          />
          <Field name="username" className={classes.field} component={FormAutocomplete} label="Поиск по нику:" />
        </div>
        <div className={classes.submitContainer}>
          <span>
            Количество: <b>{count}</b>
          </span>
          <Button variant="contained" color="primary" type="submit" className={classes.button}>
            Фильтровать
          </Button>
        </div>
      </div>
    </form>
  )
}

FilterList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
}

export default compose(
  withStyles(styles),
  reduxForm(),
)(FilterList)
