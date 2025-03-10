import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load Stripe (Replace with your **Stripe Public Key**)
const stripePromise = loadStripe("your-stripe-public-key");

// PayPal Client ID (Replace with your **PayPal Client ID**)
const PAYPAL_CLIENT_ID = "your-paypal-client-id";

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
    const { paymentIntent, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log("Payment successful", paymentIntent);
      alert("Payment Successful! Thank you for subscribing.");
    }
  };

  return (
    <Box>
      <CardElement />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePayment}
        sx={{ mt: 2 }}
      >
        Pay with Credit Card
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
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
        Complete Your Subscription
      </Typography>

      <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
        Plan: <strong>{plan}</strong>
      </Typography>

      <Typography variant="h5" textAlign="center" color="primary">
        Price: <strong>${price} / year</strong>
      </Typography>

      {/* PayPal Payment */}
      <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: price } }], // Dynamic price
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Payment Successful! Thank you, ${details.payer.name.given_name}.`);
            });
          }}
        />
      </PayPalScriptProvider>

      <Box sx={{ textAlign: "center", my: 3 }}>
        <Typography variant="h6">OR</Typography>
      </Box>

      {/* Stripe Payment */}
      <Elements stripe={stripePromise}>
        <StripeCheckout amount={parseFloat(price)} />
      </Elements>
    </Container>
  );
}

export default Payment;
