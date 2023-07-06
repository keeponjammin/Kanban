import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const ButtonDialog = forwardRef(({ props }, ref) => {
    const [buttonProps, setButtonProps] = useState({});
    const [open, setOpen] = useState(false);
    const hasForm = buttonProps.form !== null && typeof buttonProps.form !== 'undefined';

    useImperativeHandle(ref, () => ({
        handleClickOpen(props) {
            setOpen(true);
            setButtonProps(props);
        },
        handleClose() {
            setOpen(false);
        },
    }));

    const handleClose = () => {
        setOpen(false);
    };

    const handleFormFunction = () => {
        handleClose();
        if (buttonProps.function) {
            buttonProps.function(buttonProps.variables);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogActions>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogActions>
            <>
                <DialogTitle>{buttonProps.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{buttonProps.description}</DialogContentText>
                </DialogContent>
            </>
            {hasForm ? (
                React.cloneElement(buttonProps.form, { formProps: { formFunction: handleClose, ...buttonProps } })
            ) : (
                <DialogActions>
                    <Button onClick={handleFormFunction} autoFocus>
                        I'm sure
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            )}
        </Dialog>
    );
});

export default ButtonDialog;
