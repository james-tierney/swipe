import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import ConnectAccount from '../components/common/ConnectAccount';

const ConnectAccountPage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <ConnectAccount /> {/* Display the Dashboard component */}
    </Container>
  );
};

export default ConnectAccountPage;