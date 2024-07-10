import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Stack, TextField, Typography, circularProgressClasses, colors } from "@mui/material";
import React, { useState } from "react";
import { images } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import Animate from "../components/common/Animate";

const LoginPage = () => {
  const navigate = useNavigate();

  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSignin = (e) => {
    e.preventDefault();
    setOnRequest(true);

    const interval = setInterval(() => {
      setLoginProgress(prev => prev + 100 / 40);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2100);

    setTimeout(() => {
      navigate("/dashboard");
    }, 3300);
  };

  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      {/* background box */}
      <Box sx={{
        position: "absolute",
        right: 0,
        height: "100%",
        width: "70%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${images.tiltedPhone})`,
        backgroundColor: '#ED1504'
      }} />
      {/* background box */}

      {/* Login form */}
      <Box sx={{
        position: "absolute",
        left: 0,
        height: "100%",
        width: isLoggedIn ? "100%" : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
        transition: "all 1s ease-in-out",
        bgcolor: '#ED1504'
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: isLoggedIn ? 0 : 1,
          transition: "all 0.3s ease-in-out",
          height: "100%",
          "::-webkit-scrollbar": { display: "none" }
        }}>
      {/* logo */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Animate type="fade" delay={1}>
          <Typography variant="h3" fontWeight="bold" color="white" fontFamily="Your-Cool-Font">
            JTierney Tech
          </Typography>
          {/* Add the font-family property with the desired cool font name */}
          {/* <img src={images.logo} alt="logo" height={60} /> */}
        </Animate>
      </Box>
      {/* logo */}

          {/* form */}
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" }
          }}>
          <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
            <Box component="form" maxWidth={400} width="100%" onSubmit={onSignin}>
              <Stack spacing={3}>
            <TextField
              label="Username"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                sx: {
                  color: 'black',
                },
              }}
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                },
              }}
              sx={{
                backgroundColor: 'white',  // Set background color to white
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Change to your desired color
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                sx: {
                  color: 'black',
                },
              }}
              InputProps={{
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                },
              }}
              sx={{
                backgroundColor: 'white',  // Set background color to white
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Change to your desired color
                },
              }}
            />

                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "#F4739F",
                    '&:hover': {
                      backgroundColor: "#bb5588",
                    },
                  }}
                >
                  Sign In
                </Button>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox sx={{color: "white"}}/>} label="Remember me" sx={{color: "white"}}/>
                    </FormGroup>
                    <Typography color="error" fontWeight="bold" sx={{color: "white"}}>
                      <Link to="#">
                        Forgot password?
                      </Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>
          {/* form */}

          {/* footer */}
          <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
            <Animate type="fade" delay={1}>
              <Typography
                display="inline"
                fontWeight="bold"
                sx={{ "& > a": { color: colors.common.white, ml: "5px" }, color: "white"}}
              >
                Don't have an account -
                <Link to="#">
                  Register now
                </Link>
              </Typography>
            </Animate>
          </Box>
          {/* footer */}

          {/* loading box */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: colors.common.white,
                zIndex: 1000
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round"
                    },
                    position: "absolute",
                    left: 0,
                    color: '#ED1504'
                  }}
                />
              </Box>
            </Stack>
          )}
          {/* loading box */}
        </Box>
      </Box>
      {/* Login form */}
    </Box>
  );
};

export default LoginPage;