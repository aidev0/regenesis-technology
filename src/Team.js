import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// **Acid-Trip Animated Background**
const acidBackground = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(120deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(240deg); }
`;

// **Neon Glow Animation for Avatars**
const neonPulse = keyframes`
  0% { box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.6); }
  50% { box-shadow: 0px 0px 30px rgba(0, 255, 255, 1); }
  100% { box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.6); }
`;

// **Founders Data**
const teamMembers = [
  {
    name: "Dr. Jacob Rafati",
    role: "Founder, CEO & AI CTO",
    image: "/jake2.png", // Public folder image
    bio: "Ph.D. in AI. Merging AI with genetics and longevity science to achieve biological immortality.",
    linkedin: "https://www.linkedin.com/in/jacob-rafati/",
  },
  {
    name: "Dr. Nazir Okur",
    role: "Co-founder, CFO & Genetics CTO",
    image: "/nazir.jpeg", // Public folder image
    bio: "Ph.D. in Genetics. Expert in mitochondrial therapy and gene modification for aging reversal.",
    linkedin: "https://www.linkedin.com/in/mnokur/",
  },
];

function Team() {
  return (
    <Box
      sx={{
        minHeight: "120vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "500% 500%",
        animation: `${acidBackground} 10s infinite alternate ease-in-out`,
        overflow: "hidden",
        py: 6,
      }}
    >
      {/* Page Title */}
      
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: "regular",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)",
        }}
      >
        Meet the Founders.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: "rgba(0, 0, 0, 0.85)",
                color: "#fff",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.2)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.6)",
                },
                cursor: "pointer",
              }}
              onClick={() => window.open(member.linkedin, "_blank")} // Opens LinkedIn in new tab
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 140,
                  height: 140,
                  margin: "0 auto",
                  boxShadow: "0px 0px 15px rgba(255, 0, 255, 0.7)",
                  animation: `${neonPulse} 2s infinite alternate`,
                  filter: "grayscale(0%) contrast(120%)",
                  "&:hover": {
                    filter: "grayscale(0%) contrast(150%) brightness(1.2)",
                  },
                }}
              />
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#00ffff", mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "#ff00ff", mb: 2 }}>
                  {member.role}
                </Typography>
                <Typography variant="body1" sx={{ color: "#ddd" }}>
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Team;
