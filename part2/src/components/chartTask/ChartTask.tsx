import React from 'react'
import { Chart } from '../../redux/calendar/calendarTypes'
import { TaskType } from '../leftSide/LeftSide'
import { IoLayers, IoBulb, IoBookmark } from 'react-icons/io5'
import { FiTarget, FiChevronDown } from 'react-icons/fi'
import { BsFillLightningFill } from 'react-icons/bs'
import { ChartBar, CustomChartTask } from './ChartTask.styled'


const colorPallete = [
    { border: "#497CF6", background: "#E2EBFF" },
    { border: "#FFA530", background: "#FFF2E0" },
    { border: "#2DB77B", background: "#CFF0D6" },
    { border: "#2DB77B", background: "#CFF0D6" },
    { border: "#FFA530", background: "#FFF2E0" },
]

const ChartTask: React.FC<TaskType> = ({ level, chart, opened, firstDate }) => {


    return <CustomChartTask
        isOpened={!!(opened !== undefined && level > opened)}
        level={level}
        start={firstDate && (Date.parse(chart.period_start) - firstDate) / 86400000}

    >
        <ChartBar
            border={colorPallete[level].border}
            background={colorPallete[level].background}
            width={firstDate && 1 + ((Date.parse(chart.period_end) - firstDate) / 86400000) - (Date.parse(chart.period_start) - firstDate) / 86400000}

        >
        </ChartBar>
        {chart.title}

    </CustomChartTask>





}

export default ChartTask