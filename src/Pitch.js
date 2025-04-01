import React from "react";
import { Typography, Box } from "@mui/material";
import JoinButton from "./JoinButton"; // Import the button component

const Pitch = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                py: 6,
                px: 2,
                backgroundColor: "#ffffff",
            }}
        >
            <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    fontFamily: "'Roboto', sans-serif",
                    color: "#222",
                    mb: 2,
                }}
            >
                Detect and Prevent Aging Diseases.
            </Typography>

            <Typography
                variant="h6"
                component="p"
                sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    mb: 4,
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    color: "#555",
                    lineHeight: 1.7,
                }}
            >
                Regenesis Technology is an AI BioTech startup in San Francisco. Our mission is to decode aging at the genetic level
                — identifying its root causes and developing interventions to prevent aging-related diseases.
            </Typography>

            <JoinButton />
        </Box>
    );
};

export default Pitch;
