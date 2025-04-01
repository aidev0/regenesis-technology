import React from "react";
import { Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "🔬 DNA & Epigenetic Analysis",
    problem: "Aging begins at the molecular level, but it’s invisible until it's too late.",
    solution: "We use AI to analyze DNA mutations, epigenetic drift, and cellular markers to detect aging at its root.",
    gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)", // purple
  },
  {
    title: "📊 AI-Powered Biomarker Tracking",
    problem: "No current system provides real-time aging insights at a personal level.",
    solution: "Our AI detects metabolic and protein-level biomarkers, predicting biological age and tracking longevity interventions.",
    gradient: "linear-gradient(135deg, #00c9ff, #92fe9d)", // aqua-green
  },
  {
    title: "🧠 Predictive Aging Models",
    problem: "Most people don't know they are aging until symptoms appear.",
    solution: "By analyzing vast datasets, our AI predicts how fast you're aging and recommends interventions before deterioration begins.",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)", // golden
  }
];

function Solutions() {
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
        backgroundColor: "#fff",
        py: 6,
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "3rem",
          background: "linear-gradient(90deg, #00bcd4, #ff4081)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 4,
        }}
      >
        AI-Powered Aging Detection 🧬
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ width: "90vw" }}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 6,
                background: solution.gradient,
                width: "100%",
                maxWidth: "400px",
                height: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "0.3s",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {/* Glass-like white overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(6px)",
                  zIndex: 1,
                }}
              />

              <CardContent
                sx={{
                  px: 4,
                  py: 3,
                  textAlign: "left",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#222" }}>
                  {solution.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#333" }}>
                  {solution.problem}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "1.15rem", color: "#00796b" }}>
                  {solution.solution}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Button
          variant="contained"
          component={Link}
          to="/products"
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            padding: "14px 36px",
            background: "linear-gradient(90deg, #00bcd4, #ff4081)",
            color: "#fff",
            borderRadius: "30px",
            boxShadow: "0 0 20px rgba(0, 188, 212, 0.3)",
            transition: "transform 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #ff4081, #00bcd4)",
              transform: "scale(1.05)",
            }
          }}
        >
          Join the Future of Longevity 🚀
        </Button>
      </Box>
    </Box>
  );
}

export default Solutions;
