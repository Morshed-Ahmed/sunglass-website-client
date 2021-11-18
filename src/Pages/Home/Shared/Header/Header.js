import React from 'react';
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div className="header-style">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Lunettes
                        </Typography>

                        <NavLink className="button-style" to="/home">
                            <Button color="inherit">Home</Button>
                        </NavLink>
                        <NavLink className="button-style" to="/explore">
                            <Button sx={{ color: 'black' }} color="inherit">Explore</Button>
                        </NavLink>


                        {
                            user?.email ?
                                <Box>
                                    <NavLink className="button-style" to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>

                                    <Button sx={{ color: 'black' }} onClick={logout} color="inherit">Logout</Button>
                                </Box>

                                :
                                <NavLink to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }


                    </Toolbar>
                </AppBar>

            </Box>
        </div>
    );
};

export default Header;