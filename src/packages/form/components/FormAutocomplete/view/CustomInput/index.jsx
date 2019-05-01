import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';

const CustomInput = ({ inputRef, ref, isFullWidth, type, hasError, ...other }) => {
  return (
    <Input
      fullWidth={isFullWidth}
      type={type}
      inputRef={(node) => {
        ref(node);
        inputRef(node);
      }}
      error={hasError}
      {...other}
    />
  );
};

CustomInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
  ref: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFullWidth: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  other: PropTypes.object.isRequired,
};

export default CustomInput;
