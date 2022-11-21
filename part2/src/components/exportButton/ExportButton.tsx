import React from 'react'
import { CustomExportButton } from './ExportButton.styles'
import { HiDownload } from 'react-icons/hi'

const ExportButton = () => {
    return (
        <CustomExportButton>
            <div className='icon'><HiDownload /></div>
            <span>Export</span>
        </CustomExportButton>
    )
}

export default ExportButton