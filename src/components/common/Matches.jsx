// Matches.js
import React from 'react';
import { Avatar, Typography, Grid } from '@mui/material';

const Matches = (props) => {
  return (
    <Grid container spacing={1} alignItems="center" sx={{paddingTop: '2rem'}}>
      {props.users.map((user, index) => (
        <Grid item key={index} xs={2} container direction="column" alignItems="center">
          <Avatar alt={user.name} src={user.avatar} sx={{ width: '40px', height: '40px' }} />
          <Typography variant="body2" textAlign="center" >
            {user.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Matches;
