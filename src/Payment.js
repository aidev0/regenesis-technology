import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { keyframes } from "@emotion/react";

// Load Stripe (Replace with your **Stripe Public Key**)
const stripePromise = loadStripe("your-stripe-public-key");

// **Pulsing Acid-Trip Background**
const acidTripAnimation = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(90deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(180deg); }
`;

// Function to Extract URL Parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Stripe Checkout Component
function StripeCheckout({ amount }) {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      "your-client-secret", // Replace with dynamically generated server-side secret
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      console.error(error);
      alert("Payment Failed. Please try again.");
    } else {
      console.log("Payment successful", paymentIntent);
      alert("Payment Successful! Thank you for subscribing.");
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <CardElement 
        options={{ style: { base: { fontSize: "18px", color: "#fff" } } }} 
      />
      <Button
        variant="contained"
        sx={{
          mt: 3,
          fontSize: "1.2rem",
          fontWeight: "bold",
          background: "linear-gradient(45deg, #ff00ff, #00ffff)",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "50px",
          boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
          transition: "0.3s",
          "&:hover": { background: "linear-gradient(45deg, #00ffff, #ff00ff)", transform: "scale(1.08)" }
        }}
        onClick={handlePayment}
      >
        💳 Pay with Credit Card
      </Button>
    </Box>
  );
}

// Main Payment Component
function Payment() {
  const query = useQuery();
  const plan = query.get("plan") || "Basic";
  const price = query.get("price") || "199"; // Default to Basic plan

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(270deg, #ff00ff, #00ffff, #ff6600, #00ff66)",
        backgroundSize: "400% 400%",
        animation: `${acidTripAnimation} 10s infinite alternate ease-in-out`
      }}
    >
      <Typography 
        variant="h2" 
        gutterBottom 
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: "bold",
          textShadow: "0px 0px 20px rgba(255, 255, 255, 0.9)",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        Complete Your Subscription 🧬
      </Typography>

      <Paper 
        elevation={10} 
        sx={{
          p: 4,
          borderRadius: 5,
          background: "rgba(0,0,0,0.7)",
          color: "#fff",
          textAlign: "center",
          backdropFilter: "blur(15px)",
          mt: 3,
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.2)"
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Plan: {plan}
        </Typography>
        <Typography variant="h5" sx={{ color: "#00ffff", mb: 3 }}>
          Price: ${price} / year
        </Typography>

        {/* Stripe Payment */}
        <Elements stripe={stripePromise}>
          <StripeCheckout amount={parseFloat(price)} />
        </Elements>
      </Paper>
    </Container>
  );
}

export default Payment;
