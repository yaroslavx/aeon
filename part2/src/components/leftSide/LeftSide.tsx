import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { Chart } from '../../redux/calendar/calendarTypes'
import { CustomLeftSide } from './LeftSide.styles'
import Task from '../task/Task'
import { IoAddCircle } from 'react-icons/io5'
import { useCalendarData } from '../../hooks/queryHooks'
import { selectChartBar } from '../../redux/chart/chartBarSelector'
import { useAppDispatch } from '../../redux/store'
import { setOpened } from '../../redux/chart/chartBarSlice'

export type TaskType = {
    level: number
    chart: Chart
    opened?: number
    firstDate?: number
}

const LeftSide = () => {
    const { chart } = useSelector(selectCalendar)
    const [tasks, setTasks] = useState<TaskType[]>([])
    // const [opened, setOpened] = useState(0)

    const { opened } = useSelector(selectChartBar)

    const dispatch = useAppDispatch()


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
        <CustomLeftSide>
            <div className='leftside_header'>
                Work item
            </div>
            {tasks.length > 1 && <>
                <div className='add_bar'>
                    <div className='icon' ><IoAddCircle /></div>
                    Add item
                </div>
                <div>
                    {tasks.map(task => <div key={task.chart.id} onClick={() => openTask(task.level)}><Task level={task.level} chart={task.chart} opened={opened} /></div>)}
                </div>
            </>
            }
        </CustomLeftSide>
    )
}

export default LeftSide