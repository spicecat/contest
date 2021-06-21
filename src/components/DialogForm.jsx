import { useState } from 'react'
import { upperFirst } from 'lodash/string'
import { zipObject } from 'lodash/array'
import { useFormik } from 'formik'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'

export default function DialogForm({ title, action, fields, schema }) {
    const [open, setOpen] = useState(false)

    const formik = useFormik({
        initialValues: zipObject(fields),
        validationSchema: schema,
        onSubmit: async values => {
            const response = await action(values)
            console.log(response)
            if (response) {
                setOpen(false)
            } else {
                console.log()
            }
        }
    })

    return (
        <>
            <Button color='inherit' variant='outlined' onClick={() => setOpen(true)}>{title}</Button>
            <Dialog open={open} keepMounted onClose={() => setOpen(false)}>
                <DialogTitle>{title}</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        {fields.map(field =>
                            <TextField
                                fullWidth
                                key = {field}
                                id={field}
                                name={field}
                                label={upperFirst(field.replaceAll('_',' '))}
                                value={formik.values[field]}
                                onChange={formik.handleChange}
                                error={formik.touched[field] && formik.errors[field]}
                                helperText={formik.touched[field] && formik.errors[field]}
                            />
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' color='primary' >{title}</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}