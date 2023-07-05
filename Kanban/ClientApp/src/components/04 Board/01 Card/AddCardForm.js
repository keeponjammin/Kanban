import React, { useState } from 'react';
import { Button, DialogActions, DialogContent, TextField } from '@mui/material';

const AddCardForm = ({ formProps }) => {
    const [inputText, setInputText] = useState('');

    const handleFunction = () => {
        formProps.formFunction();
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const addCard = () => {
        formProps.formFunction();
        const { variables, function: formFunction } = formProps;
        const { boardModifyOptions, component, parent } = variables;

        formFunction({
            option: boardModifyOptions.AddCard,
            id: component.id,
            parent: parent?.id,
            value: inputText,
        });
    };

    return (
        <>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Card description"
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={addCard}>Add Card</Button>
                <Button onClick={handleFunction}>Cancel</Button>
            </DialogActions>
        </>
    );
};

export default AddCardForm;
