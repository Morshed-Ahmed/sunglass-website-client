import React from 'react';
import './Banner.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Banner = () => {
    return (
        <Box className="banner-style" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography gutterBottom variant="h5" component="div">
                        FLAT
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        50% OFF
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        ON SUNGLASSES
                    </Typography>
                    {/* <Button size="small" color="primary">
                        Shop Now
                    </Button> */}
                    <Button variant="outlined">Shop Now</Button>
                </Grid>
                <Grid item xs={8}>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;