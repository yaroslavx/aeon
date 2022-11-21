import React from 'react'
import { Chart } from '../../redux/calendar/calendarTypes'
import { TaskType } from '../leftSide/LeftSide'
import { CustomIcon, CustomTask } from './Task.styles'
import { IoLayers, IoBulb, IoBookmark } from 'react-icons/io5'
import { FiTarget, FiChevronDown } from 'react-icons/fi'
import { BsFillLightningFill } from 'react-icons/bs'


const colorPallete = [
    { main: "#8754F6", background: "#F5F1FE" },
    { main: "#2DB77B", background: "#EEF9F4" },
    { main: "#F0C752", background: "#FEFBF0" },
    { main: "#BE385E", background: "#FAEFF2" },
    { main: "#8754F6", background: "#F5F1FE" },
]


const Task: React.FC<TaskType> = ({ level, chart, opened }) => {



    return <CustomTask isOpened={!!(opened !== undefined && level > opened)} level={level}>
        {level < 4 && <button className='open_button'><FiChevronDown /></button>}
        <CustomIcon color={colorPallete[level].main} background={colorPallete[level].background} >
            {(() => {
                switch (level) {
                    case 0:
                        return <IoLayers className='icon' />
                    case 1:
                        return <IoBulb className='icon' />
                    case 2:
                        return <IoBookmark className='icon' />
                    case 3:
                        return <FiTarget className='icon' />
                    case 4:
                        return <BsFillLightningFill className='icon' />
                    default:
                        return null
                }
            })()}
        </CustomIcon>
        <span className='sub_length_number'>{chart.sub?.length || 0}</span>{chart.title}
    </CustomTask>




}

export default Task