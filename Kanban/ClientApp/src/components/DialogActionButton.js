import React from 'react'
import { Dialog, Fab, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton,  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useStateContext from '../hooks/useStateContext';

export default function DialogActionButton({props}) {
  const {context, setContext} = useStateContext();

  const handleClickOpen = () => {
    setContext({popup: true});
  };

  const handleClose = () => {
    setContext({popup: false});
  };
  return (
    <><Fab
      onClick={handleClickOpen}
      variant="extended"
      color={props.color}
      aria-label="add"
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }}>
      {props.icon}
      {props.title}
    </Fab>
    <Dialog open={context.popup} onClose={handleClose}>
    <DialogActions>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
      </IconButton>
    </DialogActions>
    <><DialogTitle>
        {props.title}
      </DialogTitle>
      <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
          {props.form}
      </DialogContent></>
    </Dialog></>
  )
}
