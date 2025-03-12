import React, { useState, useEffect } from "react";
import { Box, Fade, IconButton } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import Pitch from "./Pitch";
import Solutions from "./Solutions";
import Products from "./Products";
import Team from "./Team";
import Plan from "./Plan";
import Market from "./Market";
import Logo from "./Logo"; // Intro logo

const sections = [Pitch, Solutions, Products, Team, Plan, Market];

const acidTripAnimation = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(120deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(240deg); }
`;

const Deck = () => {
  const [currentSection, setCurrentSection] = useState(-1); // Start with logo
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (currentSection === -1) {
      setTimeout(() => {
        setFadeIn(false);
        setTimeout(() => {
          setCurrentSection(0);
          setFadeIn(true);
        }, 500);
      }, 3000);
    }

    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        navigateNext();
      } else if (event.deltaY < 0 && currentSection > 0) {
        navigatePrev();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" && currentSection < sections.length - 1) {
        navigateNext();
      } else if (event.key === "ArrowUp" && currentSection > 0) {
        navigatePrev();
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection]);

  const navigateNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
      setFadeIn(true);
    }, 500);
  };

  const navigatePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSection((prev) => Math.max(prev - 1, 0));
      setFadeIn(true);
    }, 500);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "400% 400%",
        animation: `${acidTripAnimation} 10s infinite alternate ease-in-out`,
        color: "white",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Fade in={fadeIn} timeout={800}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentSection === -1 ? (
            <Logo />
          ) : currentSection === 0 ? (
            <Box sx={{ width: "100vw", height: "100vh" }}>
              <Pitch />
            </Box>
          ) : (
            React.createElement(sections[currentSection])
          )}
        </Box>
      </Fade>

      {/* Navigation Controls */}
      {currentSection > 0 && (
        <IconButton
          onClick={navigatePrev}
          sx={{ position: "absolute", top: 20, color: "white" }}
        >
          <ArrowUpward fontSize="large" />
        </IconButton>
      )}
      {currentSection < sections.length - 1 && (
        <IconButton
          onClick={navigateNext}
          sx={{ position: "absolute", bottom: 20, color: "white" }}
        >
          <ArrowDownward fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default Deck;
