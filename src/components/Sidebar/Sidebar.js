import React, { useEffect, useState } from 'react';
import { getSidebar } from "../../Data/MockData"
import { Avatar, Box, Button, Collapse, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Tooltip, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';

const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState({});
  const [openItems, setOpenItems] = useState({
    "Mens": false,
    "Womens": false
  });
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        const data = await getSidebar();
        setSidebarData(data);
      } catch (error) {
        console.error('Error fetching sidebar data:', error);
      }
    };

    fetchSidebarData();
  }, []); // runs at initial

  const keys = Object.keys(sidebarData);

  const handleMenu = (item) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [item]: !prevOpenItems[item],
    }));
  };

  const handleToggle = () => {
    settoggle((pre) => (!pre))
  }

  return (
    <>
      <Paper>
        <Box sx={{
          height: "calc(100vh - 64px - 36px)",
          width: toggle ? "100px" : "200px",
          overflow: "auto",
          borderRight: '1px solid #ccc',
        }}>
          <List>
            {keys.map((key) => (
              <Box key={key}>
                <ListItem button onClick={() => handleMenu(key)}>
                  <ListItemIcon>
                    <Tooltip title={key} placement="right">
                      <Avatar sx={{ bgcolor: blue[700] }}>
                        <Typography variant='h6'>{key[0] + 'S'}</Typography>
                      </Avatar>
                    </Tooltip>
                  </ListItemIcon>

                  <ListItemText primary={key} />
                  {openItems[key] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openItems[key]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {sidebarData[key].map((subItem) => (
                      <ListItem key={subItem.name} button sx={{ paddingLeft: 5 }} component={Link} to={`/home/content?category=${key}&item=${subItem.name}`}>
                        <Tooltip title={subItem.name} placement="right">
                          <ListItemIcon><Avatar alt="logo" src={subItem.logo} /></ListItemIcon>
                        </Tooltip>
                        <ListItemText primary={subItem.name} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ))}
          </List>
        </Box>
        <Box>
          <Button variant="contained" fullWidth onClick={handleToggle} disableElevation>
            {toggle ? <NavigateNext /> : <NavigateBefore />}
          </Button>
        </Box>
      </Paper>
    </>
  )
}

export default Sidebar