import React, { Suspense } from 'react';
import useStateContext from '../../hooks/useStateContext';
import ReturnButton from './ReturnButton';
import LoadingOverlay from '../01 General/LoadingOverlay';

const Board = () => {
  const { context } = useStateContext();
  const Kanban = React.lazy(() => import('./Kanban'));

  const returnButtonProps = {
    title: 'Overview',
    returnLocation: '/boardoverview',
  };

  return (
    <>
      <ReturnButton props={returnButtonProps} />
      <Suspense fallback={<LoadingOverlay />}>
        <Kanban />
      </Suspense>
    </>
  );
};

export default Board;
