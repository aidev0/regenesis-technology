import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const subscriptionTiers = [
  {
    title: "🧬 Aging Detection AI",
    price: "999",
    description: "AI-powered detection of aging-related diseases & annual DNA testing.",
    features: [
      "AI-Powered Aging & Disease Detection",
      "AI-Driven Healthspan & Longevity Insights",
      "Annual DNA Testing & Longevity Biomarkers"
    ],
    gradient: "linear-gradient(135deg, #e0eafc, #cfdef3)" // soft blue gradient
  }
];

function Products() {
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          background: "linear-gradient(90deg, #0077ff, #00e6e6)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 4,
        }}
      >
        Our Product
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {subscriptionTiers.map((tier, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ maxWidth: "360px", flexGrow: 1 }}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 6,
                background: tier.gradient,
                color: "#000",
                padding: "1px",
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent
                sx={{
                  borderRadius: 5,
                  background: "#ffffff",
                  padding: 4,
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                    {tier.title}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0077ff", mb: 2 }}>
                    ${tier.price} / year
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
                    {tier.description}
                  </Typography>
                  <ul>
                    {tier.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: "6px", fontSize: "1rem", color: "#444" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Box>

                <Button
                  variant="contained"
                  component={Link}
                  to={`/payment?plan=${tier.title}&price=${tier.price}`}
                  sx={{
                    fontWeight: "bold",
                    width: "100%",
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    background: "linear-gradient(90deg, #00bcd4, #0077ff)",
                    color: "#fff",
                    borderRadius: "30px",
                    padding: "14px 20px",
                    boxShadow: "0px 4px 20px rgba(0, 123, 255, 0.3)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      background: "linear-gradient(90deg, #0077ff, #00bcd4)",
                    },
                  }}
                >
                  🚀 Join Now 🧬
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
