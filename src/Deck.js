import React, { useState, useEffect } from "react";
import { Box, Fade, IconButton } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import Title from "./Title";
import Pitch from "./Pitch";
import Solutions from "./Solutions";
import Products from "./Products";
import Team from "./Team";
import Market from "./Market";

const sections = [Title, Pitch, Solutions, Products, Team, Market];

const Deck = () => {
  const [currentSection, setCurrentSection] = useState(0);
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
        backgroundColor: "#ffffff", // Clean white background
        color: "#000",              // Dark text
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
          <Box sx={{ width: "100vw", height: "100vh" }}>
            {React.createElement(sections[currentSection])}
          </Box>
        </Box>
      </Fade>

      {/* Navigation Controls */}
      {currentSection > 0 && (
        <IconButton
          onClick={navigatePrev}
          sx={{ position: "absolute", top: 20, color: "#444" }}
        >
          <ArrowUpward fontSize="large" />
        </IconButton>
      )}
      {currentSection < sections.length - 1 && (
        <IconButton
          onClick={navigateNext}
          sx={{ position: "absolute", bottom: 20, color: "#444" }}
        >
          <ArrowDownward fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default Deck;
