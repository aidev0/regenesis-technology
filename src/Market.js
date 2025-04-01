import React from "react";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";

const marketStats = [
  {
    title: "🌎 Global Longevity Market",
    value: "$600B by 2030",
    subtitle: "Driven by growing demand for healthier, longer lives and age-related therapies.",
    color: "#8e2de2",
  },
  {
    title: "📈 Anti-Aging Tech Growth",
    value: "35% CAGR",
    subtitle: "AI, biotech, and personalized medicine are fueling exponential market expansion.",
    color: "#00bcd4",
  },
  {
    title: "🧪 Gene Therapy Expansion",
    value: "$20B by 2028",
    subtitle: "Advanced gene-editing and mitochondrial therapies are unlocking anti-aging potential.",
    color: "#f9a825",
  },
  {
    title: "💊 Personalized Longevity Treatments",
    value: "$150B+ industry",
    subtitle: "Tailored regimens based on DNA and biomarkers are becoming the new healthcare norm.",
    color: "#4caf50",
  },
];

const Market = () => (
  <Box
    sx={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#ffffff",
      py: 8,
      px: 3,
    }}
  >
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontFamily: "Orbitron, sans-serif",
        fontWeight: "bold",
        fontSize: "2.5rem",
        background: "linear-gradient(90deg, #0077ff, #00e6e6)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        mb: 6,
      }}
    >
      The Market for Longevity 💰
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {marketStats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={5} key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            elevation={6}
            sx={{
              borderRadius: 6,
              background: `linear-gradient(135deg, ${stat.color}, #ffffff)`,
              color: "#000",
              width: "100%",
              maxWidth: 380,
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <CardContent sx={{ padding: 4, textAlign: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                {stat.title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#222", mb: 2 }}>
                {stat.value}
              </Typography>
              <Typography variant="body1" sx={{ color: "#333", fontSize: "1rem", lineHeight: 1.6 }}>
                {stat.subtitle}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Market;
