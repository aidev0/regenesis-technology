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

const solutions = [
  {
    title: "🦠 AI-driven Aging Detection",
    problem: "Aging is an accumulation of DNA damage, but no one is tracking it.",
    solution: "Our AI detects early aging markers, allowing for precision interventions before damage escalates.",
    gradient: "linear-gradient(135deg, #ff00ff, #ff6600, #00ffcc)",
  },
  {
    title: "🧬 AI-Powered Gene Optimization",
    problem: "Your genetic code dictates how fast you age, but no one is enhancing it.",
    solution: "Our AI identifies key longevity genes and provides genetic reprogramming for extended healthspan & maximum lifespan.",
    gradient: "linear-gradient(135deg, #ff6600, #00ffcc, #ff00ff)",
  },
  {
    title: "🧪 Personalized Immortality Treatments",
    problem: "One-size-fits-all anti-aging treatments fail to consider genetic diversity.",
    solution: "We design perosnalized anti-aging gene treatments based on your DNA & metabolic profile.",
    gradient: "linear-gradient(135deg, #ff9900, #00ffff, #ff00ff)",
  },
  {
    title: "🏝️ 2-Week Exclusive Immortality Retreat",
    problem: "Immortality is a lifestyle, not just a detox.",
    solution: "Embodiment of health, connections, longevity & AI-powered genetics treatments. Join us in our beautiful resort in Island of Regenesis.",
    gradient: "linear-gradient(135deg, #00ff99, #ff00ff, #00ffff)",
  },
];

function Solutions() {
  return (
    <Box
      sx={{
        height: "100vh", // Fullscreen
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "500% 500%",
        animation: `${acidBackground} 10s infinite alternate ease-in-out`,
        py: 4,
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
        Immortality Solutions 🧬
      </Typography>

      <Grid
        container
        spacing={4} // Spacing between cards
        justifyContent="center"
        sx={{
          width: "90vw",
          height: "80vh", // Fit cards in viewport
          display: "flex",
          alignItems: "center",
        }}
      >
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ display: "flex", justifyContent: "center" }}>
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
                maxWidth: "500px",
                height: "280px", // Fixed height
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
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "1.8rem", textShadow: "0px 0px 15px rgba(255, 255, 255, 1)", color: "#fff" }}
                >
                  {solution.title}
                </Typography>
                <Typography variant="h6" sx={{ color: "#fff", fontSize: "1.2rem", mb: 1 }}>
                  {solution.problem}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.2rem", color: "#00ffcc" }}>
                  {solution.solution}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          component={Link}
          to="/products"
          sx={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            padding: "14px 40px",
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
