import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Table } from '../components'

function ContestTable({ contest = {} }) {
  return <Table data={[contest]} />
}

export default function Contests({ contest }) {

  return <>
    cont
    <ContestTable contest={contest} />
    <Outlet />
  </>
}