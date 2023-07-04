import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React, { forwardRef, useImperativeHandle } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ButtonDialog = forwardRef(({ props }, ref) => {
    console.log({props})
    const [open, setOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({
        handleClickOpen() {
            setOpen(true);
        }
    }));

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogActions>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogActions>
            <><DialogTitle>
                {/* {props.title} */}
                Warning
            </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure?
                    </DialogContentText>
                </DialogContent></>
            <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={
                    () => props.parentFunction({option: props.boardModifyOptions.RemoveSection, id: props.component.id})}
                    autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
});

export default ButtonDialog
