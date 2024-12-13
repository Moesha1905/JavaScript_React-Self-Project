import React from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import InputField from './InputField'; 

const FormUserDetails = ({ values, handleChange, nextStep, errors }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: 'auto' }}>
      <AppBar position="static" sx={{ backgroundColor: '#0047AB', padding: 1 }}>
        <Typography variant="h6" align="center">
          Enter User Details
        </Typography>
      </AppBar>
      <InputField
        label="First Name"
        value={values.firstName}
        onChange={(e) => handleChange('firstName')(e)}
        error = {!!errors.firstName}
        helperText={errors.firstName}
      />
      <InputField
        label="Last Name"
        value={values.lastName}
        onChange={(e) => handleChange('lastName')(e)}
        error = {!!errors.lastName}
        helperText={errors.lastName}
      />
      <InputField
        label="Email"
        type="email"
        value={values.email}
        onChange={(e) => handleChange('email')(e)}
        error = {!!errors.email}
        helperText={errors.email}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: '#0047AB', color: '#fff', marginTop: 2 }}
        onClick={continueStep}
      >
        Continue
      </Button>
    </Box>
  );
};

export default FormUserDetails;