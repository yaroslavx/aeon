import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { Chart } from '../../redux/calendar/calendarTypes'
import { CustomLeftSide } from './LeftSide.styles'
import Task from '../task/Task'
import { BsTrash } from 'react-icons/bs'

export type TaskType = {
    level: number
    chart: Chart
    opened?: number
}

const LeftSide = () => {
    const { chart } = useSelector(selectCalendar)
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [opened, setOpened] = useState(0)

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
            setOpened(level + 1)
            return
        }
        setOpened(level)

    }

    return (
        <CustomLeftSide>
            <div className='leftside_header'>
                Work item
            </div>
            <div className='blank_bar'></div>
            <div>
                {tasks.map(task => <div onClick={() => openTask(task.level)}><Task key={task.chart.id} level={task.level} chart={task.chart} opened={opened} /></div>)}
            </div>
        </CustomLeftSide>
    )
}

export default LeftSide