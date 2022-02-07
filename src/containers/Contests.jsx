import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContestContext } from '../contexts'
import { contestSchema } from '../services/schemas'
import { AlertForm, Table } from '../components'


function ContestsTable({ contests = [] }) {
  return <Table data={contests.map(contest => ({ contest }))} component={contest => <Link to={`contest/${contest}`}>{contest}</ Link>} />
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
      schema={contestSchema}
    />
    <ContestsTable contests={contests} />
  </>
}