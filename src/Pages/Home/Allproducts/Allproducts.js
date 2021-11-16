import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Allproducts = (props) => {
    const { id, name, description, price, img } = props.pd;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/ordernow/${id}`}>
                        <Button variant="contained">Add To Card</Button>
                    </Link>
                    {/* <Button size="small" color="primary">
                        Share
                    </Button> */}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Allproducts;