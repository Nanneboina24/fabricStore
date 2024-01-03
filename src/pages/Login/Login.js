import { Box, Button, Paper, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../Data/MockData";

// Styled Components
const CustomBox = styled(Box)({
  height: "100vh",
  backgroundImage: 'url("https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg")',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    try {
      const result = await getCredentials(username, password);

      if (result) {
        console.log('Authentication successful:', result);

        //*localstorage
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/home")
      } else {
        console.log('Authentication failed');
      }
      //state empty
      setUsername("");
      setPassword("");

    } catch (error) {
      console.error('Error during authentication:', error);
    }

  };

  return (
    <CustomBox>
      <Box>
        <Paper elevation={12} square={false} sx={{ width: "300px" }}>
          <Box
            sx={{
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Typography variant='h5'>Login</Typography>
            <TextField
              required
              fullWidth
              type="text"
              label="Username"
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              fullWidth
              type="password"
              label="Password"
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleLogin}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </CustomBox>
  );
};

export default Login;
