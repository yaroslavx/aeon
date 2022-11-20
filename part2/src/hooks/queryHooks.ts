import axios from 'axios'
import { useQuery } from 'react-query'

type Chart = {
  id: number
  period_end: string
  period_start: string
  sub: ReadonlyArray<Chart>
  title: string
}

export type Calendar = {
  project: string
  period: string
  chart: Chart
}

const fetchCalendar = async (): Promise<Calendar> => {
  const response = await axios.get('http://82.202.204.94/tmp/test.php')
  return response.data
}

export const useRandomMansData = () => {
  return useQuery(['calendar'], fetchCalendar)
}
