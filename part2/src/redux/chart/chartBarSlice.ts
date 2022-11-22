import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Bar } from './chartBarTypes'

const initialState: Bar = {
  opened: 0,
}

const chartBarSlice = createSlice({
  name: 'chartBar',
  initialState,
  reducers: {
    setOpened: (state, action: PayloadAction<{ opened: number }>) => {
      state.opened = action.payload.opened
    },
  },
})

export const { setOpened } = chartBarSlice.actions

export default chartBarSlice.reducer
