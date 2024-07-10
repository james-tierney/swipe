import { Button, Grid } from '@mui/material';
import React from 'react';

const Preferences = (props) => {
  return (
    <Grid item xs={2} container direction="column" alignItems="center" sx={{ paddingTop: '8rem', marginRight: '2rem' }}>
      <Button sx={{ color: 'black', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', border: '1px solid black', borderRadius: '0' }}>
        {props.text}
      </Button>
    </Grid>
  );
};

export default Preferences;
