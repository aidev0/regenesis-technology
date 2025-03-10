import React from "react";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

// **🔥 Animated Gradient for Infinity Stroke**
const infinityGlow = keyframes`
  0% { stroke: #ff00ff; filter: drop-shadow(0px 0px 8px #ff00ff); }
  25% { stroke: #00ffff; filter: drop-shadow(0px 0px 10px #00ffff); }
  50% { stroke: #ff6600; filter: drop-shadow(0px 0px 9px #ff6600); }
  75% { stroke: #00ff66; filter: drop-shadow(0px 0px 10px #00ff66); }
  100% { stroke: #ff00ff; filter: drop-shadow(0px 0px 8px #ff00ff); }
`;

// **🔥 Animated Gradient for Background**
const acidTripBackground = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(180deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(360deg); }
`;

function Logo() {
  return (
    <Box
      sx={{
        width: 120,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "400% 400%",
        animation: `${acidTripBackground} 6s infinite alternate ease-in-out`,
        borderRadius: "50px",
        padding: "10px",
      }}
    >
      <svg
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        {/* **🔥 Smoothly Changing Infinity Symbol** */}
        <path
          d="M10,30 C20,0 50,0 60,30 C70,60 100,60 110,30 M10,30 C20,60 50,60 60,30 C70,0 100,0 110,30"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#ff00ff"
          style={{
            animation: `${infinityGlow} 4s infinite alternate ease-in-out`,
          }}
        />
      </svg>
    </Box>
  );
}

export default Logo;
