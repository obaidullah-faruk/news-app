import React from 'react';
import { Modal, Grid, Typography, Button } from '@mui/material';

const CardDetails = ({ isOpen, handleClose, title, description, content, urlToImage, publishedAt, author, source }) => {
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Grid container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', maxWidth: '80vw', maxHeight: '80vh', overflowY: 'auto' }}>
                <Grid item xs={12} md={6} sx={{ paddingRight: { md: 1 } }}>
                    <img src={urlToImage} alt="News" style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ paddingLeft: { md: 1 } }}>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Author: {author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Source: {source.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Published at {publishedAt}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {content}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {description}
                    </Typography>
                </Grid>
                <Button onClick={handleClose} variant="contained" color="error" size="medium" sx={{ position: 'absolute', top: 0, right: 0 }}>
                    Close
                </Button>
            </Grid>
        </Modal>
    );
};

export default CardDetails;
