import { createSlice } from '@reduxjs/toolkit'

interface ReducerState
{
  nombre: string,
  direccion: string,
  telefono: string,
}

const initialState: ReducerState = {
  nombre: '',
  direccion: '',
  telefono: '',
}

const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    updatePersonalName(state, action)
    {
      state.nombre = action.payload
    },

    updatePersonalDireccion(state, action)
    {
      state.direccion = action.payload
    },

    updatePersonalTelefono(state, action)
    {
      state.telefono = action.payload
    },
  }
})

export const { updatePersonalName, updatePersonalDireccion, updatePersonalTelefono } = personalSlice.actions
export default personalSlice.reducer