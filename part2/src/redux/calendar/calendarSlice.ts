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
    setProject: (state, action: PayloadAction<{ project: string }>) => {
      state.project = action.payload.project
    },
    setPeriod: (state, action: PayloadAction<{ period: string }>) => {
      state.period = action.payload.period
    },
    setChart: (state, action: PayloadAction<{ chart: Chart }>) => {
      state.chart = action.payload.chart
    },
  },
})

export const { setProject, setPeriod, setChart } = calendarSlice.actions

export default calendarSlice.reducer
