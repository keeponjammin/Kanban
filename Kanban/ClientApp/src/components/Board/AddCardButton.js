import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const AddCardButton = ({props}) => {
  return (
    <Button 
        variant="outlined" 
        color="success" 
        startIcon={<AddIcon/>}
        sx={{width: '100%'}}
        onClick={() => props.parentFunction(props.section)}>
        Add Card
    </Button>
  )
}

export default AddCardButton
