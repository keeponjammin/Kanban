import { Fab } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ReturnButton({props}) {

   const navigate = useNavigate();

   function navigateBack(){
    navigate(props.returnLocation)
   }
    return (
        <Fab variant="extended" onClick={() => navigateBack()}>
            <ArrowBackIcon sx={{ mr: 1 }} />
            {props.title}
        </Fab>
    )
}
