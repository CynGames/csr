import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import FridayBeach from './assets/fonts/FridayBeach.woff';
import Matthildur from './assets/fonts/Matthildur.woff';
import PachecoBoulevard from './assets/fonts/PachecoBoulevard.woff';

import './styles/App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import purple from '@mui/material/colors/purple';
import { CssBaseline } from '@mui/material';

let theme = createTheme({
  typography: {
    fontFamily: ["FridayBeach", "Matthildur", "PachecoBoulevard"].join(","),
  },

  palette: {
    primary: green,
    secondary: purple,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'FridayBeach';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('FridayBeach'), url(${FridayBeach}) format('woff');
        }

        @font-face {
          font-family: 'Matthildur';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Matthildur'), url(${Matthildur}) format('woff');
        }

        @font-face {
          font-family: 'PachecoBoulevard';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('PachecoBoulevard'), url(${PachecoBoulevard}) format('woff');
        }
      `,
    },
  },
});

function App()
{
  console.log("Page Refreshed");

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
