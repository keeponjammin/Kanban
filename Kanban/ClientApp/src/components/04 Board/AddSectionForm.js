import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function AddSectionForm({ formProps }) {
  const [inputText, setInputText] = useState('');

  const handleFunction = () => {
    formProps.formFunction();
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addSection = () => {
    const { additionalFunction, additionalFunctionVariables } = formProps;
    console.log(formProps);
    formProps.function({
      option: formProps.variables.boardModifyOptions.AddSection,
      value: inputText,
    });

    formProps.formFunction();
  };

  return (
    <>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Section title"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={addSection}>Add Section</Button>
        <Button onClick={handleFunction}>Cancel</Button>
      </DialogActions>
    </>
  );
}
