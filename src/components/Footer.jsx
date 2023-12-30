// Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ position: 'static', top: 'auto', bottom: 0 }}>
            <Typography sx={{ py: 2, textAlign: 'center' }} variant="body1" color="inherit">
                © {new Date().getFullYear()} MD Obaidullah Al-Faruk
            </Typography>
        </Box>
    );
};

export default Footer;
