import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import ScreenOne from '../components/common/ScreenOne';

const InitialScreen = () => {
  return (
    <Container component="main" maxWidth="lg" >
      <CssBaseline />
      <ScreenOne /> {/* Display the Dashboard component */}
    </Container>
  );
};

export default InitialScreen;
