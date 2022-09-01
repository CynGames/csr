
import { Box, Chip } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';

const Header = () =>
{
  return (
    <Box sx={{ width: "100%", height: "50vh", backgroundImage: 'linear-gradient(0deg, #026DF3 10%, #F3A9F4 100%)' }}>
      <Typography
        align="center"
        component="a"
        href=""
        pt={"35%"}
        sx={{
          display: { xs: 'flex', md: 'none' },
          fontFamily: 'Helvetica Nue',
          fontWeight: 300,
          fontSize: 33,
          letterSpacing: '.1rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Campaña de Socios Rafaela
      </Typography>
    </Box>
  )
}

export default Header