import { Box, Button} from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import useStateContext, { ContextProvider } from '../../hooks/useStateContext';
import { ENDPOINTS, createAPIEndpoint } from '../../api';

export default function SaveBoardForm() {

    const {context, setContext} = useStateContext();

    const validate = ()=>{
        let temp = {}
        //temp.boardTitle = values.boardTitle !== "" ? "" : "Board title is required."
        return Object.values(temp).every(x => x === "")
    }

    const boardData = () =>({
        boardDataId: context.boardDataIndex,
        boardData : {
            boardDataId: context.boardDataIndex,
            boardId: context.selectedBoardIndex,
            data: JSON.stringify(context.data),
        }

    })
    const saveBoard = e => {
        e.preventDefault();
        if (validate()){
            createAPIEndpoint(ENDPOINTS.boardData)
                .put(boardData().boardDataId, boardData().boardData)  
                .then(response => {
                    console.log(response);
                    setContext({
                        popup: false,
                    })
                })
                .catch(error => console.log(error))
        }
    }

  return (
    <Box sx={{
        '& .MuiTextField-root': {
            margin: 1,
            width: '100%'
        }
    }}>
        <form noValidate autoComplete="off" onSubmit={saveBoard}>
            <Button
                type="submit"
                variant="contained"
                size="large"
                color="success"
                startIcon={<SaveIcon />}
                sx={{
                    width: '100%',
                }}
            >
                Save board
            </Button>
        </form>
    </Box>
  )
}
