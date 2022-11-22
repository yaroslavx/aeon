import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Calendar, Chart } from './calendarTypes'

const initialState: Calendar = {
  project: '',
  period: '',
  chart: {
    id: undefined,
    period_end: '',
    period_start: '',
    sub: undefined,
    title: '',
  },
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendar: (
      state,
      action: PayloadAction<{ project: string; period: string; chart: Chart }>
    ) => {
      state.project = action.payload.project
      state.period = action.payload.period
      state.chart = action.payload.chart
    },
  },
})

export const { setCalendar } = calendarSlice.actions

export default calendarSlice.reducer
