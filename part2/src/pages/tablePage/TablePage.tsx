import React from 'react'
import Table from '../../components/table/Table'
import { useRandomMansData } from '../../hooks/queryHooks';
import { CustomTablePage } from './TablePage.styled'

const TablePage = () => {
    const { isLoading, data, isError, error, isFetching, refetch } =
        useRandomMansData();

    return (
        <CustomTablePage>
            <Table />
            <>
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        {data?.chart.id}
                    </>
                )}
            </>
        </CustomTablePage>
    )
}

export default TablePage