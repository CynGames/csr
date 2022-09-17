import { createSlice } from '@reduxjs/toolkit'

interface ReducerState {
  entidad: string,
  monto: string | number,
  meses: string | number,
}

const initialState: ReducerState = {
  entidad: "",
  monto: "",
  meses: "",
}

const contributionSlice = createSlice({
  name: "contribution",
  initialState,
  reducers: {
    updateContributionEntidad(state, action)
    {
      state.entidad = action.payload
    },

    updateContributionMonto(state, action)
    {
      state.monto = action.payload
    },

    updateContributionMeses(state, action)
    {
      state.meses = action.payload
    },
  }
})

export const { updateContributionEntidad, updateContributionMonto, updateContributionMeses } = contributionSlice.actions
export default contributionSlice.reducer