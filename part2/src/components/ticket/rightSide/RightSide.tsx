import React from 'react'
import { TicketProps } from '../Ticket'

const RightSide: React.FC<TicketProps> = ({ double }) => {
    return (
        <div className={double ? 'double-right-sige right-side' : 'right-side'}>
            {double ? <span>9000 ₽</span> : <span>4500 ₽</span>}


        </div>
    )
}

export default RightSide