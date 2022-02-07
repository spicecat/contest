import React, { useState, useEffect } from 'react'
import { Alert, Form } from '.'

export default function AlertForm({ action, statusCode, onSuccess, ...props }) {
  const [alertCode, setAlertCode] = useState(100)

  const handleSubmit = value => {
    setAlertCode(102)
    action(value)
  }

  const updateAlertCode = () => {
    setAlertCode(statusCode)
  }

  useEffect(updateAlertCode, [statusCode, onSuccess])

  return <>
    <Alert {...{ alertCode, onSuccess }} />
    <br />
    <Form
      action={handleSubmit}
      {...props}
    />
  </>
}