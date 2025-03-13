import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

// **Live Gradient Animation for Backgrounds**
const neonPulse = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const subscriptionTiers = [
    {
        title: "🧬 Aging Detection AI",
        price: "999",
        description: "AI-powered detection of aging-related diseases & annual DNA testing.",
        features: ["AI-Powered Aging & Disease Detection", "AI-Driven Healthspan & Longevity Insights", "Annual DNA Testing & Longevity Biomarkers"],
        gradient: "linear-gradient(135deg, #ff00ff, #ff6600, #00ffcc)"
    }
];

function Products() {
    return (
        <Container maxWidth="xl" sx={{ py: 7 }}>
            <Typography variant="h2" textAlign="center" gutterBottom sx={{
                fontFamily: "Orbitron, sans-serif",
                background: "linear-gradient(90deg, #ff00ff, #00ffff)",
                WebkitBackgroundClip: "text",
                color: "transparent"
            }}>
                Our Product 🧬
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {subscriptionTiers.map((tier, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ maxWidth: "350px", flexGrow: 1 }}>
                        <Card
                            elevation={10}
                            sx={{
                                borderRadius: 6,
                                background: tier.gradient,
                                color: "#fff",
                                padding: "1px",
                                animation: `${neonPulse} 5s infinite alternate`,
                                backgroundSize: "300% 300%",
                                boxShadow: "0px 0px 50px rgba(255, 0, 255, 0.7)"
                            }}
                        >
                            {/* ✨ FIXED HEIGHT + FLEXIBLE CONTENT ✨ */}
                            <CardContent
                                sx={{
                                    borderRadius: 5,
                                    background: "linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 204, 0.3))",
                                    padding: 3,
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "inset 0px 0px 30px rgba(255, 255, 255, 0.2)",
                                    minHeight: "400px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h4"
                                        gutterBottom
                                        sx={{ fontWeight: "bold", textShadow: "0px 0px 15px rgba(255, 255, 255, 1)", color: "#fff" }}
                                    >
                                        {tier.title}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}>
                                        ${tier.price} / year
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: "#fff" }}>
                                        {tier.description}
                                    </Typography>
                                    <ul>
                                        {tier.features.map((feature, i) => (
                                            <li key={i} style={{ marginBottom: "5px", fontSize: "1.1rem", fontWeight: "bold", color: "#fff" }}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>

                                <Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: "bold",
                                        width: "100%",
                                        fontSize: "1.3rem",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        background: "linear-gradient(45deg, #ff00ff, #ff6600)",
                                        color: "#fff",
                                        borderRadius: "50px",
                                        padding: "15px 20px",
                                        boxShadow: "0px 0px 25px rgba(255, 0, 255, 1)",
                                        transition: "all 0.3s ease-in-out",
                                        animation: "pulse 1.5s infinite alternate",
                                        "&:hover": {
                                            background: "linear-gradient(45deg, #ff6600, #ff00ff)",
                                            transform: "scale(1.08)",
                                            boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.9)"
                                        },
                                        "&:active": {
                                            transform: "scale(0.95)",
                                            filter: "brightness(1.2)"
                                        },
                                        "@keyframes pulse": {
                                            "0%": { boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.6)" },
                                            "100%": { boxShadow: "0px 0px 40px rgba(255, 0, 255, 1)" }
                                        }
                                    }}
                                    component={Link}
                                    to={`/payment?plan=${tier.title}&price=${tier.price}`}
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
