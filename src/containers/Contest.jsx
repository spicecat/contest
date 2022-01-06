import { useState, useEffect } from 'react'

import { Table } from '../components'

import { getContest, getProblems } from '../services/contestService'

function ContestTable({ contest = {} }) {
  return <Table data={[contest]} />
}
function showFile(blob) {
  console.log(blob)
  var newBlob = new Blob([blob], { type: "application/pdf" })

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }

  // For other browsers: 
  // Create a link pointing to the ObjectURL containing the blob.
  const data = window.URL.createObjectURL(newBlob);
  var link = document.createElement('a');
  link.href = data;
  link.download = "file.pdf";
  link.click();
  setTimeout(function () {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(data);
  }, 100);
}

export default function Contests(props) {
  const [contest, setContest] = useState()
  const [problems, setProblems] = useState()

  const loadContest = async () => {
    console.log(props)
    setContest(await getContest('Test'))
    setProblems(await getProblems('Test'))
  }

  useEffect(() => { loadContest() }, [])

  return <>
    <ContestTable contest={contest} />
    <object data="" type="application/pdf">
      <div>No online PDF viewer installed</div>
    </object>
    <button onClick={() => showFile(problems)} />
  </>
}