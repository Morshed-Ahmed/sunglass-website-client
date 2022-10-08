import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Shared/Header/Header';

const Login = () => {




    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (

        <div>
            <Header></Header>
            <Container sx={{ marginBottom: 7, marginTop: 7 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{ marginLeft: 50 }}>
                        <Typography variant="h5">Please Login</Typography>
                        <form onSubmit={handleLogInSubmit}>
                            <TextField
                                id="outlined-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="outlined" /> <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="outlined" /> <br /> <br />
                            <Button variant="contained" type="submit">Login</Button> <br />
                            <NavLink to="/register">
                                New User? Please Register
                            </NavLink> <br /> <br />

                            {isLoading && <CircularProgress color="inherit" />}
                            {user?.email && <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                User Login successful — <strong>check it out!</strong>
                            </Alert>}
                            {authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                This is an error alert — <strong>check it out!</strong>
                            </Alert>}

                        </form>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    </Grid>


                </Grid>
            </Container>
            <Footer></Footer>

        </div>
    );
};
export default Login;
