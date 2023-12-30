import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { useNewsContext } from '../context/newsContext';
import NewsCard from './NewsCard';

const ReadLater = () => {
    const { readLaterItems } = useNewsContext();

    return (
        <Container sx={{ paddingTop: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>

            {readLaterItems.length === 0 ? <Typography variant="h5">You didn't add any items to Read Later</Typography> : <Grid container spacing={3}>
                {readLaterItems.map((newsItem, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <NewsCard
                            title={newsItem.title}
                            description={newsItem.description}
                            url={newsItem.url}
                            content={newsItem.content}
                            urlToImage={newsItem.urlToImage}
                            publishedAt={newsItem.publishedAt}
                            author={newsItem.author}
                            source={newsItem.source}
                        />
                    </Grid>
                ))}
            </Grid>
            }
        </Container>
    );
};

export default ReadLater;
