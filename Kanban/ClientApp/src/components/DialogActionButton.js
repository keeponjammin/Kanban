import React, { useRef } from 'react'
import { Fab } from '@mui/material';
import ButtonDialog from './ButtonDialog';
import ButtonProperties from './Functions/ButtonProperties';

export default function DialogActionButton({ props }) {
  const childRef = useRef();
  //console.log(props)
  return (
    <><Fab
      onClick={() => childRef.current.handleClickOpen(
        ButtonProperties(
          props.function,
          props.variables,
          props.title,
          props.description,
          props.form,
        )
      )}
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
    </Fab><ButtonDialog ref={childRef} /></>
  )
}
