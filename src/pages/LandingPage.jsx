import React, { useState } from 'react';
import { Grid, Button, Typography, Container, TextField } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import SwipeMateImage from '../assets/images/phoneImageOfApp.png';
import Screenshot1 from '../assets/images/screenshot1.png';
import Screenshot2 from '../assets/images/screenshot2.png';

// Load your publishable key from Stripe
const stripePromise = loadStripe('pk_test_51MIxt5KhH8zNT0eBsdPFdzJKWvmFTUizm2dPrq2daAtaa8to4ODsN6sh1jqOjg2Qf5p4Q3UJcOaTybTcRk2x4hFO00gaUmgcqo');

const LandingPage = () => {
  const [authToken, setAuthToken] = useState('');

  const handlePayNow = async () => {
    const stripe = await stripePromise;

    // Call your backend to create the Checkout session
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authToken }),  // Include auth token in the request
    });

    const session = await response.json();
    console.log(session);

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#ED1504', minHeight: '100vh', fontFamily: 'Bebas Neue' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', alignItems: 'center', marginRight: 'auto', marginLeft: '20%', gap: '16px', fontFamily: 'Bebas Neue' }}>
        <Typography variant="h4" style={{ color: '#FFFFFF', flex: '0 1 auto' }}>
          SwipeMate
        </Typography>
      </div>

      <Container style={{ paddingTop: '16px', paddingBottom: '16px', fontFamily: 'Bebas Neue' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container direction="column" alignItems="center" justifyContent="center" height="100%">
              <Grid item>
                <Typography variant="h2" component="h2" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '4.5rem', fontFamily: 'Bebas Neue' }}>
                  Let AI swipe your Tinder! Go from single to in-demand in 3 easy steps
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              SwipeMate's AI model has been trained on 50,000+ images of the most objectively attractive women consisting of swimsuit models, Instagram models, the girl next door, and more!
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              1. Log into the tinder web app. Left click and select inspect element
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
              3. Paste your auth token and get 500 right swipes (or until Tinder requires you to upgrade your account)!
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              Paste your auth token and pay only $200 for 500 right swipes!
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Auth Token"
              value={authToken}
              onChange={(e) => setAuthToken(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{
                backgroundColor: authToken ? '#FFFFFF' : 'gray',
                color: authToken ? '#ED1504' : 'white',
                fontFamily: 'Bebas Neue',
              }}
              onClick={handlePayNow}
              disabled={!authToken}
            >
              Pay Now (secured through stripe)
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
