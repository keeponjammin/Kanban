import React from 'react'
import useStateContext from '../../hooks/useStateContext';
import Kanban from './Kanban';
import { Box, Typography } from '@mui/material';
import DialogActionButton from '../DialogActionButton';
import ReturnButton from './ReturnButton';

export default function Board() {

  const {context, setContext} = useStateContext();
  const actionButtonProps = {
    // form : <CreateBoardForm/>,
    title: 'Save',
    description: 'Are you sure you wish to save this board?',
    color: 'primary'
  }

  const returnButtonProps = {
      title: 'Overview',
      returnLocation: '/boardoverview',
  }
  return (
    <>
    <ReturnButton props = {returnButtonProps} />
      <Typography variant="h1">
        <Box sx={{ textAlign: 'center', m: 1 }}>
          Board {context.selectedBoardIndex}
        </Box>
      </Typography>
      <Kanban/>
      <DialogActionButton props = {actionButtonProps} />
    </>
  )
}
