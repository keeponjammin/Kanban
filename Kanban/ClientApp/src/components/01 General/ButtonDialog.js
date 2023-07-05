import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React, { forwardRef, useImperativeHandle } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const ButtonDialog = forwardRef(({ props }, ref) => {
    const [buttonProps, setButtonProps] = useState({});
    const [open, setOpen] = React.useState(false);
    useImperativeHandle(ref, () => ({

        handleClickOpen(props) {
            setOpen(true);
            setButtonProps(props);
        },

        handleClose() {
            setOpen(false);
        }
    }));

    const handleClose = () => {
        setOpen(false);
    };
    //console.log(buttonProps);
    const formProps = {
        formFunction: handleClose,
        additionalFunction: buttonProps.function,
        additionalFunctionVariables: buttonProps.variables,
    }
    const hasForm = buttonProps.form !== null && typeof buttonProps.form !== 'undefined';
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogActions>
                <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogActions>
            <><DialogTitle>
                {buttonProps.title}
            </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {buttonProps.description}
                    </DialogContentText>
                </DialogContent></>
            {hasForm ?
                React.cloneElement(buttonProps.form, { formProps })
                :
                <DialogActions>
                    <Button onClick={() => buttonProps.function(buttonProps.variables)}
                        autoFocus>
                        I'm sure
                    </Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            }
        </Dialog>
    )
});

export default ButtonDialog
