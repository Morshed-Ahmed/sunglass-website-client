import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Allproducts from '../Allproducts/Allproducts';
import Header from '../Shared/Header/Header';

const Explore = () => {

    const allProducts = [
        {
            id: 1,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 2,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 3,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 4,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 5,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 6,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 7,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 8,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 9,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 10,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 11,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
        {
            id: 12,
            name: 'Morshed Ahmed',
            description: ' When using a responsive columns prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for md:',
            price: '578',
            img: 'https://i.ibb.co/qN1cdT9/Side-35-500x500.jpg'
        },
    ]
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Container>
                <Typography gutterBottom variant="h5" component="div">
                    All Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allProducts.map(pd => <Allproducts
                            key={pd.id}
                            pd={pd}
                        >
                        </Allproducts>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explore;