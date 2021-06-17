import React, { forwardRef, useState } from "react"
import { Button, Slide, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core"

export default function Login() {
    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />
    })
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <Button color="inherit" variant="outlined" onClick={toggleOpen}>Login</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={toggleOpen}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Login</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField label="Username" />
                        <TextField label="Password" />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleOpen} color="primary">Login</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}