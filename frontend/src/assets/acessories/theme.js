// src/themes/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 palette: {
    primary: {
      main: "#FFFDFA",
    },
    background: {
      default: "#030637",
      paper: "#030637",
    },
    color: {
      default: "#910A67",
    }
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
          backgroundColor: '#910A67',
          borderRadius: '4px',
          color: '#FFFDFA', // Set the font color here
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
