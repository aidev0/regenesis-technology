import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography, Box, Button, Paper } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load Stripe (Replace with your actual Stripe Public Key)
const stripePromise = loadStripe("your-stripe-public-key");

// Function to Extract URL Parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function StripeCheckout({ amount, userEmail }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = async () => {
    setErrorMessage("");

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
        "your-client-secret", // Replace this with your server-generated secret
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
      <CardElement options={{ style: { base: { fontSize: "18px", color: "#000" } } }} />

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
          background: "linear-gradient(90deg, #0077ff, #00e6e6)",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "50px",
          boxShadow: "0px 6px 16px rgba(0, 123, 255, 0.3)",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            background: "linear-gradient(90deg, #00e6e6, #0077ff)",
            transform: "scale(1.05)",
          },
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
  const { user, isAuthenticated } = useAuth0();
  const query = useQuery();
  const plan = query.get("plan") || "Basic";
  const price = query.get("price") || "199";

  const [email, setEmail] = useState(isAuthenticated && user?.email ? user.email : "");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        py: 6,
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
          Plan: {plan}
        </Typography>
        <Typography variant="h5" sx={{ color: "#0077ff", mb: 3 }}>
          Price: ${price} / year
        </Typography>

        {!isAuthenticated || !user?.email ? (
          <Box
            sx={{
              mb: 3,
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "6px",
              px: 2,
              py: 1,
              background: "#f5f5f5",
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
                fontSize: "16px",
                color: "#333",
                background: "transparent",
                padding: "10px 0",
              }}
            />
          </Box>
        ) : (
          <Typography variant="h6" sx={{ color: "#333", mb: 2 }}>
            Email: {email}
          </Typography>
        )}

        <Elements stripe={stripePromise}>
          <StripeCheckout amount={parseFloat(price)} userEmail={email} />
        </Elements>
      </Paper>
    </Box>
  );
}

export default Payment;
