import { createSlice } from '@reduxjs/toolkit'

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    isCreditLimitSet: false,
    creditAmount: '',
  },
  reducers: {
    setCreditLimit: (state, action) => {
      state.isCreditLimitSet = action.payload.isCreditLimitSet
      state.creditAmount = action.payload.creditAmount
    },
  },
})

export const { setCreditLimit } = paymentSlice.actions

export default paymentSlice.reducer
