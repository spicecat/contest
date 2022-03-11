import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContestContext } from '../contexts'
import { contestSchema as schema } from '../services/schemas'
import { AlertForm, Table } from '../components'
import { TableCell } from '@material-ui/core'

function ContestListItem({ contest }) {
  return <TableCell><Link to={`contest/${contest}`}>{contest}</ Link></TableCell>
}

function ContestsTable({ contests = [] }) {
  return <Table data={contests.map(contest => ({ contest }))} component={contest => <ContestListItem contest={contest} />} />
}

export default function Contests() {
  const [{ contests, statusCode }, contestDispatch] = useContext(ContestContext)

  const loadContests = async value => {
    await contestDispatch({ type: 'getContests', value })
  }

  return <>
    <AlertForm
      name='Contests'
      action={loadContests}
      statusCode={statusCode}
      schema={schema}
    />
    <ContestsTable contests={contests} />
  </>
}