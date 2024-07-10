import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { images } from "../../assets";


const ScreenOne = () => {
  return (
    <Container >
      <Grid container spacing={3} style={{ height: '100%' }}>
        {/* Text on the Left */}
        <Grid item xs={12} md={6} style={{ height: '100%' }}>
           <Paper elevation={0} style={{ height: '100%', padding: '20px', textAlign: 'center', backgroundColor: 'transparent' }}>
            <Typography variant="h2" gutterBottom style={{ color: '#FFFFFF', fontFamily: 'Bebas Neue, sans-serif'}}>
              SwipeMate’s AI model has been trained with data featuring the hottest girls, the most beautiful women, from Instagram models, to runway models. Sign up and start swiping
            </Typography>
          </Paper>
        </Grid>

        {/* Image on the Right */}
        <Grid item xs={12} md={6}>
          <img src={images.blondeGirl} alt="Blonde Girl" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScreenOne;
