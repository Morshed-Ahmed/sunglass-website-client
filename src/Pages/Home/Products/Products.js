import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
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
    }
]

const Products = () => {
    /* const { id, name, img, description, price } = products; */
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography gutterBottom variant="h5" component="div">
                    New Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        >
                        </Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;