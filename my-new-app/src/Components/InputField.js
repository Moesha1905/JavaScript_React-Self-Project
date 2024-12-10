import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, value, onChange, type = "text" }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;