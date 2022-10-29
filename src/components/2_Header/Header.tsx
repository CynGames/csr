import React from 'react'
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material'

const Header = () => {
    return (
        <Box
            display={{xs: 'flex', md: 'flex'}}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{width: "100%", height: "50vh", backgroundImage: 'linear-gradient(0deg, #026DF3 10%, #F3A9F4 100%)'}}>
            <Typography
                sx={{
                    fontWeight: 300,
                    fontSize: 33,
                    letterSpacing: '.1rem',
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: "center"
                }}
            >
                Campaña de Socios Rafaela
            </Typography>
        </Box>
    )
}

export default Header