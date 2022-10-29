import React from 'react'
import Typography from '@mui/material/Typography';
import { EntidadesData } from '../../../data/entidad';
import Entidad from './Entidad';
import { Divider, Grid } from '@mui/material';

const EntidadesHolder = () =>
{

  return (

    <div>

      <Typography fontFamily={"Helvetica Nue"} variant={"h5"} align="center" pb={2}>
        Actualmente trabajando con las siguientes entidades
      </Typography>

      {/* <Divider /> */}

      {EntidadesData.map(entidad => <Entidad key={entidad.id} props={entidad}>Entidad</Entidad>)}

    </div>
  )
}

export default EntidadesHolder