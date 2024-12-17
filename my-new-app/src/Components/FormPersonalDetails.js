import React from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import InputField from './InputField';
import './FormPersonalDetails.css';

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep, errors }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Box className="container">
      <AppBar position="static" className="app-bar">
        <Typography variant="h6" className="title">
            Enter Personal Details
        </Typography>
      </AppBar>

      <InputField
        label="Occupation"
        value={values.occupation}
        onChange={(e) => handleChange('occupation')(e)}
        error={!!errors.occupation}
        helperText={errors.occupation}
      />
      <InputField
        label="City"
        value={values.city}
        onChange={(e) => handleChange('city')(e)}
        error={!!errors.city}
        helperText={errors.city}
      />
      <InputField
        label="Bio"
        value={values.bio}
        onChange={(e) => handleChange('bio')(e)}
        error={!!errors.bio}
        helperText={errors.bio}
      />

      <div className="button-cont">
        <Button
          fullWidth
          variant="contained"
          className="button-continue" 
          onClick={continueStep}
        >
          Continue
        </Button>

        <Button
          fullWidth
          variant="contained"
          className="button-back" 
          onClick={backStep}
        >
          Back
        </Button>
      </div>
    </Box>
  );
};

export default FormPersonalDetails;