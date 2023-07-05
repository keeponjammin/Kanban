import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import useStateContext from '../../hooks/useStateContext';
import ReturnButton from './ReturnButton';
import SaveBoardForm from './SaveBoardForm';
import LoadingOverlay from '../01 General/LoadingOverlay';
import DialogActionButton from '../01 General/DialogActionButton';

const Board = () => {
  const { context } = useStateContext();
  const Kanban = React.lazy(() => import('./Kanban'));

  const actionButtonProps = {
    title: 'Save board',
    description: 'Are you sure you wish to save?',
    color: 'primary',
    icon: <SaveIcon sx={{ mr: 1 }} />,
    form: <SaveBoardForm />,
  };

  const returnButtonProps = {
    title: 'Overview',
    returnLocation: '/boardoverview',
  };

  return (
    <>
      <ReturnButton props={returnButtonProps} />
      <Typography variant="h1">
        <Box sx={{ textAlign: 'center', m: 1 }}>Board {context.selectedBoardIndex}</Box>
      </Typography>
      <Suspense fallback={<LoadingOverlay />}>
        <Kanban />
      </Suspense>
      <DialogActionButton props={actionButtonProps} />
    </>
  );
};

export default Board;
