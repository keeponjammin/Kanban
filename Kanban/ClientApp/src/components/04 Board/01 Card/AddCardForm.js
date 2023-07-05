import { Button, DialogActions, DialogContent, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function AddCardForm({ formProps }) {

    const [inputText, setInputText] = useState("");

    const handleFunction = () => {
        formProps.formFunction();
    }
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    const addCard = () => {
        formProps.additionalFunction({
            option: formProps.additionalFunctionVariables.boardModifyOptions.AddCard,
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
            />
        </DialogContent><DialogActions>
                <Button onClick={addCard}>Add Card</Button>
                <Button onClick={handleFunction}>Cancel</Button>
            </DialogActions></>
    )
}
