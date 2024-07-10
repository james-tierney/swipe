// SearchPage.js
import { Grid } from '@mui/material';
import React from 'react';
import Animate from '../components/common/Animate';
import SearchBarWithAvatar from '../components/common/SearchBarWithAvatar';
import Matches from '../components/common/Matches';
import Preferences from '../components/common/Preferences';
import LocationBox from '../components/common/LocationBox';
import {Typography} from '@mui/material';

const SearchPage = () => {
  const handleSearch = (event) => {
    // Implement your search logic here
    console.log(event.target.value);
  };

  const users = [
    { name: 'John Doe', avatar: 'https://example.com/avatar1.jpg' },
    { name: 'Jane Smith', avatar: 'https://example.com/avatar2.jpg' },
    { name: 'Alice Johnson', avatar: 'https://example.com/avatar3.jpg' },
    { name: 'Bob Anderson', avatar: 'https://example.com/avatar4.jpg' },
    { name: 'Eva Brown', avatar: 'https://example.com/avatar5.jpg' },
    { name: 'Charlie Davis', avatar: 'https://example.com/avatar6.jpg' },
  ];

  return (
    <Grid container spacing={3} style={{backgroundColor: '#FFFFFF', height: '100vh', width: '100vw'}}>
      <Grid item xs={12}>
        <Animate delay={1}>
          <SearchBarWithAvatar handleSearch={handleSearch} avatarText="Hello There" />
        </Animate>
      </Grid>
      <Grid item xs={12} mt={2}>
        {/* Add a Typography component for the heading */}
        <Typography variant="h6" gutterBottom>
          Matches
        </Typography>
        <Animate delay={1}>
          <Matches users={users} />
        </Animate>
      </Grid>
        <Grid item xs={12} mt={2}>
            {/* Use a Grid container to display Preferences horizontally */}
        <Grid container spacing={1}>
            <Animate delay={1}>
                <Preferences text="Account" />
            </Animate>
            <Animate delay={1}>
                <Preferences text="Settings" />
            </Animate>
            <Animate delay={1}>
                <Preferences text="Notifications" />
            </Animate>
        </Grid>
        <Grid container spacing={1}>
            <Animate delay={1}>
                <LocationBox primaryText="San Francisco, " secondaryText="10:30 AM" />
            </Animate>
            <Animate delay={1}>
                <LocationBox primaryText="New York, " secondaryText="1:30 PM" />
            </Animate>
            <Animate delay={1}>
                <LocationBox primaryText="London, UK " secondaryText="11:30 AM" />
            </Animate>
            <Animate delay={1}>
                <LocationBox primaryText="Paris, " secondaryText="2:30 PM" />
            </Animate>
        </Grid>
        </Grid>

      <Grid item xs={12} lg={4}>
        {/* ... rest of your code ... */}
      </Grid>
      <Grid item xs={12} lg={8}>
        {/* ... rest of your code ... */}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
