import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const JoinButton = () => {
    return (
        <Button
            variant="contained"
            size="large"
            component={Link}
            to="/products"
            sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "50px",
                boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.8)",
                transition: "0.3s",
                mt: 4, // Adds spacing above the button
                "&:hover": { background: "linear-gradient(45deg, #00ffff, #ff00ff)", transform: "scale(1.05)" }
            }}
        >
            🧬 I want to live forever, sign me up!
        </Button>
    );
};

export default JoinButton;
