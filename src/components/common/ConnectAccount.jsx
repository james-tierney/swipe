import React from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';

const ConnectAccount = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{ textAlign: 'center', marginTop: '20px', color: 'white', fontFamily: 'Bebas Neue',}}>
        Connect Your Accounts<br/> Playa! The Ladies Are Waiting 
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* Box 1 */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#52006D' }}>
          <Button
            variant="contained"
            style={{
              height: '100px',  // Set a fixed height for the button
              padding: '20px',
              textAlign: 'center',
              backgroundColor: 'transparent',
              color: '#D44A7A',
              fontSize: '1.5rem',
              boxShadow: 'none',  // Set box shadow to none for no elevation
              // Prevent text wrapping  // Set box shadow to none for no elevation
            }}
          >
            Connect Tinder
          </Button>
          </Paper>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            {/* Small text under Box 1 */}
          </Typography>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#52006D' }}>
          <Button
            variant="contained"
            style={{
              height: '100px',  // Set a fixed height for the button
              padding: '20px',
              textAlign: 'center',
              backgroundColor: 'transparent',
              color: '#D44A7A',
              fontSize: '1.5rem',
              boxShadow: 'none',  // Set box shadow to none for no elevation
              // Prevent text wrapping  // Set box shadow to none for no elevation
            }}
          >
            Connect Hinge
          </Button>
          </Paper>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            {/* (Coming Soon In Premuim Version) */}
          </Typography>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#52006D' }}>
          <Button
            variant="contained"
            style={{
              height: '100px',  // Set a fixed height for the button
              padding: '20px',
              textAlign: 'center',
              backgroundColor: 'transparent',
              color: '#D44A7A',
              fontSize: '1.5rem',
              boxShadow: 'none',  // Set box shadow to none for no elevation
              // Prevent text wrapping  // Set box shadow to none for no elevation
            }}
          >
            Connect Bumble
          </Button>
          </Paper>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            {/* (Coming Soon In Premuim Version) */}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ConnectAccount;
