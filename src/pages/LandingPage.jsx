import React from 'react';
import { Grid, Button, Typography, Container, TextField } from '@mui/material';
import SwipeMateImage from '../assets/images/phoneImageOfApp.png';
import Screenshot1 from '../assets/images/screenshot1.png';
import Screenshot2 from '../assets/images/screenshot2.png';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#ED1504', minHeight: '100vh', fontFamily: 'Bebas Neue' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', alignItems: 'center', marginRight: 'auto', marginLeft: '20%', gap: '16px', fontFamily: 'Bebas Neue' }}>
        <Typography variant="h4" style={{ color: '#FFFFFF', flex: '0 1 auto' }}>
          SwipeMate
        </Typography>
      </div>

      <Container style={{ paddingTop: '16px', paddingBottom: '16px', fontFamily: 'Bebas Neue' }}>
        <Grid container spacing={3}>
          {/* Left side with h2 heading */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" alignItems="center" justifyContent="center" height="100%">
              <Grid item>
                <Typography variant="h2" component="h2" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '4.5rem', fontFamily: 'Bebas Neue' }}>
                  Let AI swipe your Tinder! Go from Simping to Pimping in 3 easy steps
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Right side with image */}
          <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px', fontFamily: 'Bebas Neue' }}>
            <img src={SwipeMateImage} alt="Swipe Mate" style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
          </Grid>
        </Grid>

        {/* AI Model Training Info Section */}
        <Grid container spacing={3} style={{ marginTop: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              SwipeMate's AI model has been trained on 50,000+ images of the most objectively attractive women consisting of swimsuit models, Instagram models, the girl next door, and more!
            </Typography>
          </Grid>
        </Grid>

        {/* Instruction Images */}
        <Grid container spacing={3} style={{ marginTop: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              1. Log into the tinder wep app. Left click and select inspect element
            </Typography>
            <img src={Screenshot1} alt="Inspect Element" style={{ width: '100%', objectFit: 'contain', marginTop: '20px' }} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              2. Click on the network tab, select any value under name that has a domain “api.gotinder.com”. Scroll through the headers and copy your auth token
            </Typography>
            <img src={Screenshot2} alt="Network Tab" style={{ width: '100%', objectFit: 'contain', marginTop: '20px' }} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              3. Paste your auth token and get 150 free swipes (or until Tinder requires you to upgrade your account)!
            </Typography>
          </Grid>
        </Grid>

        {/* Payment Section */}
        <Grid container spacing={3} style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              Paste your auth token and pay $100 for 500 free swipes!
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth variant="outlined" label="Auth Token" />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth variant="outlined" label="Credit Card" />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth variant="outlined" label="PayPal" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth style={{ backgroundColor: '#FFFFFF', color: '#ED1504', fontFamily: 'Bebas Neue' }}>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
