import React from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import InputField from './InputField'; // Reusable InputField component

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 400, margin: 'auto' }}>
      <AppBar position="static" sx={{ backgroundColor: '#0047AB', padding: 1 }}>
        <Typography variant="h6" align="center">
          Enter Personal Details
        </Typography>
      </AppBar>

      <InputField
        label="Occupation"
        value={values.occupation}
        onChange={(e) => handleChange('occupation')(e)}
      />
      <InputField
        label="City"
        value={values.city}
        onChange={(e) => handleChange('city')(e)}
      />
      <InputField
        label="Bio"
        value={values.bio}
        onChange={(e) => handleChange('bio')(e)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: '#0047AB', color: '#fff', marginTop: 2 }}
        onClick={continueStep}
      >
        Continue
      </Button>

      <Button
        fullWidth
        variant="contained"
        sx={{ backgroundColor: '#7393B3', color: '#fff', marginTop: 2 }}
        onClick={backStep}
      >
        Back
      </Button>
    </Box>
  );
};

export default FormPersonalDetails;