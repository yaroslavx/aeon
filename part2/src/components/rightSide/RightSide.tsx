import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useCalendarData } from '../../hooks/queryHooks'
import { selectCalendar } from '../../redux/calendar/calendarSelector'
import { getEveryMondayAndSunday, getFirstDate, parseDate } from '../../utils/dateUtils'
import ChartComponent from '../chart/Chart'
import { CustomRightSide } from './RightSide.styles'

const RightSide: FC = () => {
    const { period } = useSelector(selectCalendar)

    const [firstDate, setFirstDate] = useState<Date>()
    const [lastDate, setLastDate] = useState<Date>()
    const [everyMondayAndSunday, setEveryMondayAndSunday] = useState<{ monday: string, sunday: string }[]>()
    const [selectedColumn, setSelectedColumn] = useState<number>()

    // Get first monday and last sunday on project period
    // Get all mondays and sundays on project period
    useEffect(() => {
        const borderDates = period.split('-')
        if (borderDates.length === 2) {
            setFirstDate(getFirstDate(parseDate(borderDates[0])))
            setLastDate(parseDate(borderDates[1]))
            setEveryMondayAndSunday(
                getEveryMondayAndSunday([
                    `${firstDate?.getFullYear()}-${("0" + firstDate?.getMonth()).slice(-2)}-${("0" + firstDate?.getDate()).slice(-2)}`,
                    `${lastDate?.getFullYear()}-${("0" + lastDate?.getMonth()).slice(-2)}-${("0" + lastDate?.getDate()).slice(-2)}`
                ])
            )
        }
    }, [period])

    const highlightDay = (pos: number) => {
        pos === selectedColumn ? setSelectedColumn(undefined) : setSelectedColumn(pos)
    }

    const highLightColumn = (pos: number) => {
        pos === selectedColumn ? setSelectedColumn(undefined) : setSelectedColumn(pos)
    }

    return (
        <CustomRightSide>
            {everyMondayAndSunday && everyMondayAndSunday.map((week, i) =>
                <div key={week.monday} className='weeks'>
                    <div className='week'>{week.monday} - {week.sunday}</div>
                    <div className='days'>
                        {[1, 2, 3, 4, 5, 6, 7].map(day =>
                            <div key={week.monday + `${day}`}
                                onClick={() => highlightDay((7 * i) + day)}
                                className={`${((7 * i) + day === selectedColumn) ? 'day highlight_day' : 'day'}`}
                            >
                                {day}
                            </div>
                        )}
                    </div>
                    <div className='columns'>
                        {everyMondayAndSunday && [1, 2, 3, 4, 5, 6, 7].map((column, j) =>
                            <div key={week.monday + `${column}`}
                                onClick={() => highLightColumn((7 * i) + j + 1)}
                                className={`${((7 * i) + j + 1 === selectedColumn) ? 'column highlight_column' : 'column'}`}
                            />
                        )}
                    </div>
                </div>
            )}
            <div className='chart'>
                <ChartComponent />
            </div>
        </CustomRightSide >
    )
}

export default RightSide