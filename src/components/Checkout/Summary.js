import { Box, Divider, Paper, Stack, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { getCart } from '../../Data/MockData';

// Styled Components
const CustomRowBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between"

})

const Summary = () => {
    const [rows, setrows] = useState([]);
    useEffect(() => {
        const fetchRowsData = async () => {
            try {
                const user = JSON.parse(localStorage?.getItem("user"));
                const data = await getCart(user.id);
                setrows(data);
            } catch (error) {
                console.error('Error fetching content data:', error);
            }
        };

        fetchRowsData();
    }, [rows]);

    const getTotal = () => {
        return rows.reduce((total, item) => total + item.quantity * item.price, 0);
    }

    return (
        <>
            <Paper elevation={2} sx={{ p: 3 }}>
                <Stack gap={2}>
                    <Typography variant='h6' textAlign="center">Order Summary</Typography>
                    <Typography variant='h7'>you have {"2"} items in your shopping cart</Typography>
                    <Divider></Divider>
                    {
                        rows.map((row) => {
                            return (
                                <>
                                    <CustomRowBox>
                                        <Typography variant='h7'>{row.quantity} x {row.name}</Typography>
                                        <Typography variant='h7'>${row.quantity * row.price}</Typography>
                                    </CustomRowBox>
                                    <Divider></Divider>
                                </>
                            )
                        })
                    }
                    <CustomRowBox>
                        <Typography variant='h7'>Total</Typography>
                        <Typography variant='h7'>${getTotal()}</Typography>
                    </CustomRowBox>

                </Stack>
            </Paper>

        </>

    )
}

export default Summary