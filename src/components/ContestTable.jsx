import { Link } from 'react-router-dom'

import { Table } from '.'

export default function ContestTable({ contests }) {
  return <Table fields={['Contest']} data={contests} component={contest => <Link to={`/contest/${contest}`}> {contest}</ Link>} />
}