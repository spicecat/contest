import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table } from '../components'
import { getContests } from '../services/contestService'


function ContestsTable({ contests = [] }) {
  return <Table data={contests.map(contest => ({ contest }))} component={contest => <Link to={`contest/${contest}`}>{contest}</ Link>} />
}

export default function Contests() {
  const [contests, setContests] = useState()
  const loadContests = async () => { setContests(await getContests()) }

  useEffect(() => { loadContests() }, [])

  return <>
    <ContestsTable contests={contests} />
  </>
}