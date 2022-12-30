import React from 'react'
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <>
            <Typography mt={2} fontWeight={"bold"} variant={'h5'} fontFamily={"Helvetica Nue"} align="center">
                ¿Qué ofrecemos?
            </Typography>

            <Typography variant={'h6'} fontFamily={"Helvetica Nue"} align="center" sx={{m: 2}}>
                Somos una empresa que se dedica a asociar a personas interesadas en colaborar con entidades de diferentes tipos.
                <br/>
                Al abonar un monto mensual, podrás formar parte de nuestra comunidad de colaboradores y contribuir a proyectos que te interesen.
            </Typography>
        </>
    )
}

export default About
