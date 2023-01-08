import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InfoIcon from '@mui/icons-material/Info';

export default function ButtonAppBar() {

  const style={
    color:"white",
    // width:"2rem",
    margin : "1rem",
    display : "flex",
    justifyContent : "space-evenly",
    // padding:"2rem",
    textDecoration:"none",
    textTransform:"capitalize"
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:"transparent"}}>
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
            Logo
          </Typography>
          <NavLink to='/' style={style}><HomeIcon/> home </NavLink>
          <NavLink to='/contact' style={style}><CallIcon/> contact </NavLink>
          <NavLink to='/service' style={style}><AssignmentIndIcon/> service </NavLink>
          <NavLink to='/about' style={style}><InfoIcon/> about </NavLink>

        </Toolbar>
      </AppBar>
    </Box>
  );
}