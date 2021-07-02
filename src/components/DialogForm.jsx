import React, { useState } from 'react'
import { upperFirst } from 'lodash/string'
import { useFormik } from 'formik'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'

export default function DialogForm({ name, action, schema }) {
    const [open, setOpen] = useState(false)
    const fields = Object.keys(schema.fields)
    const formik = useFormik({
        initialValues: fields.reduce((o, i) => ({ ...o, [i]: "" }), {}),
        validationSchema: schema,
        onSubmit: async values => { if (await action(values)) setOpen(false) }
    })

    return (
        <>
            <Button color='inherit' variant='outlined' onClick={() => setOpen(true)}>{name}</Button>
            <Dialog open={open} keepMounted onClose={() => setOpen(false)}>
                <DialogTitle>{name}</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        {fields.map(field =>
                            <TextField
                                key={field}
                                fullWidth
                                id={field}
                                name={field}
                                label={upperFirst(field.replaceAll('_', ' '))}
                                value={formik.values[field]}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched[field] && formik.errors[field])}
                                helperText={formik.touched[field] && formik.errors[field]}
                            />
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='primary' >{name}</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}