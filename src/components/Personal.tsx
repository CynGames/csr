import React from 'react'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { updatePersonalDireccion, updatePersonalName, updatePersonalTelefono } from '../reducers/personalDataReducer';

const Personal = () =>
{
  const dispatch = useDispatch()
  const personal = useSelector((state: any) => state.personalData)

  const handleName = (event: React.ChangeEvent<any>) =>
    dispatch(updatePersonalName(event.target.value))

  const handleDireccion = (event: React.ChangeEvent<any>) =>
    dispatch(updatePersonalDireccion(event.target.value))

  const handleTelefono = (event: React.ChangeEvent<any>) =>
    dispatch(updatePersonalTelefono(event.target.value))

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>

      <TextField
        required
        id="outlined-basic"
        name='name'
        label="Nombre"
        variant="outlined"
        value={personal.nombre}
        onChange={handleName}
        sx={{ mb: 1.5 }}
      />
      <TextField
        required
        id="outlined-basic"
        name='name'
        label="Dirección"
        variant="outlined"
        value={personal.direccion}
        onChange={handleDireccion}
        sx={{ mb: 1.5 }}
      />

      <TextField
        required
        id="outlined-basic"
        name='name'
        label="Teléfono"
        variant="outlined"
        value={personal.telefono}
        onChange={handleTelefono}
        sx={{ mb: 1.5 }}
      />
    </Box >
  )
}

export default Personal