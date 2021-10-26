import React, { useState } from 'react'
import { upload } from '../services/submit.js'
export default function Submit() {
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.files[0])
    }
    function handleSubmit() {
        upload(file)
    }

    return <>
        <input type="file" name="files[]" onChange={handleFile} />
        <button onClick={handleSubmit}>Submit</button>
    </>
}