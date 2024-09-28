import React, { useState } from 'react';
import { Grid, Button, Typography, Container, TextField } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import Screenshot1 from '../assets/images/screenshot1.png';
import Screenshot2 from '../assets/images/screenshot2.png';

// Load your publishable key from Stripe
const stripePromise = loadStripe('pk_live_51MIxt5KhH8zNT0eBV69mSH0djmZ50vIKUR71fICATT4g1qC6K6psICHaEePSIfQQqRUvHCRajt5HrQSCLoQzq8Bj00hiQS4fwh');

const LandingPage = () => {
  const [authToken, setAuthToken] = useState('');

  const handlePayNow = async () => {
    const stripe = await stripePromise;

    // Call your backend to create the Checkout session
    let response;
    try {
      console.log("The auth token: ", authToken)
      response = await fetch('https://swipe-v9h6.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authToken }),  // Include auth token in the request
      });
    } catch (error) {
      console.log("Error in creating checkout session: ", error)
    }

    console.log("response: ", response)

    let session; 
    try {
      const session = await response.json();
    } catch (error) {
      console.log("Error in retrieving session data ", error)
    }

    console.log("session: ", session);

    // Redirect to Stripe Checkout
    let result;
    try {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      console.log("Error in redirecting to checkout: ", error)
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
              3. Paste your auth token and get 150 free swipes (or until Tinder requires you to upgrade your account)!
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h4" sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Bebas Neue' }}>
              Paste your auth token and pay $20 for 500 free swipes!
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
              Pay Now (secured through Stripe)
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
