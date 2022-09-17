import { createSlice } from '@reduxjs/toolkit'

interface ReducerState
{
  metodo: string
}

const initialState: ReducerState = {
  metodo: "efectivo"
}

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updatePaymentMethod(state, action)
    {
      state.metodo = action.payload
    }
  }
})

export const { updatePaymentMethod } = paymentSlice.actions
export default paymentSlice.reducer