import React from 'react';
import { AppBar, Button, Typography } from '@mui/material';

const Success = ({ restartForm }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#0047AB',
          padding: 1,
        }}
      >
        <Typography variant="h6" align="center">
          Success
        </Typography>
      </AppBar>

      <Typography
        variant="h5"
        sx={{ color: '#000', fontWeight: 'bold', marginTop: 3, marginBottom: 2 }}
      >
        Thank You For Your Submission
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        You will receive an email with further instructions.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#0047AB',
          color: '#ffffff',
          fontSize: '1rem',
          padding: '8px 16px', 
          marginTop: 2,
        }}
        onClick={restartForm}
      >
        Redo Form
      </Button>
    </div>
  );
};

export default Success;