import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Allproducts from '../Allproducts/Allproducts';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fathomless-thicket-76558.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            <Container sx={{ marginTop: 9, marginBlockEnd: 5 }}>
                <Typography gutterBottom variant="h5" component="div">
                    All Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(pd => <Allproducts
                            key={pd._id}
                            pd={pd}
                        >
                        </Allproducts>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Explore;