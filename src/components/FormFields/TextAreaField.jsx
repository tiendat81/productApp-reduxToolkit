import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  rowsMax: PropTypes.number,
};

TextAreaField.defaultProps = {
  label: '',
  disabled: false,
  rowsMax: 3,
};

function TextAreaField(props) {
  const { name, label, form, disabled, rowsMax } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <Controller
        name={name}
        control={form.control}
        render={({ value, onChange, onBlur }) => (
          <TextField
            fullWidth
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label={label}
            disabled={disabled}
            variant="outlined"
            error={hasError}
            helperText={errorMessage}
            multiline
            rowsMax={rowsMax}
            size="small"
          />
        )}
      />
    </Box>
  );
}

export default TextAreaField;
