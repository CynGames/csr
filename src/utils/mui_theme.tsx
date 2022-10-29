import {createTheme} from "@mui/material/styles";
import lightBlue from "@mui/material/colors/lightBlue";
import FridayBeach from "../assets/fonts/FridayBeach.woff";
import Matthildur from "../assets/fonts/FridayBeach.woff";

export const customTheme = createTheme({
    typography: {
        fontFamily: ["Helvetica Nue","FridayBeach", "Matthildur"].join(","),

        allVariants: {
            fontFamily: "Helvetica Nue"
        },
    },

    palette: {
        primary: lightBlue,
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
        }`,
        },
    },
});