import React, { useRef } from 'react'
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import ButtonDialog from '../ButtonDialog';

const BoardCard = ({ props }) => {
  const ParentFunctionProps = (option) => {
    return {
        option: option,
        id: props.component.id,
        parent: props.parent ?? null,
    }
}
  const ButtonProps = (option, title, description) =>{
    return{
        parentFunction: props.parentFunction,
        parentFunctionProps: ParentFunctionProps(option),
        title: title,
        description: description,
    }
}
  const childRef = useRef();
  return (
    <><Card
      sx={{ m: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.component.title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Delete forever" onClick={() => childRef.current.handleClickOpen(
          ButtonProps(
            props.boardModifyOptions.RemoveCard,
            'Deleting card',
            'Are you sure you want to delete this card?'
          )
        )}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card><ButtonDialog ref={childRef} /></>
  )
}

export default BoardCard
