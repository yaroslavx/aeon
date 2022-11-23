import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { Chart } from '../../redux/calendar/calendarTypes'
import { CustomLeftSide } from './LeftSide.styles'
import Task from '../task/Task'
import { IoAddCircle } from 'react-icons/io5'
import { selectChartBar } from '../../redux/chart/chartBarSelector'
import { useAppDispatch } from '../../redux/store'
import { setOpened } from '../../redux/chart/chartBarSlice'

export type TaskType = {
    level: number
    chart: Chart
    opened?: number
    firstDate?: number
}

const LeftSide: FC = () => {
    const dispatch = useAppDispatch()
    const { chart } = useSelector(selectCalendar)
    const { opened } = useSelector(selectChartBar)

    const [tasks, setTasks] = useState<TaskType[]>([])
    const [size, setSize] = useState({ x: 370 });

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

    const openTask = (level: number) => {
        if (opened === level) {
            dispatch(setOpened({ opened: level + 1 }))
            return
        }
        dispatch(setOpened({ opened: level }))
    }


    // Left side resizer
    const handler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const startSize = size;
        const startPosition = { x: e.pageX };

        function onMouseMove(mouseMoveEvent: MouseEvent) {
            setSize(currentSize => ({
                x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
            }));
        }
        function onMouseUp() {
            document.body.removeEventListener("mousemove", onMouseMove);
        }

        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
    };

    return (
        <CustomLeftSide width={size.x}>
            <button className='resize' onMouseDown={handler}><div className='handle'></div></button>
            <div className='leftside_header'>
                Work item
            </div>
            <div className='add_bar'>
                <div className='icon' ><IoAddCircle /></div>
                Add item
            </div>
            {tasks.length > 1 && <>
                <div className='tasks'>
                    {tasks.map(task => <div key={task.chart.id} onClick={() => openTask(task.level)}><Task level={task.level} chart={task.chart} opened={opened} /></div>)}
                </div>
            </>
            }
        </CustomLeftSide>
    )
}

export default LeftSide