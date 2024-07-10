// SearchBarWithAvatar.js
import React from 'react';
import { Grid, TextField, InputAdornment, IconButton, Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { images } from "../../assets";

const SearchBarWithAvatar = (props) => {
  return (
    <Grid container spacing={3} alignItems="center">
      {/* Search Bar on the left */}
      <Grid item xs={8}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search..."
          onChange={props.handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ED1504',
            },
          }}
        />
      </Grid>
      {/* Avatar and text on the right */}
      <Grid item xs={4} container justifyContent="flex-end" alignItems="center">
        <Avatar alt="user" src={images.cartoonAvatar} />
        <Typography variant="body1" ml={2}>
          {props.avatarText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchBarWithAvatar;
