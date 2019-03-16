import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import styles from './styles'
import NativeOption from './NativeOption'

const FormSelect = ({
  classes,
  input: { value, onChange, name },
  meta: { submitFailed, error },
  isFullWidth,
  label,
  className,
  options,
  isNativeSelect,
}) => {
  const containerClasses = classNames(classes.container, className)
  const OptionComponent = isNativeSelect ? NativeOption : MenuItem

  return (
    <FormControl className={containerClasses} fullWidth={isFullWidth}>
      <InputLabel htmlFor={name} shrink error={Boolean(submitFailed && error)}>
        {label}
      </InputLabel>
      <Select
        native={isNativeSelect}
        value={value}
        onChange={onChange}
        inputProps={{
          name,
          id: name,
        }}
      >
        <OptionComponent value="">&nbsp;</OptionComponent>
        {options.map((option) => (
          <OptionComponent key={option.value} value={option.value}>
            {option.label}
          </OptionComponent>
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
  isNativeSelect: PropTypes.bool.isRequired,
}

FormSelect.defaultProps = {
  isFullWidth: true,
}

export default withStyles(styles)(FormSelect)
