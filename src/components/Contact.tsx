import { Box, Button, FormControl, Input, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () =>
{
  const submitForm = () => { };

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      m: 2
    }}>
      <Typography fontWeight={"bold"} variant={'h5'} fontFamily={"Helvetica Nue"}>
        ¿Quieres contactarnos?
      </Typography>
      <hr />

      <Typography variant={'h6'} fontFamily={"Helvetica Nue"} align="center">
        Escribe tu mensaje debajo y te responderemos en la brevedad.
      </Typography>
      <hr />

      <Box sx={{ display: "flex" }}>
        <FormControl onSubmit={submitForm}>
          <TextField required id="outlined-basic" label="Nombre" variant="outlined" sx={{ minWidth: "60vw" }} />
          <TextField required id="outlined-basic" label="Dirección E-Mail" variant="outlined" sx={{ minWidth: "60vw" }} />
          <hr />
          <TextField
            required
            id="outlined-multiline-static"
            label="Mensaje"
            multiline
            rows={4}
          />
          <hr />
          <Button variant="contained" sx={{ fontFamily: "Helvetica Nue", color: "white" }}>Enviar</Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Contact