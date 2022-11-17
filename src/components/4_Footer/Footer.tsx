import React from 'react'
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box
                bgcolor={"#333"}
                padding={"1rem 0"}
            >
                <Typography
                    color={"gray"}
                    fontSize={"0.9rem"}
                    fontFamily={"Montserrat"}
                    textAlign={"center"}
                >
                    Copyright © by Tomás Martín Leguizamón
                </Typography>
            </Box>
        </>
    )
}

export default Footer