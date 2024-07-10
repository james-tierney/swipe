// LocationBox.js
import React from 'react';
import { Typography, Grid } from '@mui/material';

const LocationBox = (props) => {
  return (
    <Grid item xs={2} container direction="column" alignItems="center" sx={{ paddingTop: '8rem', marginRight: '2rem' }}>
      <Typography
        variant="body1"
        color="primary"
        sx={{
          width: '150px', // Set a fixed width
          height: '80px', // Set a fixed height
          border: '2px solid transparent', // Set a transparent border
          padding: '8px',
          textAlign: 'left', // Make the text left-aligned
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slightly darker shadow
          whiteSpace: 'pre-line',
          color: "black"
        }}
      >
        {`${props.primaryText}\n${props.secondaryText}`}
      </Typography>
    </Grid>
  );
};

export default LocationBox;
