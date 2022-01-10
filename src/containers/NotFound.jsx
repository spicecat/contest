import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import { Document, Page } from 'react-pdf'

export default function NotFound() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return <>
    <div>
      <strong>Page not found!</strong>
      <p><Link to='/'>Return Home</Link></p>
    </div>
    <img src='https://http.cat/404' alt='Not Found' />
    <div>
      <Document
        file="../assets/bury.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  </>
}