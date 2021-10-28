import { useState, useEffect } from 'react'

import { Table } from '../components'

import { getContest } from '../services/contestService'

function ContestTable({ contest = {} }) {
  console.log(contest)
  return <Table data={[contest]} />
}


export default function Contests() {
  const [contest, setContest] = useState()
  const loadContest = async () => { setContest(await getContest('Test')) }

  useEffect(() => { loadContest() }, [])

  return <>
    <ContestTable contest={contest} />
  </>
}