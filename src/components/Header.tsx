
import { Box, Chip } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';

const Header = () =>
{
  return (
    // <Box sx={{
    //   width: "100%",
    //   height: "300px",
    //   backgroundColor: 'secondary.main',
    //   '&:hover': {
    //     backgroundColor: 'secondary.dark',
    //     opacity: [0.9, 0.8, 0.7],
    //   },
    // }}>    box</Box>

    // <Chip style={{ width: "100%", background: 'linear-gradient(to right bottom, #430089, #82ffa1' }}>
    //   </Chip>

    <Box sx={{ width: "100%", height: "300px", backgroundImage: 'linear-gradient(0deg, #026DF3 10%, #03A9F4 100%)' }}>
      <Typography
        align="center"
        component="a"
        href=""
        py={"26%"}
        sx={{
          display: { xs: 'flex', md: 'none' },
          fontFamily: 'Helvetica Nue',
          fontWeight: 300,
          fontSize: 33,
          letterSpacing: '.1rem',
          color: 'white',
          textDecoration: 'none',
          justifyContent: 'center',
        }}
      >
        Campaña de Socios en Rafaela
      </Typography>
    </Box>
  )
}

export default Header