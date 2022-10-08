import React, { useEffect, useState } from 'react';
import useAuth from './../../../Hooks/useAuth';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const Orders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://fathomless-thicket-76558.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <>
            <>Order {orders.length} </>
            {
                orders.map(pd =>
                    <Card key={pd._id} sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={pd?.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pd?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pd?.description}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pd?.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                        </CardActions>
                    </Card>
                )
            }




        </>
    );
};

export default Orders;