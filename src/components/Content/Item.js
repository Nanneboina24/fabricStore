import { AddShoppingCart } from '@mui/icons-material';
import { Box, IconButton, Paper, TextField, styled } from '@mui/material'
import React, { useState } from 'react';


// Styled Components
const CustomBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between"
});

const Item = ({ card, handleAddCart }) => {
    const handleChange = async (quantity) => {
        card = {
            ...card,
            quantity: quantity
        }
        console.log("item", card)
    }

    return (
        <>
            <Paper elevation={4} sx={{ padding: 1, cursor: "pointer" }}>
                <Box
                    component="img"
                    src={card.url}
                    alt={"card"}
                    sx={{
                        width: "100%",
                        /* Ensure the image takes 100% of the container width */
                        height: "auto",
                        /* Maintain the image's aspect ratio */
                        objectFit: "cover",
                        /* Ensure the image covers the entire container */
                        borderRadius: "5px",
                        maxWidth: "100%",
                        maxHeight: "100px",
                    }}
                ></Box>
                <CustomBox>
                    <Box>
                        <h4>{card.name}</h4>
                    </Box>
                    <Box>
                        <h5>{"$" + card.price}</h5>
                    </Box>
                </CustomBox>
                <CustomBox>
                    <IconButton color='inherit' onClick={() => handleAddCart(card)}>
                        <AddShoppingCart />
                    </IconButton>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={1}
                        size="small"
                        variant="standard"
                        sx={{
                            width: "25%",
                        }}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </CustomBox>
            </Paper>
        </>
    )
}

export default Item