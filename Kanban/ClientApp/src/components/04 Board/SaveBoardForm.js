import { Box, Button, DialogActions } from '@mui/material'
import React from 'react'
import useStateContext from '../../hooks/useStateContext';
import { ENDPOINTS, createAPIEndpoint } from '../../api';

export default function SaveBoardForm({ formProps }) {

    const { context, setContext } = useStateContext();

    const boardData = () => ({
        
        boardDataId: context.boardDataIndex,
        boardData: {
            boardDataId: context.boardDataIndex,
            boardId: context.selectedBoardIndex,
            data: JSON.stringify(formProps.data),
        }

    })
    const saveBoard = e => {
        e.preventDefault();
            createAPIEndpoint(ENDPOINTS.boardData)
                .put(boardData().boardDataId, boardData().boardData)
                .then(() => {
                    formProps.formFunction()
                })
                .catch(error => console.log(error))
    }

    return (
        <form noValidate autoComplete="off" onSubmit={saveBoard}>
            <DialogActions>
                <Button type="submit">I'm sure</Button>
            </DialogActions>
        </form>
    )
}
