import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Matricule', minWidth: 170 },
    { id: 'code', label: 'Nom', minWidth: 100 },
    {
        id: 'population',
        label: 'Prénom',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Email',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'classe',
        label: 'Classe',
        minWidth: 170,
        align: 'center',
    },
]

function createData(name, code, population, size, classe) {
    const density = population / size
    return { name, code, population, size, density, classe }
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, "SIGL"),
    createData('China', 'CN', 1403500365, 9596961, "SIGL"),
    createData('Italy', 'IT', 60483973, 301340, "SIGL"),
    createData('United States', 'US', 327167434, 9833520, "SIGL"),
    createData('Canada', 'CA', 37602103, 9984670, "SIGL"),
    createData('Australia', 'AU', 25475400, 7692024, "SIGL"),
    createData('Germany', 'DE', 83019200, 357578, "SIGL"),
    createData('Ireland', 'IE', 4857000, 70273, "SIGL"),
    createData('Mexico', 'MX', 126577691, 1972550, "SIGL"),
    createData('Japan', 'JP', 126317000, 377973, "SIGL"),
    createData('France', 'FR', 67022000, 640679, "SIGL"),
    createData('United Kingdom', 'GB', 67545757, 242495, "SIGL"),
    createData('Russia', 'RU', 146793744, 17098246, "SIGL"),
    createData('Nigeria', 'NG', 200962417, 923768, "SIGL"),
    createData('Brazil', 'BR', 210147125, 8515767, "SIGL"),
]

export default function UserTable() {

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper sx={{ width: '98%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor: '#00009c', color: '#fff' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}