import axios from 'axios'
import { useQuery } from 'react-query'
import { Calendar } from '../redux/calendar/calendarTypes'

const fetchCalendar = async (): Promise<Calendar> => {
  const response = await axios.get('http://82.202.204.94/tmp/test.php')
  return response.data
}

export const useRandomMansData = () => {
  return useQuery(['calendar'], fetchCalendar)
}
