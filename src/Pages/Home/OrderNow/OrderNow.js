import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";

const OrderNow = () => {
    const { orderId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fathomless-thicket-76558.herokuapp.com/singleProducts/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    /* console.log(product) */

    const { user } = useAuth();
    const email = user.email;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = email


        fetch('https://fathomless-thicket-76558.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Complete')
                }
            })
        console.log(data)
    }
    return (
        <div>
            <Header></Header>
            <Container >

                <Box sx={{ width: '100%', marginTop: 9, marginBlockEnd: 5 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={product.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product?.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name")}
                                    defaultValue={product.name}

                                />
                                <br />


                                <input
                                    {...register("price", { required: true })}
                                    defaultValue={product?.price}

                                />
                                <br />
                                <input
                                    {...register("description", { required: true })}
                                    defaultValue={product?.description}

                                />
                                <br />
                                <input
                                    {...register("image", { required: true })}
                                    defaultValue={product?.image}

                                />
                                <br />


                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Conform Order"

                                />
                            </form>

                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default OrderNow;