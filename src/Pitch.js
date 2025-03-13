import React from "react";
import { Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import JoinButton from "./JoinButton"; // Import the button component

// **Pulsing Background Animation**
const acidTripAnimation = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(90deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(180deg); }
`;

const Pitch = () => {
    return (
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
                AI for Aging Detection.
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
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6
                }}
            >
                Regenesis Technology is using AI to decode aging at the
                <Box component="span" sx={{ fontWeight: "bold", mx: 0.5 }}>genetic level</Box>,
                identifying its root causes and developing interventions to prevent aging-related diseases.
            </Typography>
            <JoinButton />
        </Box>
    );
};

export default Pitch;
