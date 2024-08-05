import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Thank you for your purchase. Your 500 swipes have been added to your account.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleGoHome}
        style={{ marginTop: '20px' }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default CheckoutSuccess;
