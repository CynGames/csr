import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './styles/App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// const theme = createTheme{
//   palette: {
//     primary: {
//       main: '#009900aa'
//     }
//   }
// })

let theme = createTheme({
  palette: {
    primary: {
      main: '#2FFB93',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App()
{
  console.log("Page Refreshed");

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
