import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Home';

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
      <Home />
    </ThemeProvider>
  );
}

export default App;
