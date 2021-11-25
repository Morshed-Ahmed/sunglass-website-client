import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Paper } from '@mui/material';

const Mans = () => {
    return (
        <Box sx={{ marginTop: 9, marginBlockEnd: 5 }}>
            <Container>
                <Paper elevation={0} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={12} md={6} >
                            <Typography gutterBottom variant="h5" component="div">
                                A PAIR FOR HER
                            </Typography>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/CK6nNVg/Female-Model-tinified.jpg"
                                alt="green iguana"
                                sx={{ marginBottom: 2 }}
                            />

                            <Typography gutterBottom variant="h5" component="div">
                                Put on the right sunglasses and conquer the world
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sunglasses might be a small accessory, but they have a large impact. A great pair can elevate your outfit and your style, but our sunglasses for women can boost your mood too.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <Typography gutterBottom variant="h5" component="div">
                                A PAIR FOR HIM
                            </Typography>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.ibb.co/JQqF59T/ironman-red-model-photo-2021-a-resized-tinified.png"
                                alt="green iguana"
                                sx={{ marginBottom: 2 }}
                            />

                            <Typography sx={{ marginBottom: 5 }} gutterBottom variant="h5" component="div">
                                Look hot with cool sunglasses
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                No matter your taste, no matter your budget, no matter how often you lose your damn sunglasses in the back of a Lyft, we’ve got you covered with a wide range of trendy and fashionable shades
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Mans;



