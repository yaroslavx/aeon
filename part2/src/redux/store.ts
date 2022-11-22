import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import calendarReducer from './calendar/calendarSlice'
import chartBarReducer from './chart/chartBarSlice'

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    chartBar: chartBarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
