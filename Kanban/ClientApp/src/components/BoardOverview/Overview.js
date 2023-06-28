import React from 'react'
import OverviewGrid from './Grid'
import Center from '../Center'
import DialogActionButton from '../DialogActionButton'
import CreateBoardForm from './CreateBoardForm'
import AddIcon from '@mui/icons-material/Add';

export default function Overview() {

  const actionButtonProps = {
    form : <CreateBoardForm/>,
    title: 'Add board',
    description: 'Fill in the following form to create a new board.',
    color: 'success',
    icon: <AddIcon sx={{ mr: 1 }} />
  }
    return (
      <>
      <Center>
        <OverviewGrid />
      </Center>
      <DialogActionButton props = {actionButtonProps} />
    </>
  )
}
