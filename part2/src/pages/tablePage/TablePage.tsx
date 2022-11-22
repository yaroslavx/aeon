import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ExportButton from '../../components/exportButton/ExportButton';
import Table from '../../components/table/Table'
import { useCalendarData } from '../../hooks/queryHooks';
import { setCalendar } from '../../redux/calendar/calendarSlice';
import { useAppDispatch } from '../../redux/store';
import { CustomTablePage } from './TablePage.styled'

const TablePage = () => {
    const dispatch = useAppDispatch()
    const { isLoading, data: calendar, isError, error, isFetching, refetch } =
        useCalendarData();

    useEffect(() => {
        if (calendar) {
            dispatch(setCalendar({ project: calendar.project, period: calendar.period, chart: calendar.chart }))

        }
    }, [calendar])


    const dowloadFile = () => {
        fetch('http://82.202.204.94/tmp/test.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `${calendar?.project}.txt`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode?.removeChild(link);
            });
    }

    return (
        <CustomTablePage>
            <div className='header'>
                <span className='title'>
                    {calendar?.project} / {calendar?.period}
                </span>
                <div onClick={dowloadFile}>
                    <ExportButton />
                </div>
            </div>
            <Table />
        </CustomTablePage>
    )
}

export default TablePage