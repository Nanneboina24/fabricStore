import { AccountCircle, LogoutOutlined, Notifications, ShoppingCart } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCartLength } from '../../Data/MockData';

// Styled Components
const CustomBadge = styled(Box)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor: "red",
  color: "white",
  fontSize: "10px",
  top: "-8px",
  right: "8px",
  zIndex: "1"
});

const Navbar = ({ cartLength }) => {
  //*states
  const [anchorEl, setAnchorEl] = useState(null);
  // const [cartLength, setcartLength] = useState(0);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     try {
  //       const user = JSON.parse(localStorage?.getItem("user"));
  //       let data = await getCartLength(user.id);
  //       setcartLength(data);
  //     } catch (error) {
  //       console.error('Error fetching content data:', error);
  //     }
  //   };

  //   fetchCartData();
  // }, [cartLength]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("user");
    navigate("/")
  }

  return (
    <AppBar position="static" >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit"
        }}
          component={Link} to={`/home/content`} >
          <Avatar alt="logo" src="https://images.pexels.com/photos/4394267/pexels-photo-4394267.jpeg" />
          <Typography
            variant="h6"
            noWrap
          >
            Fabric Store
          </Typography>
        </Box>


        <Box>
          <IconButton
            size="small"
            color="inherit"
            component={Link} to={`/home/cart?displayStatus=false`}
          >
            <ShoppingCart />
            <CustomBadge>
              {cartLength}
            </CustomBadge>
          </IconButton>

          <IconButton
            size="large"
            aria-controls="menuId"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>


          <Menu
            id="menuId"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}><LogoutOutlined />Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar