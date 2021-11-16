import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [makeAdmin, setMakeAdmin] = useState(false)
    /* const [success, setSuccess] = useState(false) */

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {

        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)

                    setMakeAdmin(true)
                }
                /* if (data.modifiedCount) {
                    console.log(data)
                    setEmail('')
                    setSuccess(true)
                } */

            })

        e.preventDefault()
    }
    return (

        <div>
            <h4>Make an admin</h4>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {/* {
                makeAdmin && <Alert severity="success">made admin successful</Alert>
            } */}

            {makeAdmin?.email && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Made Admin successful — <strong>check it out!</strong>
            </Alert>}
        </div>
    );
};

export default MakeAdmin;