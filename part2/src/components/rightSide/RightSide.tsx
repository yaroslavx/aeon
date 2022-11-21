import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { parseDate } from '../../utils/parseDate'
import { CustomRightSide } from './RightSide.styles'

const RightSide = () => {
    const [date, setDate] = useState<Date | null>(null)

    const { period } = useSelector(selectCalendar)

    useEffect(() => {
        setDate(parseDate(period.split('-')[0]))
    }, [period])

    return (
        <CustomRightSide>
            <div className='rightside_header'>
                <div className='weeks_bar'>
                    <div className='week'>{date?.getDate()}</div>
                </div>
                <div className='day'></div>
            </div>
        </CustomRightSide>
    )
}

export default RightSide