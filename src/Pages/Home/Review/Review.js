import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://fathomless-thicket-76558.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
            <Box>
                <Box sx={{ marginTop: 9, marginBlockEnd: 5 }}>
            <Container>
            <Typography sx={{marginBottom:4}} variant="h5" gutterBottom component="div">
            Latest reviews
            </Typography> 
                <Paper elevation={0} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            reviews.map(re => 
                                <Grid item  xs={12} sm={4} md={4} >
                                
                                <CardMedia
                                    class="review-img"
                                    component="img"
                                    height="140"
                                    image={re.image}
                                    alt="green iguana"
                                />
                                <Typography variant="body2" color="text.secondary">
                                        {re.description}
                                    </Typography>
                            </Grid>
                                )
                        }
                       
                    
                    </Grid>
                </Paper>
            </Container>
        </Box>
            </Box>


      
    );
};

export default Review;





 /*  <Container sx={{ marginBlockEnd: 7 }}>
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
        </Container> */