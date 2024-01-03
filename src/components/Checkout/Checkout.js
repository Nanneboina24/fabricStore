import { Box, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import Summary from './Summary';
import Shipping from './Shipping';

// Styled Components
const CustomBox = styled(Box)({
  padding: "20px",
  height: "calc(100vh - 64px)",
  width: "100vw",//calc(100vw - 200px)",
  overflow: "auto",
})

const Checkout = () => {
  return (
    <CustomBox>
      <Box sx={{ mb: 2 }}>
        <Typography variant='h6'>Shipping</Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={3}>

        <Grid item key={1} xs={12} sm={12} md={6} lg={6}>
          <Summary />
        </Grid>
        <Grid item key={2} xs={12} sm={12} md={6} lg={6}>
          <Shipping />
        </Grid>


      </Grid>
    </CustomBox>
  )
}

export default Checkout