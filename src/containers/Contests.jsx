import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContestContext } from '../contexts'
import { contestSchema } from '../services/schemas'
import { Form, Table } from '../components'


function ContestsTable({ contests = [] }) {
  return <Table data={contests.map(contest => ({ contest }))} component={contest => <Link to={`contest/${contest}`}>{contest}</ Link>} />
}

export default function Contests() {
  const [{ contests }, contestDispatch] = useContext(ContestContext)

  const loadContests = async value => {
    await contestDispatch({ type: 'getContests', value })
  }

  return <>
    <Form
      name='Contests'
      action={loadContests}
      schema={contestSchema}
    />
    <ContestsTable contests={contests} />
  </>
}