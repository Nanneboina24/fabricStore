import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const Empty = ({ msg, src }) => {
    return (
        <>
            <Box
                component="img"
                src={src}
                alt={"empty"}
                sx={{
                    width: "300px",
                    height: "300px"
                }}
            >
            </Box>
            <Typography variant='h6'>{msg}</Typography>
        </>
    )
}

export default Empty