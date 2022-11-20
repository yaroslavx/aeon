import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSearch } from '../../redux/search/searchSelector'
import { StyledTicket, StyledTicketContainer } from './Ticket.styles'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RiSuitcase3Line } from 'react-icons/ri'
import LeftSide from './leftSide/LeftSide'
import CenterSide from './centerSide/CenterSide'
import RightSide from './rightSide/RightSide'
import { useNavigate } from 'react-router-dom'

export type TicketProps = {
    double?: boolean
}

const Ticket = () => {
    const navigate = useNavigate()
    let { toDate } = useSelector(selectSearch)
    if (!toDate) toDate = sessionStorage.getItem('toDate') || ''


    return (
        <StyledTicketContainer height={toDate ? '400px' : '200px'}  >
            <StyledTicket>
                {toDate ? <div >
                    <LeftSide />
                    <LeftSide />
                </div> :
                    <LeftSide />
                }
                {toDate ? <div >
                    <CenterSide double={false} />
                    <CenterSide double={true} />
                </div> :
                    <CenterSide double={false} />

                }

                <RightSide double={toDate ? true : false} />
            </StyledTicket>
        </StyledTicketContainer >
    )
}

export default Ticket