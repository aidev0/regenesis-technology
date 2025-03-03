import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
  ThemeProvider,
  createTheme
} from '@mui/material';

// 1) Create a custom MUI theme to use your Google Font and brand colors
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif'  // matches the <link> in index.html
  },
  palette: {
    primary: {
      main: '#673ab7' // Deep Purple (you can change to any color)
    },
    secondary: {
      main: '#f50057' // Pink (example secondary)
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*
        HEADER / NAV BAR
      */}
      <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
          {/* Logo Image */}
          <Box
            component="img"
            src="/logo.png"  // Path from public/
            alt="Regenesis Technology Logo"
            sx={{
              height: 40,  // Adjust size as needed
              marginRight: 2
            }}
          />
          {/* Company Name */}
          <Typography variant="h6">
            Regenesis Technology
          </Typography>
        </Toolbar>
      </AppBar>

      {/*
        HERO SECTION
      */}
      <Box
        sx={{
          minHeight: '40vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          bgcolor: '#ede7f6', // Light background, you can adjust
          py: 6
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Live Forever.
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 700, mx: 'auto' }}>
          At Regenesis Technology, our mission is to uncover the fundamental causes of aging
          and age-related diseases. By combining breakthroughs in genetics, regenerative
          medicine, artificial intelligence and cutting-edge biotechnology, we are not just extending life—we are
          eliminating aging itself. Our goal is nothing less than true biological immortality,
          ensuring that humanity can live forever, free from the constraints of time and the
          inevitability of death.
        </Typography>

      </Box>

      {/*
        MAIN CONTENT
      */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/*
          QUOTE SECTION
        */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="body1" fontStyle="italic" mb={2}>
            "The cause of aging is actually your own genes, and it's not because the genes are defective,
            it's not because of the failure of gene function or mutations of normal genes. It's actually the
            good genes, the wild-type genes which are actually generating late-life pathologies through their
            continued action in later life."
          </Typography>
          <Typography variant="body2" align="right">
            — David Gems
          </Typography>
        </Paper>

        {/*
          VIDEO SECTION
        */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            pb: '56.25%' // 16:9 aspect ratio
          }}
        >
          <Box
            component="iframe"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            src="https://www.youtube.com/embed/6m0geT3V4yE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Container>

      {/*
        FOOTER (Optional)
      */}
      <Box sx={{ bgcolor: '#ede7f6', py: 3, textAlign: 'center' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Regenesis Technology</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
