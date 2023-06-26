import React from 'react'
import OverviewGrid from './Grid'
import Center from '../Center'
import ActionButton from './ActionButton'
import CreateBoardForm from './CreateBoardForm'

export default function Overview() {

  const overviewProps = {
    form : <CreateBoardForm/>,
    title: 'Add board',
    description: 'Fill in the following form to create a new board.'
  }
    return (
      <>
      <Center>
        <OverviewGrid />
      </Center>
      <ActionButton props = {overviewProps} />
    </>
  )
}
