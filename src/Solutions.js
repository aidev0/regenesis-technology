import React from "react";
import { Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

// **Acid-Trip Animated Background**
const acidBackground = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(120deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(240deg); }
`;

// **Neon Glow Effect for Cards**
const neonGlow = keyframes`
  0% { box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.6); }
  50% { box-shadow: 0px 0px 30px rgba(0, 255, 255, 1); }
  100% { box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.6); }
`;

// **AI-Powered Aging Detection Breakdown**
const solutions = [
  {
    title: "🔬 DNA & Epigenetic Analysis",
    problem: "Aging begins at the molecular level, but it’s invisible until it's too late.",
    solution: "We use AI to analyze DNA mutations, epigenetic drift, and cellular markers to detect aging at its root.",
    gradient: "linear-gradient(135deg, #ff00ff, #ff6600, #00ffcc)",
  },
  {
    title: "📊 AI-Powered Biomarker Tracking",
    problem: "No current system provides real-time aging insights at a personal level.",
    solution: "Our AI detects metabolic and protein-level biomarkers, predicting biological age and tracking longevity interventions.",
    gradient: "linear-gradient(135deg, #00ffcc, #ff00ff, #ff6600)",
  },
  {
    title: "🧠 Predictive Aging Models",
    problem: "Most people don't know they are aging until symptoms appear.",
    solution: "By analyzing vast datasets, our AI predicts how fast you're aging and recommends interventions before deterioration begins.",
    gradient: "linear-gradient(135deg, #ff6600, #00ffcc, #ff00ff)",
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
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "500% 500%",
        animation: `${acidBackground} 10s infinite alternate ease-in-out`,
        py: 4, // Add padding
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: "3rem",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)",
        }}
      >
        AI-Powered Aging Detection 🧬
      </Typography>

      {/* Cards Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ width: "90vw", mt: 3 }}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              elevation={10}
              sx={{
                borderRadius: 6,
                background: solution.gradient,
                color: "#fff",
                padding: "2px",
                animation: `${neonGlow} 5s infinite alternate`,
                backgroundSize: "300% 300%",
                boxShadow: "0px 0px 50px rgba(255, 0, 255, 0.7)",
                width: "100%",
                maxWidth: "400px",
                height: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  borderRadius: 5,
                  background: "linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 204, 0.3))",
                  padding: 4,
                  backdropFilter: "blur(10px)",
                  boxShadow: "inset 0px 0px 30px rgba(255, 255, 255, 0.2)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", textShadow: "0px 0px 15px rgba(255, 255, 255, 1)", color: "#fff" }}>
                  {solution.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#fff", fontSize: "1rem", mb: 1 }}>
                  {solution.problem}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#00ffcc" }}>
                  {solution.solution}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action (Button Now at Bottom with Padding) */}
      <Box sx={{ mt: 5, pb: 4 }}> {/* Ensure space and padding at the bottom */}
        <Button
          variant="contained"
          component={Link}
          to="/products"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "12px 32px",
            background: "linear-gradient(45deg, #ff00ff, #00ffff)",
            color: "#fff",
            borderRadius: "50px",
            boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
            transition: "0.3s",
            "&:hover": { background: "linear-gradient(45deg, #00ffff, #ff00ff)", transform: "scale(1.1)" },
          }}
        >
          Join the Future of Longevity 🚀
        </Button>
      </Box>
    </Box>
  );
}

export default Solutions;
