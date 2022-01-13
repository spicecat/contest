import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import { Table } from '../components'
import { getContest, getProblems } from '../services/contestService'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
function ContestTable({ contest = {} }) {
  return <Table data={[contest]} />
}

export default function Contests(props) {
  const [contest, setContest] = useState()
  const [problems, setProblems] = useState()

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const loadContest = async () => {
    console.log(props)
    setContest(await getContest('Test'))
    setProblems(await getProblems('Test'))
  }

  useEffect(() => { loadContest() }, [])

  return <>
    prob
    {/* <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div> */}
  </>
}