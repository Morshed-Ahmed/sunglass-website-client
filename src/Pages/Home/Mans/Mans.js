import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Mans = () => {
    return (

        <Box sx={{ width: '100%', /* marginLeft: 8 */ marginTop: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid /* sx={{ marginLeft: 5, textAlign: 'center' }} */ item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="div">
                                A PAIR FOR HER
                            </Typography>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/CK6nNVg/Female-Model-tinified.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Put on the right sunglasses and conquer the world
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Sunglasses might be a small accessory, but they have a large impact. A great pair can elevate your outfit and your style, but our sunglasses for women can boost your mood too.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <Typography gutterBottom variant="h5" component="div">
                                A PAIR FOR HIM
                            </Typography>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/JQqF59T/ironman-red-model-photo-2021-a-resized-tinified.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Look hot with cool sunglasses
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    No matter your taste, no matter your budget, no matter how often you lose your damn sunglasses in the back of a Lyft, we’ve got you covered with a wide range of trendy and fashionable shades
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Box>

    );
};

export default Mans;