import React from 'react';
import './Banner.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Banner = () => {
    return (
        <Box className="banner-style" sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sx={{ marginTop: 12 }} item xs={4}>
                    <Typography gutterBottom variant="h5" component="div">
                        FLAT
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        50% OFF
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        ON SUNGLASSES
                    </Typography>
                </Grid>
                <Grid item xs={8}>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;