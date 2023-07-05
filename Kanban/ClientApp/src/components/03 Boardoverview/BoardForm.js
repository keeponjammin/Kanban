import React from 'react';
import { Button, DialogActions, DialogContent, TextField } from '@mui/material';

export default function BoardForm({ values, errors, handleInputChange, onSubmit, onCancel }) {
    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    fullWidth
                    label="Board title"
                    name="boardTitle"
                    value={values.boardTitle}
                    onChange={handleInputChange}
                    variant="standard"
                    {...(errors.boardTitle && { error: true, helperText: errors.boardTitle })}
                />
                <TextField
                    margin="dense"
                    fullWidth
                    label="Board description"
                    name="boardDescription"
                    value={values.boardDescription}
                    onChange={handleInputChange}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit">Add Board</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </DialogActions>
        </form>
    );
}
