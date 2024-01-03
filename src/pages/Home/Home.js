import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//*Components
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';
import Cart from "../../components/Cart/Cart";
import Checkout from "../../components/Checkout/Checkout";
import { getCartLength } from '../../Data/MockData';

const Home = () => {
  //*states
  const [displayStatus, setdisplayStatus] = useState(true);
  const [cartLength, setcartLength] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    // Access specific query parameters
    let paramValue = queryParams.get('displayStatus');
    setdisplayStatus(paramValue == 'false' ? false : true);

  }, [location.search]);


  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const user = JSON.parse(localStorage?.getItem("user"));
        let data = await getCartLength(user.id);
        setcartLength(data);
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <Box sx={{ height: "100vh" }}>
      <Stack>
        <Box height={"64px"}>
          <Navbar cartLength={cartLength} />
        </Box>
        <Box>
          <Stack direction={"row"}>
            <Box display={displayStatus ? 'Block' : 'none'}>
              <Sidebar />
            </Box>
            <Box>
              <Routes>
                <Route path="/content" element={<Content setcartLength={setcartLength} />} />
                <Route path="/cart" element={<Cart setcartLength={setcartLength} />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Box>
          </Stack>
        </Box>
      </Stack>

    </Box>
  )
}

export default Home