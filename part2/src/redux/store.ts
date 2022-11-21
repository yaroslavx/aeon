import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import calendarReducer from './calendar/calendarSlice'

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
