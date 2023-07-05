import React, { useRef } from 'react';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import ButtonDialog from '../../01 General/ButtonDialog';
import ButtonProperties from '../../Functions/ButtonProperties';
import EditIcon from '@mui/icons-material/Edit';
import EditCardForm from './EditCardForm';

const BoardCard = ({ props }) => {
  const childRef = useRef();

  const openEditDialog = () => {
    const { parentFunction, component, parent, boardModifyOptions } = props;
    childRef.current.handleClickOpen({
      function: parentFunction,
      variables: props,
      title: 'Edit card',
      description: 'Edit card',
      form: <EditCardForm />,
    });
  };

  const openDeleteDialog = () => {
    const { parentFunction, boardModifyOptions } = props;
    const parentFunctionProps = {
      option: boardModifyOptions.RemoveCard,
      id: props.component.id,
      parent: props.parent ?? null,
    };
    childRef.current.handleClickOpen(
      ButtonProperties(
        parentFunction,
        parentFunctionProps,
        'Deleting card',
        'Are you sure you want to delete this card?'
      )
    );
  };

  return (
    <>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.component.title}
            <IconButton onClick={openEditDialog}>
              <EditIcon />
            </IconButton>
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Delete forever" onClick={openDeleteDialog}>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ButtonDialog ref={childRef} />
    </>
  );
};

export default BoardCard;
