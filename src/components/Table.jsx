import { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableRow, TableSortLabel, TableCell } from '@material-ui/core'

export default function ContestTable({ fields, data=[] }) {
    const [orderedMemes, setOrderedMemes] = useState(data)

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
        setOrderedMemes(arr)
    }

    useEffect(sort, [data, order, orderBy])

    return <Table size='small'>
        <TableHead>
            <TableRow>
                {fields.map(headCell => (
                    <TableCell
                        key={headCell.prop}
                        padding='none'
                        sortDirection={orderBy === headCell.prop && order}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.prop}
                            direction={orderBy === headCell.prop ? order : 'asc'}
                            onClick={event => changeOrder(event, headCell.prop)}
                        >
                            {headCell.name}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {orderedMemes.map(item => <div>{item}</div>)}
        </TableBody>
    </Table>
}