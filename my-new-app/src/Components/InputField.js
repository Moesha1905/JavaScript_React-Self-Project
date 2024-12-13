import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, value, onChange, error, helperText, type = 'text' }) => (
  <TextField
    fullWidth
    margin="normal"
    label={label}
    value={value}
    onChange={onChange}
    error={error}
    helperText={helperText}
    type={type}
    variant="outlined"
  />
);

export default InputField;