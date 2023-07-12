'use client';
import { createTheme } from '@mui/material/styles';
export let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Estedad, Arial, sans-serif',
  },
});
export let lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'Estedad, Arial, sans-serif',
  },
});
