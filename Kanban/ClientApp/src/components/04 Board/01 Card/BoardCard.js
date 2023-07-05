import React, { useRef } from 'react'
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import ButtonDialog from '../../01 General/ButtonDialog';
import ButtonProperties from '../../Functions/ButtonProperties';
import EditIcon from '@mui/icons-material/Edit';
import EditCardForm from './EditCardForm';

const BoardCard = ({ props }) => {
  const ParentFunctionProps = (option) => {
    return {
      option: option,
      id: props.component.id,
      parent: props.parent ?? null,
    }
  }
  const childRef = useRef();
  return (
    <><Card
      sx={{ m: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.component.title}
          <IconButton
            onClick={() => childRef.current.handleClickOpen({
                function: props.parentFunction,
                variables: props,
                title: 'Edit card',
                description: 'Edit card',
                form: <EditCardForm />,
            })}
        >
          <EditIcon />
        </IconButton>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Delete forever" onClick={() => childRef.current.handleClickOpen(
          ButtonProperties(
            props.parentFunction,
            ParentFunctionProps(props.boardModifyOptions.RemoveCard),
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
