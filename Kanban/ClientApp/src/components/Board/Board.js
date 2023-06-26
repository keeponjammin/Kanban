import React from 'react'
import useStateContext from '../../hooks/useStateContext';

export default function Board() {

  const {context, setContext} = useStateContext();
  return (
    <div>Board {context.selectedBoardIndex}</div>
  )
}
