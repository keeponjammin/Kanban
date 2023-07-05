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
        formProps.formFunction();
        console.log(formProps);
        formProps.function({
            option: formProps.variables.boardModifyOptions.AddCard,
            id: formProps.variables.component.id,
            parent: formProps.variables?.parent?.id,
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
