import { useState } from 'react'
import { upperFirst } from 'lodash/string'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'

export default function DialogForm({ title, action, fields }) {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => { setOpen(!open) }

    const [form, setForm] = useState(fields.reduce((o, k) => (o[k] = '', o), {})) // remove and require form input
    const handleInputChange = e => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async () => {
        const response = await action(form)
        console.log(response)
        if (response) {
            setForm(fields.reduce((o, k) => (o[k] = '', o), {}))
            toggleOpen()
        } else {
            console.log()
        }
    }
    return (
        <>
            <Button color='inherit' variant='outlined' onClick={toggleOpen}>{title}</Button>
            <Dialog open={open} keepMounted onClose={toggleOpen}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {fields.map(field =>
                        <div key={field}>
                            <TextField name={field} label={upperFirst(field)} onChange={handleInputChange} required />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button type='submit' color='primary' onClick={handleSubmit}>{title}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}