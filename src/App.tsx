import React from 'react';


import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './styles/App.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DA4432'
    },
    secondary: {
      main: '#469BD8'
    }
  }
})

function App()
{
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
