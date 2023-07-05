import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function EditCardForm({ formProps }) {

    const [inputText, setInputText] = useState("");

    const handleFunction = () => {
        formProps.formFunction();
    }
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    const editCard = () => {
        formProps.formFunction();
        
        formProps.additionalFunction({
            option: formProps.additionalFunctionVariables.boardModifyOptions.EditCard,
            id: formProps.additionalFunctionVariables.component.id,
            parent: formProps.additionalFunctionVariables?.parent?.id,
            value: inputText,
        });
    }
    return (
        <><DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Card description"
                fullWidth
                variant="standard"
                onChange={handleChange}
                defaultValue={formProps.additionalFunctionVariables.component.title}
            />
        </DialogContent><DialogActions>
                <Button onClick={editCard}>Edit Card</Button>
                <Button onClick={handleFunction}>Cancel</Button>
            </DialogActions></>
    )
}
