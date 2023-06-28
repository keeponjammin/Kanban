import { Fab } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useStateContext from '../../hooks/useStateContext';

export default function ReturnButton({props}) {

   const navigate = useNavigate();
   const {context, setContext} = useStateContext();

   function navigateBack(){
    setContext({
        selectedBoardIndex: -1,
        boardData: [],
    })
    navigate(props.returnLocation)
   }
    return (
        <Fab variant="extended" onClick={() => navigateBack()}>
            <ArrowBackIcon sx={{ mr: 1 }} />
            {props.title}
        </Fab>
    )
}
