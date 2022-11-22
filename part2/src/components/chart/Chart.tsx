import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { Chart } from '../../redux/calendar/calendarTypes'
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

const ChartComponent: FC = () => {
    const dispatch = useAppDispatch()

    const { opened } = useSelector(selectChartBar)
    const { period, chart } = useSelector(selectCalendar)

    const [tasks, setTasks] = useState<TaskType[]>([])
    const [firstDate, setFirstDate] = useState<number>()

    // Get start date of first task
    useEffect(() => {
        if (period.split('-')[0]) {
            setFirstDate(getFirstDate(parseDate(period.split('-')[0]))?.getTime())
        }
    }, [period])

    // Recursively parse the tasks tree
    const getNestedObject = (level: number, sub?: Chart[]) => {
        if (!sub) return
        for (let task of sub) {
            setTasks(tasks => [...tasks, { level, chart: task }])
            getNestedObject(level + 1, task.sub)
        }
    }

    // Create object of tasks and their levels
    useEffect(() => {
        setTasks([{ level: 0, chart }])
        getNestedObject(1, chart.sub)
    }, [chart])

    // Open tast and send state to store to open LeftSide tasks
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
                <div>
                    {tasks.map(task =>
                        <div key={task.chart.id}
                            onClick={() => openTask(task.level)}
                        >
                            <ChartTask level={task.level} chart={task.chart} opened={opened} firstDate={firstDate} />
                        </div>
                    )}
                </div>
            }
        </CustomChart>
    )
}

export default ChartComponent