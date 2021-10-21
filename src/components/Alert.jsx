import { useState, useEffect } from 'react'
import MuiAlert from '@material-ui/lab/Alert'

export default function Alert({ msg = 'Error', type = 'error', statusCode }) {
    const [open, setOpen] = useState(false)
    const [severity, setType] = useState(type)
    const [message, setMsg] = useState(msg)

    useEffect(() => { // update message
        if (statusCode === 102) return
        else if (statusCode === 100) setOpen(false)
        else if ([201, 202].includes(statusCode)) {
            setType('success')
            setMsg('Success!')
        }
        else {
            setType('error')
            setMsg({
                400: 'Bad Request',
                401: 'Incorrect username or password',
                409: 'Username or email taken',
                501: 'Not Implemented',
                521: 'Server Down'
            }[statusCode] || 'Error')
            setOpen(true)
        }
    }, [statusCode])

    return (
        open && <MuiAlert onClose={() => { setOpen(false) }} elevation={6} severity={severity}>{message}</MuiAlert>
    )
}