import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Table } from '../components'

import { getContest } from '../services/contestService'

function ContestTable({ contests }) {
  return <Table fields={['Contest']} data={contests} component={contest => <Link to={`/contest/${contest}`}> {contest}</ Link>} />
}


export default function Contests() {
  const [info, setInfo] = useState()
  const loadInfo = async () => { setInfo(await getContest()) }

  useEffect(() => { loadInfo() }, [])

  return <>
    <ContestTable info={info} />
  </>
}