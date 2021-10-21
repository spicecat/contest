import { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableRow, TableSortLabel, TableCell } from '@material-ui/core'

const fields = ['name', 'description', 'start', 'length', 'problems']

export default function ContestTable(contests) {
    const [orderedMemes, setOrderedMemes] = useState(contests)

    const [order, setOrder] = useState('desc')
    const [orderBy, setOrderBy] = useState(fields[0])

    const changeOrder = (event, prop) => {
        const newOrder = orderBy === prop && order === 'desc' ? 'asc' : 'desc'
        setOrder(newOrder)
        setOrderBy(prop)
        sortMemes(newOrder, prop)
    }
    const sortMemes = (ord = order, ordBy = orderBy) => {
        const arr = contests, type = typeof ((contests[0] || {})[ordBy])
        const compare = (a, b) => a > b ? 1 : -1
        arr.sort((a, b) => type === 'string' ? compare(a[ordBy].toUpperCase(), b[ordBy].toUpperCase()) : compare(a[ordBy], b[ordBy]))
        if (ord === 'desc') arr.reverse()
        setOrderedMemes(arr)
    }

    useEffect(sortMemes, [contests])

    return (
        <Table size='small'>
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
        </Table >
    )
}