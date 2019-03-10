import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import styles from './styles'

const FormSelect = ({
  classes,
  input: { value, onChange, name },
  meta: { submitFailed, error },
  isFullWidth,
  label,
  className,
  options,
}) => {
  const containerClasses = classNames(classes.container, className)

  return (
    <FormControl className={containerClasses} fullWidth={isFullWidth}>
      <InputLabel htmlFor={name} shrink error={Boolean(submitFailed && error)}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        inputProps={{
          name,
          id: name,
        }}
      >
        <MenuItem value="">
          <em>Без сортировки</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

FormSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.shape({
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    submitFailed: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
  isFullWidth: PropTypes.bool.isRequired,
}

FormSelect.defaultProps = {
  isFullWidth: true,
}

export default withStyles(styles)(FormSelect)
