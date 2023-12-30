import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsCard from './NewsCard';
import { useNewsContext } from '../context/newsContext';

export default function CardList({ apiResponse }) {
    console.log("API RESPSINSE: ", apiResponse)
    const [visibleNews, setVisibleNews] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const { addReadLaterItem } = useNewsContext();

    useEffect(() => {
        setVisibleNews(apiResponse.slice(0, 20))
    }, [apiResponse])

    const fetchMoreData = () => {
        console.log("Fetch More data is called")
        const startIndex = visibleNews.length;
        const endIndex = startIndex + 10;
        const moreData = apiResponse.slice(startIndex, endIndex);
        if (moreData.length === 0) {
            setHasMore(false);
            return;
        }
        setVisibleNews([...visibleNews, ...moreData]);
    }

    return (
        <Container sx={{ paddingTop: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <CssBaseline />
            <InfiniteScroll
                dataLength={visibleNews.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                <Grid container spacing={3}>
                    {visibleNews.map((newsItem, index) => (
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
                            <Button size="small" color="primary" onClick={() => addReadLaterItem(newsItem)}>Add to Read Later</Button>

                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </Container>
    );
}
