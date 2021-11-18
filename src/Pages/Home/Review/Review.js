import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container sx={{ marginBlockEnd: 7 }}>
            <h3 className="review-header">Reviews</h3>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(re =>
                        <Card sx={{ maxWidth: 340 }}>
                            <CardActionArea >
                                <CardMedia
                                    class="review-img"
                                    component="img"
                                    height="140"
                                    image={re.image}
                                    alt="green iguana"
                                />
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary">
                                        {re.description}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                }
            </Grid>
        </Container>
    );
};

export default Review;