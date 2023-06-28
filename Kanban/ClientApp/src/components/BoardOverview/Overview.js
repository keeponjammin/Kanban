import React from 'react'
import OverviewGrid from './Grid'
import Center from '../Center'
import DialogActionButton from '../DialogActionButton'
import CreateBoardForm from './CreateBoardForm'

export default function Overview() {

  const actionButtonProps = {
    form : <CreateBoardForm/>,
    title: 'Add board',
    description: 'Fill in the following form to create a new board.',
    color: 'success'
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
