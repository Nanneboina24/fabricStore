import { AccountCircle, LogoutOutlined, ShoppingCart } from '@mui/icons-material'
import { AppBar, Avatar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [user, setuser] = useState({});
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {

        //*storage
        const user = JSON.parse(localStorage?.getItem("user"));
        setuser(user);
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    };

    fetchUserData();
  }, []); // initial only it renders


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
            <MenuItem>
              <Avatar alt="logo" src={user.logo}
                sx={{ width: 25, height: 25, mr: 1 }} />
              <Typography
                variant="subtitle2"
              >
                {user.username}
              </Typography>

            </MenuItem>
            <Divider></Divider>
            <MenuItem onClick={handleLogout}><LogoutOutlined />Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar