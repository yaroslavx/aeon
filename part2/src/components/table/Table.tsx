import React from 'react'
import LeftSide from '../leftSide/LeftSide'
import RightSide from '../rightSide/RightSide'
import { CustomTable } from './Table.styles'

const Table = () => {
    return (
        <CustomTable>
            <LeftSide />
            <RightSide />
        </CustomTable>
    )
}

export default Table