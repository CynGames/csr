import React from 'react';
import './styles/App.css';

import Navbar from './components/1_Navbar/Navbar';
import Header from './components/2_Header/Header';
import Body from './components/3_Body/Body';
import Footer from './components/4_Footer/Footer';

import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {customTheme} from "./utils/mui_theme";
import 'typeface-aclonica';

const App = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <Navbar/>
            <Header/>
            <Body/>
            <Footer/>
        </ThemeProvider>
    );
};

export default App;
