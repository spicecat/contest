import { useState, useEffect } from 'react'

import ContestTable from '../components/ContestTable'

import { getContests } from '../services/contestService'

export default function Contests() {
  const [contests, setContests] = useState()
  const loadContests = async () => { setContests(await getContests()) }

  useEffect(() => { loadContests() }, [])

  return <>
    <ContestTable contests={contests} />
  </>
}