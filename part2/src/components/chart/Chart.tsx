import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { Chart } from '../../redux/calendar/calendarTypes'
import Task from '../task/Task'
import { BsTrash } from 'react-icons/bs'
import { useCalendarData } from '../../hooks/queryHooks'
import { CustomChart } from './Chart.styles'
import ChartTask from '../chartTask/ChartTask'
import { selectChartBar } from '../../redux/chart/chartBarSelector'
import { useAppDispatch } from '../../redux/store'
import { setOpened } from '../../redux/chart/chartBarSlice'
import { getFirstDate, parseDate } from '../../utils/dateUtils'

export type TaskType = {
    level: number
    chart: Chart
    opened?: number
}

const ChartComponent = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const { opened } = useSelector(selectChartBar)

    const dispatch = useAppDispatch()


    const [firstDate, setFirstDate] = useState<number>()
    const { period, chart } = useSelector(selectCalendar)

    useEffect(() => {
        if (period.split('-')[0]) {
            setFirstDate(getFirstDate(parseDate(period.split('-')[0]))?.getTime())
        }
    }, [period])

    const getNestedObject = (level: number, sub?: Chart[]) => {
        if (!sub) return
        for (let task of sub) {
            setTasks(tasks => [...tasks, { level, chart: task }])
            getNestedObject(level + 1, task.sub)
        }
    }

    useEffect(() => {
        setTasks([{ level: 0, chart }])
        getNestedObject(1, chart.sub)
    }, [chart])

    const openTask = (level: number) => {
        if (opened === level) {
            dispatch(setOpened({ opened: level + 1 }))
            return
        }
        dispatch(setOpened({ opened: level }))

    }

    return (
        <CustomChart>
            {tasks.length > 1 &&
                <>
                    <div>
                        {tasks.map(task => <div key={task.chart.id} onClick={() => openTask(task.level)}><ChartTask level={task.level} chart={task.chart} opened={opened} firstDate={firstDate} /></div>)}
                    </div>
                </>
            }
        </CustomChart>
    )
}

export default ChartComponent