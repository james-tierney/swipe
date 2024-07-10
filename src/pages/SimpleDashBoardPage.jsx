import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Dashboard from '../components/common/DashBoard';

const SimpleDashboardPageComponent = () => {
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Dashboard /> {/* Display the Dashboard component */}
    </Container>
  );
};

export default SimpleDashboardPageComponent;
