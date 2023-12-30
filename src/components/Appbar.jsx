import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <AppBar position="fixed" sx={{
      backgroundColor: '#0A2558'
    }}>
      <Toolbar>
        <Typography variant='h6' component={Link} to='/' style={{ textDecoration: 'none', color: 'white' }}>News App</Typography>

        <Box sx={{ marginLeft: 'auto' }}>
          <Button variant="outlined" color="inherit" component={Link} to="/read-later">Read Later</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
