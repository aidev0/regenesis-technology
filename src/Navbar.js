import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; // ✅ Auth0 Login/Logout
import Logo from "./Logo"; // ✅ DNA Infinity Logo

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // Detects page changes

  // **Auto-hide Navbar when navigating to a new page**
  useEffect(() => {
    setHovered(false); // ✅ Navbar disappears when a new page loads
    setMobileOpen(false); // ✅ Close mobile menu on page change
  }, [location]);

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "opacity 0.5s ease-in-out",
        opacity: hovered ? 1 : 0, // ✅ Navbar is hidden by default & auto-hides on page change
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AppBar
        position="static"
        sx={{
          background: "rgba(0, 0, 0, 0.9)", // ✅ Dark transparent background
          paddingY: 1.5,
          boxShadow: hovered ? "0px 0px 25px rgba(0, 255, 255, 0.8)" : "none",
          transition: "box-shadow 0.5s ease-in-out",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", paddingX: 3 }}>
          {/* LOGO + BRAND NAME */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo /> {/* ✅ DNA Infinity Logo */}
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: "bold",
                color: "#00ffff",
                textShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
                ml: 2, // Space between logo and text
                display: { xs: "none", md: "block" }, // Hide text on small screens
              }}
            >
              Regenesis Technology
            </Typography>
          </Box>

          {/* NAVIGATION MENU - Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            <Button component={Link} to="/" sx={navButtonStyles}>Home</Button>
            <Button component={Link} to="/subscription" sx={navButtonStyles}>Products</Button>
            <Button component={Link} to="/team" sx={navButtonStyles}>Team</Button>

            {/* LOGIN / LOGOUT BUTTON */}
            {isAuthenticated ? (
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}
                sx={{ ...navButtonStyles, background: "linear-gradient(45deg, #ff0000, #ff6600)" }}
              >
                Logout ({user?.name || "User"})
              </Button>
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                sx={{ ...navButtonStyles, background: "linear-gradient(45deg, #00ff99, #00ffff)" }}
              >
                Login
              </Button>
            )}
          </Box>

          {/* MOBILE MENU ICON - Only visible on small screens */}
          <IconButton
            onClick={handleMobileToggle}
            sx={{ color: "#00ffff", display: { xs: "block", md: "none" } }}
          >
            <MenuIcon sx={{ fontSize: 35 }} />
          </IconButton>

          {/* MOBILE DRAWER MENU */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleMobileToggle}
            sx={{
              "& .MuiDrawer-paper": {
                background: "rgba(0, 0, 0, 0.95)",
                color: "#fff",
                width: "250px",
                textAlign: "center",
                paddingTop: "20px",
              },
            }}
          >
            <IconButton
              onClick={handleMobileToggle}
              sx={{ color: "#00ffff", position: "absolute", top: 10, right: 10 }}
            >
              <CloseIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <List>
              <ListItem button component={Link} to="/" onClick={handleMobileToggle}>
                <ListItemText primary="Home" sx={mobileNavText} />
              </ListItem>
              <ListItem button component={Link} to="/subscription" onClick={handleMobileToggle}>
                <ListItemText primary="Products" sx={mobileNavText} />
              </ListItem>
              <ListItem button component={Link} to="/team" onClick={handleMobileToggle}>
                <ListItemText primary="Team" sx={mobileNavText} />
              </ListItem>

              {/* LOGIN / LOGOUT BUTTON */}
              <ListItem button onClick={isAuthenticated ? () => logout({ returnTo: window.location.origin }) : loginWithRedirect}>
                <ListItemText
                  primary={isAuthenticated ? `Logout (${user?.name || "User"})` : "Login"}
                  sx={mobileNavText}
                />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// **Stylish Navigation Button Styles**
const navButtonStyles = {
  fontWeight: "bold",
  fontSize: "1rem",
  color: "#fff",
  background: "linear-gradient(45deg, #ff00ff, #00ffff)",
  padding: "8px 20px",
  borderRadius: "30px",
  boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(45deg, #00ffff, #ff00ff)",
    transform: "scale(1.05)",
  },
};

// **Mobile Navigation Text Styles**
const mobileNavText = {
  textAlign: "center",
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "#00ffff",
  textTransform: "uppercase",
  "&:hover": {
    color: "#ff00ff",
  },
};

export default Navbar;
