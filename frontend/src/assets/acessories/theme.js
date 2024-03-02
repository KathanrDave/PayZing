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
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
 },
 spacing: 8,
});

export default theme;
