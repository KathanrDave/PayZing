// src/themes/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 palette: {
    primary: {
      main: "#fef3c7",
    },
    background: {
        default: `linear-gradient(to right, #0f0c29, #302b63, #24243e)`,
        paper: `linear-gradient(to right, #0f0c29, #302b63, #24243e)`,
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
    body1: {
      fontSize: '1rem',
      fontWeight: 600,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1.43,
    },
 },
 components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'none',
          padding: '8px 16px',
          backgroundColor: '#5b21b6',
          borderRadius: '4px',
          color: '#fef3c7',
          '&:hover': {
            backgroundColor: '#201658',
          },
        },
      },
    },
    MuiTableContainer: {
        styleOverrides: {
          root: {
            fontSize: '0.9rem',
            fontWeight: 500,
            textTransform: 'none',
            padding: '8px 16px',
            backgroundColor: '#818cf8',
            borderRadius: '4px',
            color: '#fef3c7',
            '&:hover': {
              backgroundColor: '#201658',
            },
          },
        },
      },
 },
 spacing: 8,
});

export default theme;
