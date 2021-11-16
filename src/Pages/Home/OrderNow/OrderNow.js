import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const OrderNow = () => {
    const { orderId } = useParams();
    /* console.log(orderId) */

    const { user } = useAuth();

    const initialInfo = { displayName: user.displayName, email: user.email, phone: '', address: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo }
        newInfo[field] = value;
        setOrderInfo(newInfo)
    }


    const handleOrderSubmit = e => {

        const order = {
            ...orderInfo,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Complete')
                }
            })
        e.preventDefault();
    }
    /* console.log(user) */

    /*  const [data, setData] = useState({})
 
     useEffect(() => {
         fetch(`ordernow/${orderId}`)
             .then(res => res.json())
             .then(data => setData(data))
     }, []) */
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    orderId:  {orderId}
                </Grid>
                <Grid item xs={6}>
                    <form onSubmit={handleOrderSubmit} >
                        <TextField
                            id="outlined-basic"
                            label={user.displayName}
                            name="displayName"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />
                        <TextField
                            id="outlined-basic"
                            label={user.email}
                            name="email"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />
                        <TextField
                            id="outlined-basic"
                            label="Your Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />
                        <TextField
                            id="outlined-basic"
                            label="Your Address"
                            name="address"
                            onBlur={handleOnBlur}
                            variant="outlined" /> <br />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>

            </Grid>
        </Box>
    );
};

export default OrderNow;