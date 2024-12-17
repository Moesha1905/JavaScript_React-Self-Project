import React from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import InputField from './InputField';
import './FormUserDetails.css'; 

const FormUserDetails = ({ values, handleChange, nextStep, errors }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Box className="container"> 
      <AppBar position="static" className="app-bar"> 
        <Typography variant="h6" className="title">
          Enter User Details
        </Typography>
      </AppBar>
      <InputField
        label="First Name"
        value={values.firstName}
        onChange={(e) => handleChange('firstName')(e)}
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
      <InputField
        label="Last Name"
        value={values.lastName}
        onChange={(e) => handleChange('lastName')(e)}
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
      <InputField
        label="Email"
        type="email"
        value={values.email}
        onChange={(e) => handleChange('email')(e)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <Button
        fullWidth
        variant="contained"
        className="button"
        onClick={continueStep}
      >
        Continue
      </Button>
    </Box>
  );
};

export default FormUserDetails;