import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';


const AddCardButton = ({ props }) => {
    const ParentFunctionProps = {
        option: props.boardModifyOptions.AddCard,
        id: props.component.id,
        parent: props?.parent ?? null,
    }
    
    return (
        <Button
            variant="outlined"
            color="success"
            startIcon={<AddIcon />}
            sx={{ width: '100%' }}
            onClick={() => props.parentFunction(ParentFunctionProps)}>
            Add Card
        </Button>
    )
}

export default AddCardButton
