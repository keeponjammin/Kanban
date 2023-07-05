import React from 'react'
import OverviewGrid from './Grid'
import Center from '../01 General/Center'
import DialogActionButton from '../01 General/DialogActionButton'
import CreateBoardForm from './CreateBoardForm'
import AddIcon from '@mui/icons-material/Add';

export default function Overview() {

  const actionButtonProps = {
    variables: '',
    title: 'Add board',
    description: 'Fill in the following form to create a new board.',
    form : <CreateBoardForm/>,

    color: 'success',
    icon: <AddIcon sx={{ mr: 1 }} />,
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
