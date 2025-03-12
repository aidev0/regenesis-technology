import React from "react";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// **Acid-trip background animation**
const acidBackground = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(120deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(240deg); }
`;

// **Neon glow effect**
const neonGlow = keyframes`
  0% { box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.6); }
  50% { box-shadow: 0px 0px 30px rgba(0, 255, 255, 1); }
  100% { box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.6); }
`;

const steps = [
  { title: "🧬 Phase 1: AI for Aging Detection", description: "Develop AI models that detect and predict aging markers at a cellular level.", color: "#ff00ff" },
  { title: "🔬 Phase 2: Genetic Reprogramming", description: "Start reversing aging through AI-powered genetic interventions.", color: "#00ffcc" },
  { title: "🚀 Phase 3: Clinical Trials", description: "Human trials to validate biological rejuvenation and longevity therapies.", color: "#ff6600" },
  { title: "🌍 Phase 4: Global Rollout", description: "Deploy Regenesis AI longevity treatments worldwide.", color: "#00ff66" },
];

const Plan = () => (
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
        background: "linear-gradient(90deg, #ff00ff, #00ffff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)",
      }}
    >
      The Master Plan 🧬🚀
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {steps.map((step, index) => (
        <Grid item xs={12} sm={6} key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            elevation={10}
            sx={{
              borderRadius: 6,
              background: `linear-gradient(135deg, ${step.color}, #000)`,
              color: "#fff",
              padding: "1px",
              animation: `${neonGlow} 5s infinite alternate`,
              width: "90%",
              height: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                borderRadius: 5,
                background: "rgba(255, 255, 255, 0.1)",
                padding: 3,
                backdropFilter: "blur(10px)",
                boxShadow: "inset 0px 0px 30px rgba(255, 255, 255, 0.2)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {step.title}
              </Typography>
              <Typography variant="h6">{step.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Plan;
