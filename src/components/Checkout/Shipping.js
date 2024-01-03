import { Button, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Shipping = () => {
    //states
    const [username, setusername] = useState('');
    const [address, setaddress] = useState('');
    const [open, setOpen] = React.useState(false);

    //*snackbar
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = JSON.parse(localStorage?.getItem("user"));
                setusername(user.username);
            } catch (error) {
                console.error('Error fetching content data:', error);
            }
        };

        fetchData();
    }, [username]);

    return (
        <>
            <Paper elevation={2} sx={{ p: 3 }}>
                <Stack
                    gap={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant='h6' textAlign="center">Details</Typography>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        label="Name"
                        variant="standard"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        label="Address"
                        variant="standard"
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}>
                        Place Order
                    </Button>
                </Stack>
            </Paper>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Order Placed Successfully!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Shipping