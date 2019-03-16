import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import classNames from 'classnames'
import _ from '~/packages/lodash'

import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import CustomInput from './CustomInput'
import Suggestion from './Suggestion'
import getSuggestionValue from '../services/getSuggestionValue'

class IntegrationAutosuggest extends React.Component {
  render() {
    const {
      classes,
      input: { value, onChange, name },
      meta: { error, submitFailed },
      className,
      isFullWidth,
      isDisabled,
      label,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      suggestions,
    } = this.props

    const autosuggestProps = {
      renderInputComponent: CustomInput,
      renderSuggestion: Suggestion,
      suggestions,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      getSuggestionValue,
    }

    return (
      <FormControl
        fullWidth={isFullWidth}
        margin="normal"
        className={classNames(classes.container, className)}
        disabled={isDisabled}
      >
        {label && (
          <InputLabel htmlFor={name} shrink error={submitFailed && !_.isNil(error)}>
            {label}
          </InputLabel>
        )}
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            id: name,
            isFullWidth,
            type: 'text',
            name,
            value,
            className: classes.input,
            onChange: (event, { newValue }) => {
              onChange(newValue)
            },
            hasError: submitFailed && !_.isNil(error),
            inputRef: (node) => {
              this.popperNode = node
            },
          }}
          theme={{
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={(options) => (
            <Popper anchorEl={this.popperNode} open={Boolean(options.children)}>
              <Paper
                square
                {...options.containerProps}
                style={{ width: this.popperNode ? this.popperNode.clientWidth : null }}
              >
                {options.children}
              </Paper>
            </Popper>
          )}
        />
      </FormControl>
    )
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    submitFailed: PropTypes.bool.isRequired,
  }).isRequired,
  className: PropTypes.string,
  isFullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
}

IntegrationAutosuggest.defaultProps = {
  className: null,
  isFullWidth: true,
  isDisabled: false,
  label: null,
}

export default withStyles(styles)(IntegrationAutosuggest)
