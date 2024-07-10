// NavBar.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', alignItems: 'center', marginRight: 'auto', marginLeft: '20%', display: 'flex', gap: '16px', fontFamily: 'Bebas Neue',  }}>

      <div style={{ marginLeft: 'auto', marginRight: '20%', display: 'flex', gap: '16px' }}>
        <Link component={RouterLink} to="/home" color="inherit" variant="button" underline="none" style={{ color: '#BBBBBB' }}>
          Home
        </Link>
        <Link component={RouterLink} to="/dashboard" color="inherit" variant="button" underline="none" style={{ color: '#BBBBBB' }}>
          Dashboard
        </Link>
        <Link component={RouterLink} to="/about" color="inherit" variant="button" underline="none" style={{ color: '#BBBBBB' }}>
          About
        </Link>
        <Link component={RouterLink} to="/login" color="inherit" variant="button" underline="none" style={{ color: '#BBBBBB' }}>
          Login
        </Link>
        <Link component={RouterLink} to="/search" color="inherit" variant="button" underline="none" style={{ color: '#BBBBBB' }}>
          Search
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
