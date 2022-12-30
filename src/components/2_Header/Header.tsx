import React from 'react'
import {Box, Hidden} from '@mui/material'
import rafImage from '../../assets/raf-image.png'
import Typography from "@mui/material/Typography";

const Header = () => {
    return (
        <Box
            display={{xs: 'flex', md: 'flex'}}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            // sx={{width: "100%", height: "50vh", backgroundImage: 'linear-gradient(0deg, #026DF3 10%, #F3A9F4 100%)'}}
        >

            <Hidden mdDown>
                <img src={rafImage} alt="logo" style={{maxWidth: "100%", height: "auto"}}/>
            </Hidden>


            <Hidden mdUp>
                <Typography
                    variant="h3"
                    align="center"
                    fontFamily={"Aclonica"}
                    sx={{
                        marginTop: 5,
                        marginBottom: 1
                    }}>
                    Campaña de Socios Rafaela
                </Typography>
            </Hidden>
        </Box>
    )
}

export default Header
