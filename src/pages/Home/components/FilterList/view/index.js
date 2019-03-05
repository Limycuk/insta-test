import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import { FormInput } from '~/packages/form'

import styles from './styles'

const FilterList = ({ classes, handleSubmit, count }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.group}>
          <Field name="likesFrom" className={classes.field} component={FormInput} label="Лайков от:" type="number" />
          <Field name="likesTo" className={classes.field} component={FormInput} label="Лайков до:" type="number" />
        </div>
        <div className={classes.group}>
          <Field
            name="commentsFrom"
            className={classes.field}
            component={FormInput}
            label="Коментариев от:"
            type="number"
          />
          <Field
            name="commentsTo"
            className={classes.field}
            component={FormInput}
            label="Коментариев до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="followersFrom"
            className={classes.field}
            component={FormInput}
            label="Подписчиков от:"
            type="number"
          />
          <Field
            name="followersTo"
            className={classes.field}
            component={FormInput}
            label="Подписчиков до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field
            name="followingsFrom"
            className={classes.field}
            component={FormInput}
            label="Подписок от:"
            type="number"
          />
          <Field
            name="followingsTo"
            className={classes.field}
            component={FormInput}
            label="Подписок до:"
            type="number"
          />
        </div>
        <div className={classes.group}>
          <Field name="postsFrom" className={classes.field} component={FormInput} label="Постов от:" type="number" />
          <Field name="postsTo" className={classes.field} component={FormInput} label="Постов до:" type="number" />
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
}

export default compose(
  withStyles(styles),
  reduxForm(),
)(FilterList)
