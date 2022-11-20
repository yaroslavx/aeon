import React from 'react'
import { TicketProps } from '../Ticket'

const LeftSide: React.FC<TicketProps> = ({ double }) => {
    return (
        <div className='left-side'>
            <div className='refundable'><span>Невозвратный</span></div>
            <div className='aircompany'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1280px-S7_new_logo.svg.png' className='icon'
                />
                <span>S7 Airlines</span>
            </div>
        </div>
    )
}

export default LeftSide