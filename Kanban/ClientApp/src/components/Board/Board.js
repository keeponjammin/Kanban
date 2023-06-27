import React from 'react'
import useStateContext from '../../hooks/useStateContext';
import Kanban from './Kanban';
import { Typography } from '@mui/material';

export default function Board() {

  const {context, setContext} = useStateContext();
  return (
    <>
      <Typography variant="h1">
        Board {context.selectedBoardIndex}
      </Typography>
      <Kanban/>
    </>
  )
}
