import React, { Suspense} from 'react'
import useStateContext from '../../hooks/useStateContext';
import { Box, Typography } from '@mui/material';
import DialogActionButton from '../DialogActionButton';
import ReturnButton from './ReturnButton';

export default function Board() {

  const {context} = useStateContext();
  const Kanban = React.lazy(() => import('./Kanban'));


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
      <Suspense fallback={<p>loading...</p>}>
        <Kanban/>
      </Suspense>
      <DialogActionButton props = {actionButtonProps} />
    </>
  )
}
