import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import Logo from "./Logo"; // Importing the logo

// **Acid-Trip Animated Background**
const acidTripAnimation = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(120deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(240deg); }
`;

const Title = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "400% 400%",
        animation: `${acidTripAnimation} 10s infinite alternate ease-in-out`,
      }}
    >
      {/* Enlarged Logo */}
      <Box sx={{ transform: "scale(1.5)", mb: 2 }}>
        <Logo />
      </Box>

      {/* Regenesis Technology Title */}
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: "bold",
          fontSize: "4rem",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0px 0px 40px rgba(255, 255, 255, 0.9)",
        }}
      >
        Regenesis Technology
      </Typography>
    </Box>
  );
};

export default Title;
