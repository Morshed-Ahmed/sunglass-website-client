import { Button, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BlueGlass = () => {
    return (
        <Container>
            <Grid sx={{ marginTop: 7 }} container spacing={2}>
                <Grid item xs={6}>
                    <Box>
                        <img src={''} alt="" />

                        <CardMedia
                            component="img"
                            height=""
                            image="https://i.ibb.co/P52PBkh/DONOVO-TRANSPARENT-MODEL.jpg"
                            alt="green iguana"
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <CardContent sx={{ marginTop: 18 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            BLUE LIGHT BLOCKING GLASSES
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Give your eyes a break with anti-blue light glasses. Reading glasses with blue light protection is useful for people who want to preserve their vision. Due to the intense strain of working at the computer, your eyes get tired very quickly, our anti-blue glasses help protect your eyes from the harmful effects of the blue light.
                        </Typography>
                        <Button variant="contained">VIEW COLLECTION </Button>
                    </CardContent>
                </Grid>

            </Grid>
        </Container>
    );
};

export default BlueGlass;