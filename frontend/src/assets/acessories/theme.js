// src/themes/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 palette: {
    primary: {
      main: "#2a9461",
    },
    secondary: {
      main: "#494c7d",
    },
    myAwesomeColor: {
      main: "#ff0000",
    },
    tertiary: {
      main: "#1a1a1a",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
 },
 typography: {
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
    fontFamily: 'Roboto, sans-serif',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
    },
 },
 components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Custom styles for all buttons
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'none',
          padding: '8px 16px',
          backgroundColor: '#98ABEE',
          borderRadius: '4px',
          color: '#F9E8C9', // Set the font color here
          '&:hover': {
            backgroundColor: '#201658', // Hover background color
          },
        },
      },
    },
 },
 spacing: 8,
});

export default theme;
