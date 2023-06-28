import React, { Suspense} from 'react'
import useStateContext from '../../hooks/useStateContext';
import { Box, Typography } from '@mui/material';
import DialogActionButton from '../DialogActionButton';
import ReturnButton from './ReturnButton';
import SaveBoardForm from './SaveBoardForm';
import SaveIcon from '@mui/icons-material/Save';

export default function Board() {

  const {context} = useStateContext();
  const Kanban = React.lazy(() => import('./Kanban'));


  const actionButtonProps = {
    form : <SaveBoardForm/>,
    title: 'Save board',
    description: 'Are you sure you wish to overwrite this board?',
    color: 'primary',
    icon: <SaveIcon sx={{ mr: 1 }} />
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
