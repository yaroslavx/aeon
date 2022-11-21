import React, { useEffect } from 'react'
import ExportButton from '../../components/exportButton/ExportButton';
import Table from '../../components/table/Table'
import { useRandomMansData } from '../../hooks/queryHooks';
import { setChart, setPeriod, setProject } from '../../redux/calendar/calendarSlice';
import { useAppDispatch } from '../../redux/store';
import { CustomTablePage } from './TablePage.styled'

const TablePage = () => {
    const dispatch = useAppDispatch()
    const { isLoading, data: calendar, isError, error, isFetching, refetch } =
        useRandomMansData();

    useEffect(() => {
        if (calendar) {
            dispatch(setProject({ project: calendar.project }))
            dispatch(setPeriod({ period: calendar.period }))
            dispatch(setChart({ chart: calendar.chart }))
        }
    }, [calendar])
    return (
        <CustomTablePage>
            <div className='header'>
                <span className='title'>
                    {calendar?.project} / {calendar?.period}
                </span>
                <ExportButton />
            </div>
            <Table />
        </CustomTablePage>
    )
}

export default TablePage