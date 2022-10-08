import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Home/Shared/Header/Header';
/* import useFirebase from '../../../Hooks/useFirebase'; */

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const history = useHistory()

    const { user, registerUser, isLoading, authError } = useAuth();
    /* console.log(user) */
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleLogInSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('your password not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h5">Register</Typography>

                        {!isLoading && <form onSubmit={handleLogInSubmit}>
                            <TextField
                                id="outlined-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="outlined" /> <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="outlined" /> <br /> <br />

                            <TextField
                                id="outlined-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="outlined" /> <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="outlined" /> <br /> <br />
                            <Button variant="contained" type="submit">Login</Button> <br /> <br />
                            <NavLink to="/login">
                                Already Registered? Please Login
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress color="inherit" />}
                        {user?.email && <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            User Login successful — <strong>check it out!</strong>
                        </Alert>}
                        {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            This is an error alert — <strong>check it out!</strong>
                        </Alert>}
                    </Grid>
                    <Grid item xs={8}>

                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Register;