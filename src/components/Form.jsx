import React, { useState } from 'react'
import { upperFirst } from 'lodash/string'
import { useFormik } from 'formik'
import { Button, IconButton, InputAdornment, TextField, Tooltip, Typography } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

export default function Form({ name, action, schema }) {
    const [showPassword, setShowPassword] = useState(false)
    const fields = Object.keys(schema.fields)
    const formik = useFormik({
        initialValues: fields.reduce((o, i) => ({ ...o, [i]: "" }), {}),
        validationSchema: schema,
        onSubmit: action
    })
    return <form onSubmit={formik.handleSubmit}>
        <Typography>{name}</Typography>
        <div>
            {fields.map(field =>
                <TextField
                    key={field}
                    fullWidth
                    id={field}
                    name={field}
                    label={upperFirst(field.replace(/_/g, ' '))}
                    type={field.includes('password') && !(field === 'password' && showPassword) ? 'password' : 'text'}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched[field] && formik.errors[field])}
                    helperText={formik.touched[field] && formik.errors[field]}
                    {...field === 'password' && {
                        InputProps: {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Tooltip title={`${showPassword ? 'Hide' : 'Show'} password`} placement='left'>
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </Tooltip>
                                </InputAdornment>)
                        }
                    }}
                />
            )}
        </div>
        <br />
        <Button type='submit' variant='contained' color='primary'>{name}</Button>
    </form>
}