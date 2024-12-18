import React from 'react';
import { AppBar, Button, Typography } from '@mui/material';
import './Success.css';

const Success = ({ restartForm }) => {
  return (
    <div className="success-container">
      <AppBar position="static" className="success-appbar">
        <Typography variant="h6" align="center">
          Success
        </Typography>
      </AppBar>

      <Typography variant="h5" className="success-title">
        Thank You For Your Submission
      </Typography>
      <Typography variant="body1" className="success-message">
        You will receive an email with further instructions.
      </Typography>

      <Button
        variant="contained"
        className="success-button"
        onClick={restartForm}
      >
        Redo Form
      </Button>
    </div>
  );
};

export default Success;