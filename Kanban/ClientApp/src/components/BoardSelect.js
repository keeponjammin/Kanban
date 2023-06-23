import React, { useContext } from 'react'
import { useStateContext } from '../hooks/useStateContext'

export default function BoardSelect() {

    const {context, setContext} = useStateContext()
    setContext({selectedBoardIndex:1})

    return (
        <div>BoardSelect</div>
  )
}
