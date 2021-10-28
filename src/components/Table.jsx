import { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, TableSortLabel } from '@material-ui/core'

export default function ContestTable({ data = [], fields = Object.keys(data[0] || {}), component = item => item }) {
    const [orderedData, setOrderedData] = useState(data)

    const [order, setOrder] = useState('desc')
    const [orderBy, setOrderBy] = useState(fields[0])

    const changeOrder = (_, prop) => {
        const newOrder = orderBy === prop && order === 'desc' ? 'asc' : 'desc'
        setOrder(newOrder)
        setOrderBy(prop)
        sort(newOrder, prop)
    }
    const sort = (ord = order, ordBy = orderBy) => {
        const arr = data, type = typeof ((data[0] || {})[ordBy])
        const compare = (a, b) => a > b ? 1 : -1
        arr.sort((a, b) => type === 'string' ? compare(a[ordBy].toUpperCase(), b[ordBy].toUpperCase()) : compare(a[ordBy], b[ordBy]))
        if (ord === 'desc') arr.reverse()
        setOrderedData(arr)
    }

    useEffect(sort, [data, order, orderBy])

    return <Table size='small'>
        <TableHead>
            <TableRow>
                {fields.map(field => (
                    <TableCell
                        key={field}
                        padding='none'
                        sortDirection={orderBy === field && order}
                    >
                        <TableSortLabel
                            active={orderBy === field}
                            direction={orderBy === field ? order : 'asc'}
                            onClick={event => changeOrder(event, field)}
                        >
                            {field}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {orderedData.map(item => fields.map(field => <TableCell>{component(item[field])}</TableCell>))}
        </TableBody>
    </Table >
}