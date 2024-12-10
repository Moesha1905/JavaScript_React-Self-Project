import React from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import InputField from './InputField'; 

const FormUserDetails = ({ values, handleChange, nextStep }) => {
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
      />
      <InputField
        label="Last Name"
        value={values.lastName}
        onChange={(e) => handleChange('lastName')(e)}
      />
      <InputField
        label="Email"
        type="email"
        value={values.email}
        onChange={(e) => handleChange('email')(e)}
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