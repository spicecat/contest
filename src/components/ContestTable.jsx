import Table from './Table'

export default function ContestTable({ contests }) {
    return <Table fields={['name', 'description', 'start', 'length', 'problems']} data={contests} />
}