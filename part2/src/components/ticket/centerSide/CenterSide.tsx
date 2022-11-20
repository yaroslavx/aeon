import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSearch } from '../../../redux/search/searchSelector'
import { StyledTicket, StyledTicketContainer } from '../Ticket.styles'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RiSuitcase3Line } from 'react-icons/ri'
import { TicketProps } from '../Ticket'
const options = [['09:20', '11:05'], ['10:20', '12:05'], ['11:20', '13:05']]



const CenterSide: React.FC<TicketProps> = ({ double }) => {
    let { fromLocation, toLocation, fromDate, toDate } = useSelector(selectSearch)
    if (!fromLocation || !toLocation || !fromDate || !toDate) {
        fromLocation = sessionStorage.getItem('fromLocation') || ''
        toLocation = sessionStorage.getItem('toLocation') || ''
        fromDate = sessionStorage.getItem('fromDate') || ''
        toDate = sessionStorage.getItem('toDate') || ''
    }
    const [selectedOption, setSelectedOption] = useState<string[]>([options[0][0], options[0][1]])
    return (
        <div className={double ? "double-center-side center-side" : 'center-side'} >
            <div className='flight-details'>
                <div className='location'>
                    <div className='time'>{selectedOption[0]}</div>
                    {double ? <>
                        <div className='location-city'>{toLocation}</div>
                        <div className='location-time'>{new Date(Date.parse(toDate)).getDate()}.{new Date(Date.parse(toDate)).getMonth()}.{new Date(Date.parse(toDate)).getFullYear()}</div></> : <>
                        <div className='location-city'>{fromLocation}</div>
                        <div className='location-time'>{new Date(Date.parse(fromDate)).getDate()}.{new Date(Date.parse(fromDate)).getMonth()}.{new Date(Date.parse(fromDate)).getFullYear()}</div></>}

                </div>

                <div className='flight'>
                    <div className='aliases'>
                        {double ? <>
                            <span>{toLocation.slice(0, 3).toUpperCase()}</span>
                            <span>{fromLocation.slice(0, 3).toUpperCase()}</span>
                        </> : <>
                            <span>{fromLocation.slice(0, 3).toUpperCase()}</span>
                            <span>{toLocation.slice(0, 3).toUpperCase()}</span>

                        </>}

                    </div>
                    <div className='graph'>
                        <div className='ellipse'></div>
                        <div className='line'></div>
                        <div className='ellipse'></div>
                    </div>
                    <div className='in-flight-time'>
                        <span>В пути 1 ч 55 мин</span>
                    </div>
                </div>

                <div className='location'>
                    <div className='time'>{selectedOption[1]}</div>
                    {double ? <>
                        <div className='location-city'>{fromLocation}</div>
                        <div className='location-time'>{new Date(Date.parse(toDate)).getDate()}.{new Date(Date.parse(toDate)).getMonth()}.{new Date(Date.parse(toDate)).getFullYear()}</div></> : <>
                        <div className='location-city'>{toLocation}</div>
                        <div className='location-time'>{new Date(Date.parse(fromDate)).getDate()}.{new Date(Date.parse(fromDate)).getMonth()}.{new Date(Date.parse(fromDate)).getFullYear()}</div></>}
                </div>

                <div className='baggage'>
                    <HiOutlineShoppingBag className='icon' />
                    <RiSuitcase3Line className='icon' />
                </div>
            </div>


            <div className='options'>
                {options.map(option =>
                    <div
                        key={option[0]}
                        className={selectedOption[0] === option[0] ? 'option selected' : "option"}
                        onClick={() => setSelectedOption([option[0], option[1]])}
                    ><span>{option[0]}</span> – {option[1]}
                    </div>)}
            </div>
        </div>
    )
}

export default CenterSide