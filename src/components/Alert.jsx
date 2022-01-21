import React, { useState, useEffect } from 'react'
import MuiAlert from '@material-ui/lab/Alert'

export default function Alert({ msg = 'Error', type = 'error', alertCode }) {
    const [open, setOpen] = useState(false)
    const [severity, setType] = useState(type)
    const [message, setMsg] = useState(msg)

    useEffect(() => { // update message
        if (alertCode === 102) return
        else if (alertCode === 100 || !alertCode) setOpen(false)
        else if ([200, 201, 202].includes(alertCode)) {
            setType('success')
            setMsg('Success!')
        }
        else {
            setType('error')
            setMsg({
                400: 'Bad Request',
                401: 'Incorrect username or password',
                403: 'Incorrect username or password',
                404: 'Incorrect username or password',
                409: 'Username or email taken',
                501: 'Not Implemented',
                521: 'Server Down'
            }[alertCode] || 'Error')
            setOpen(true)
        }
    }, [alertCode])

    return open && <MuiAlert onClose={() => { setOpen(false) }} elevation={6} severity={severity}>{message}</MuiAlert>
}