import { useState, useEffect } from 'react'

import ContestTable from '../components/ContestTable'

import { getContests } from '../services/contestService'

export default function Contests() {
  const [contests, setContests] = useState(123)
  const loadContests = async () => { setContests(await getContests()) }

  useEffect(() => { loadContests() }, [])

  return JSON.stringify(contests)
}