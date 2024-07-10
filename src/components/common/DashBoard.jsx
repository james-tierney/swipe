import React from 'react';
import { Typography, Container, Grid, Paper, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{ color: 'white', textAlign: 'center', marginTop: '20px' , fontFamily: 'Bebas Neue'}}>
        Welcome Back Playboy!<br/> Let's Get Some Hotties
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* Box 1 */}
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#52006D' }}>
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
            Start Auto Swipe
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
              // Prevent text wrapping // Set box shadow to none for no elevation
            }}
          >
            Refine model - coming soon
          </Button>
          </Paper>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center',  color: 'white' }}>
            (Coming Soon In Premuim Version)
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
        // Prevent text wrapping
      }}
    >
      Train model with manual swiping - coming soon
    </Button>
          </Paper>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center', color: 'white' }}>
            (Coming Soon In Premuim Version)
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
