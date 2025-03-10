import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

// **Pulsing Background Animation**
const acidTripAnimation = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(90deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(180deg); }
`;

function Home() {
    return (
        <>
            {/* HEADER / NAV BAR */}
            <AppBar
                position="static"
                sx={{
                    background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                    boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.8)"
                }}
            >
                <Toolbar>
                    {/* Logo Image */}
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="Regenesis Technology Logo"
                        sx={{ height: 50, marginRight: 2, filter: "drop-shadow(0px 0px 10px #fff)" }}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Orbitron, sans-serif",
                            textShadow: "0px 0px 15px rgba(255, 255, 255, 0.9)"
                        }}
                    >
                        Regenesis Technology
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* HERO SECTION */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    py: 6,
                    background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
                    backgroundSize: "400% 400%",
                    animation: `${acidTripAnimation} 10s infinite alternate ease-in-out`
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Orbitron, sans-serif",
                        textShadow: "0px 0px 30px rgba(255, 255, 255, 0.8)",
                        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                    }}
                >
                    AI for Immortality.
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        maxWidth: 800,
                        mx: 'auto',
                        mb: 3,
                        fontFamily: "Orbitron, sans-serif",
                        color: "#fff",
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)"
                    }}
                >
                    Regenesis Technology is on a 20-year mission to eliminate aging and achieve
                    <Box component="span" sx={{ fontWeight: "bold" }}> biological immortality.</Box>
                     In the
                    <Box component="span" sx={{ fontWeight: "bold" }}> first 5 years,</Box>
                    we are developing AI to decode the
                    <Box component="span" sx={{ fontWeight: "bold" }}> genetics of aging</Box>
                     and recommend genetic reprogramming to reverse aging, maximize lifespan, and extend healthspan.
                    This is the beginning of a future where
                    <Box component="span" sx={{ fontWeight: "bold" }}> aging is a choice.</Box>
                </Typography>

                {/* Call to Action Button */}
                {/* Call to Action Button */}
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/subscription"
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                        color: "#fff",
                        padding: "15px 30px",
                        borderRadius: "50px",
                        boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
                        transition: "0.3s",
                        mt: 4, // Adds spacing above the button
                        "&:hover": { background: "linear-gradient(45deg, #00ffff, #ff00ff)", transform: "scale(1.05)" }
                    }}
                >
                    🧬 I want to live forever, sign me up!
                </Button>

            </Box>

            {/* FOOTER */}
            <Box
                sx={{
                    background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                    py: 3,
                    textAlign: 'center',
                    boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.8)"
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Orbitron, sans-serif",
                        textShadow: "0px 0px 10px rgba(255, 255, 255, 0.9)"
                    }}
                >
                    © {new Date().getFullYear()} Regenesis Technology – Reprogramming Life
                </Typography>
            </Box>
        </>
    );
}

export default Home;
