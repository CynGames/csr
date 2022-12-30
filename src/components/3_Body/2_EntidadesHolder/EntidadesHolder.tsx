import React from 'react'
import Typography from '@mui/material/Typography';
import {EntidadesData} from '../../../data/entidad';
import Entidad from './Entidad';
import {Box} from '@mui/material';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EntidadesHolder = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <Box id={'entidad'}>
            <Typography
                id='about'
                align='center'
                variant='h4'
                m={2}
                fontFamily="Helvetica Nue"
                fontWeight={"bold"}
            >
                Actualmente trabajando con las siguientes entidades
            </Typography>

            <Carousel responsive={responsive} infinite={true}>
                {EntidadesData.map(entidad => <Entidad key={entidad.id} props={entidad}></Entidad>)}
            </Carousel>;
        </Box>
    )
}

export default EntidadesHolder

