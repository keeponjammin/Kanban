import React, { useRef } from 'react';
import { Fab } from '@mui/material';
import ButtonProperties from '../Functions/ButtonProperties';
import ButtonDialog from './ButtonDialog';

export default function DialogActionButton({ props }) {
  const childRef = useRef(null);

  const handleClickOpen = () => {
    const buttonProps = ButtonProperties(
      props.function,
      props.variables,
      props.title,
      props.description,
      props.form,
      props.data,
    );
    childRef.current.handleClickOpen(buttonProps);
  };

  return (
    <>
      <Fab
        onClick={handleClickOpen}
        variant="extended"
        color={props.color}
        aria-label="add"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      >
        {props.icon}
        {props.title}
      </Fab>
      <ButtonDialog ref={childRef} />
    </>
  );
}
