import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Allproducts.css'

const Allproducts = (props) => {
    const { _id, name, description, price, image } = props.pd;
    return (
        <Grid sx={{ marginTop: 5 }} className="allproducts" item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
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
                    <Link className="buttons" to={`/ordernow/${_id}`}>
                        <Button variant="contained">Add To Card</Button>
                    </Link>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default Allproducts;