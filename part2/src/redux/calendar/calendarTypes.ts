import { DeepReadonly } from 'utility-types'

export type Chart = {
  id?: number
  period_end: string
  period_start: string
  sub?: Chart[]
  title: string
}

export type Calendar = {
  project: string
  period: string
  chart: Chart
}
