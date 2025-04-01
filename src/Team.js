import React from "react";
import { Typography, Grid, Card, CardContent, Avatar, Box } from "@mui/material";

// **Founders Data**
const teamMembers = [
  {
    name: "Dr. Jacob Rafati",
    role: "Founder, CEO & AI CTO",
    image: "/jake2.png",
    bio: "Ph.D. in AI. Merging AI with genetics and longevity science to unlock the genetics of aging.",
    linkedin: "https://www.linkedin.com/in/jacob-rafati/",
  },
  {
    name: "Dr. Nazir Okur",
    role: "Co-founder, CFO & Genetics CTO",
    image: "/nazir.jpeg",
    bio: "Ph.D. in Genetics. Expert in mitochondrial therapy and gene modification for aging reversal.",
    linkedin: "https://www.linkedin.com/in/mnokur/",
  },
];

function Team() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "white",
        py: 6,
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 600,
          fontSize: "2.5rem",
          background: "linear-gradient(90deg, #0077ff, #00e6e6)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 4,
        }}
      >
        Meet the Founders
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#000",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.04)",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
                },
                cursor: "pointer",
              }}
              onClick={() => window.open(member.linkedin, "_blank")}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 140,
                  height: 140,
                  margin: "0 auto",
                  mb: 2,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0077ff", mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#555", mb: 2 }}>
                  {member.role}
                </Typography>
                <Typography variant="body1" sx={{ color: "#444" }}>
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
