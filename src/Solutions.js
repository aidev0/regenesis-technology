import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
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

const solutions = [
    {
      title: "🦠 AI Aging Detection – Stop Cellular Damage Early",
      problem: "Aging is an accumulation of DNA damage, but no one is tracking it.",
      solution: "Our AI detects early aging markers, allowing for precision interventions before damage escalates.",
      gradient: "linear-gradient(135deg, #ff00ff, #ff6600, #00ffcc)",
    },
    {
      title: "🔬 Longevity AI – Predict & Extend Your Healthspan",
      problem: "Traditional health tests miss longevity biomarkers, leading to late-stage interventions.",
      solution: "We track DNA mutations, cellular resilience & metabolic shifts to predict your biological future.",
      gradient: "linear-gradient(135deg, #00ffcc, #ff00ff, #ff6600)",
    },
    {
      title: "🧬 Gene Editing & Optimization – Rewriting Your Longevity Blueprint",
      problem: "Your genetic code dictates how fast you age, but no one is enhancing it.",
      solution: "Our AI identifies key longevity genes and provides genetic reprogramming for extended healthspan & maximum lifespan.",
      gradient: "linear-gradient(135deg, #ff6600, #00ffcc, #ff00ff)",
    },
    {
      title: "🏝️ 2-Week Longevity Reset – Island of Regenesis",
      problem: "Longevity is a lifestyle, not a detox.",
      solution: "Ours longevity retreats are embodiment of health, connections, lifestyle & in-person AI-powered genetics treatments at a beautiful resort in a tropical island.",
      gradient: "linear-gradient(135deg, #00ff99, #ff00ff, #00ffff)",
    },
    {
      title: "💊 Personalized AI-Guided Longevity Therapies",
      problem: "One-size-fits-all anti-aging treatments fail to consider genetic diversity.",
      solution: "Our AI customizes anti-aging supplements & interventions based on your DNA & metabolic profile.",
      gradient: "linear-gradient(135deg, #ff9900, #00ffff, #ff00ff)",
    },
    {
      title: "🧪 Continuous DNA Tracking – Adaptive Aging Defense",
      problem: "DNA tests today are static snapshots, offering no long-term insight.",
      solution: "We provide AI-driven annual longevity assessments that evolve with your biology.",
      gradient: "linear-gradient(135deg, #0000ff, #ff00ff, #00ffcc)",
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
        py: 6,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)",
        }}
      >
        The Problems We Are Solving 🧬
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ maxWidth: "400px", maxHeight:"600px",flexGrow: 1 }}>
            <Card
              elevation={10}
              sx={{
                borderRadius: 6,
                background: solution.gradient,
                color: "#fff",
                padding: "1px",
                animation: `${neonGlow} 5s infinite alternate`,
                backgroundSize: "300% 300%",
                boxShadow: "0px 0px 50px rgba(255, 0, 255, 0.7)",
              }}
            >
              <CardContent
                sx={{
                minHeight: "450px",
                  borderRadius: 5,
                  background: "linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 204, 0.3))",
                  padding: 3,
                  backdropFilter: "blur(10px)",
                  boxShadow: "inset 0px 0px 30px rgba(255, 255, 255, 0.2)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold", textShadow: "0px 0px 15px rgba(255, 255, 255, 1)", color: "#fff" }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}>
                    {solution.problem}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#00ffcc", mb: 3 }}>
                    {solution.solution}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 6 }}>
        <Button
          variant="contained"
          component={Link}
          to="/subscription"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "12px 30px",
            background: "linear-gradient(45deg, #ff00ff, #00ffff)",
            color: "#fff",
            borderRadius: "50px",
            boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
            transition: "0.3s",
            "&:hover": { background: "linear-gradient(45deg, #00ffff, #ff00ff)", transform: "scale(1.1)" },
          }}
        >
          🔥 Take Control of Your Longevity 🔥
        </Button>
      </Box>
    </Box>
  );
}

export default Solutions;
