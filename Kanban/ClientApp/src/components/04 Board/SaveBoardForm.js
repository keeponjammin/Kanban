import { Box, Button, DialogActions } from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import useStateContext, { ContextProvider } from '../../hooks/useStateContext';
import { ENDPOINTS, createAPIEndpoint } from '../../api';

export default function SaveBoardForm({ formProps }) {

    const { context, setContext } = useStateContext();

    const validate = () => {
        let temp = {}
        return Object.values(temp).every(x => x === "")
    }

    const boardData = () => ({
        boardDataId: context.boardDataIndex,
        boardData: {
            boardDataId: context.boardDataIndex,
            boardId: context.selectedBoardIndex,
            data: JSON.stringify(context.data),
        }

    })
    const saveBoard = e => {
        e.preventDefault();
        if (validate()) {
            createAPIEndpoint(ENDPOINTS.boardData)
                .put(boardData().boardDataId, boardData().boardData)
                .then(response => {
                    console.log(response);
                    setContext({
                    })
                    formProps.formFunction()
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <form noValidate autoComplete="off" onSubmit={saveBoard}>
            <DialogActions>
                <Button type="submit">I'm sure</Button>
            </DialogActions>
        </form>
    )
}
