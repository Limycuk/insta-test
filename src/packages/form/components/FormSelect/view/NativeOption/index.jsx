import React from 'react';
import PropTypes from 'prop-types';

const NativeOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

NativeOption.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.string.isRequired,
};

export default NativeOption;
