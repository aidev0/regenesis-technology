import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0
import { Container, Typography, Box, Button, TextField, Paper } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { keyframes } from "@emotion/react";

// Load Stripe (Replace with your **Stripe Public Key**)
const stripePromise = loadStripe("your-stripe-public-key");

// **Pulsing Acid-Trip Background Animation**
const acidTripAnimation = keyframes`
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; filter: hue-rotate(120deg); }
  100% { background-position: 0% 50%; filter: hue-rotate(240deg); }
`;

// Function to Extract URL Parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function StripeCheckout({ amount, userEmail }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = async () => {
    setErrorMessage(""); // Clear previous errors

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not properly initialized. Please refresh the page.");
      return;
    }

    if (!userEmail) {
      setErrorMessage("Please enter a valid email before proceeding.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setErrorMessage("Card details are missing. Please enter your card information.");
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        "your-client-secret", // Replace with dynamically generated server-side secret
        {
          payment_method: {
            card: cardElement,
            billing_details: { email: userEmail },
          },
        }
      );

      if (error) {
        setErrorMessage(error.message || "Payment failed. Please try again.");
      } else {
        console.log("Payment successful", paymentIntent);
        alert(`Payment Successful! Receipt sent to ${userEmail}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Box sx={{ mt: 3, width: "100%" }}>
      <CardElement options={{ style: { base: { fontSize: "18px", color: "#fff" } } }} />
      
      {errorMessage && (
        <Typography sx={{ color: "red", mt: 2, fontSize: "1rem" }}>
          ⚠️ {errorMessage}
        </Typography>
      )}

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
  const { user, isAuthenticated } = useAuth0(); // Get user info from Auth0
  const query = useQuery();
  const plan = query.get("plan") || "Basic";
  const price = query.get("price") || "199"; // Default to Basic plan

  const [email, setEmail] = useState(isAuthenticated && user?.email ? user.email : ""); // Use Auth0 email if available

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
        animation: `${acidTripAnimation} 12s infinite alternate ease-in-out`,
        overflow: "hidden"
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: "bold",
          textShadow: "0px 0px 30px rgba(255, 255, 255, 0.9)",
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
          background: "rgba(0,0,0,0.8)",
          color: "#fff",
          textAlign: "center",
          backdropFilter: "blur(15px)",
          mt: 3,
          width: "90%",
          maxWidth: "500px",
          boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.3)"
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Plan: {plan}
        </Typography>
        <Typography variant="h5" sx={{ color: "#00ffff", mb: 3 }}>
          Price: ${price} / year
        </Typography>

        {/* Email Input – Now Styled Like Stripe's Card Input */}
        {!isAuthenticated || !user?.email ? (
          <Box
            sx={{
              mb: 3,
              width: "100%",
              background: "rgba(0,0,0,0.6)",
              borderRadius: "8px",
              padding: "12px",
              border: "2px solid #00ffff",
              transition: "0.3s",
              "&:hover": { borderColor: "#ff00ff" },
              "&:focus-within": {
                borderColor: "#ff00ff",
                boxShadow: "0px 0px 20px #ff00ff"
              }
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "18px",
                color: "#fff",
                background: "transparent",
                padding: "10px",
                fontFamily: "Orbitron, sans-serif"
              }}
            />
          </Box>
        ) : (
          <Typography variant="h6" sx={{ color: "#00ffff", mb: 2 }}>
            Email: {email}
          </Typography>
        )}

        {/* Stripe Payment */}
        <Elements stripe={stripePromise}>
          <StripeCheckout amount={parseFloat(price)} userEmail={email} />
        </Elements>
      </Paper>
    </Box>
  );
}

export default Payment;
