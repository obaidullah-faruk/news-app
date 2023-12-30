import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardDetails from './CardDetails';

const noImageAvailable = 'no_image.jpeg'
export default function NewsCard({ title, description, content, urlToImage, publishedAt, author, source }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const publishedAtInLocalTime = new Date(publishedAt).toLocaleString();
    const imageUrl = urlToImage || noImageAvailable
    return (
        <>
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
                <CardActionArea style={{ flex: 1 }} onClick={handleCardClick}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={imageUrl}
                        alt="News"
                        style={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Published at {publishedAtInLocalTime}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            <CardDetails
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
                title={title}
                description={description}
                content={content}
                urlToImage={imageUrl}
                publishedAt={publishedAtInLocalTime}
                author={author}
                source={source}
            />
        </>
    );
}