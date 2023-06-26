import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import useStateContext from '../../hooks/useStateContext';
import useForm from '../../hooks/userForm';
import { ENDPOINTS, createAPIEndpoint } from '../../api';
import AddIcon from '@mui/icons-material/Add';

const getFreshModel = ()=>({
    boardTitle: '',
    boardDescription: '',
    boardCreatedBy: '',
})

export default function CreateBoardForm() {

    const {context, setContext} = useStateContext();

    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const addBoard = e => {
        e.preventDefault();
        if (validate()){
            values.boardCreatedBy = context.userName ?? ''
            createAPIEndpoint(ENDPOINTS.boards)
                .post(values)
                .then(response => {
                    setContext({ 
                        popup: false,
                        boards : [...context.boards, response.data],
                    })
                })
                .catch(error => console.log(error))
        }
    }

    const validate = ()=>{
        let temp = {}
        temp.boardTitle = values.boardTitle !== "" ? "" : "Board title is required."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }

  return (
    <Box sx={{
          '& .MuiTextField-root': {
              margin: 1,
              width: '100%'
          }
      }}>
          <form noValidate autoComplete="off" onSubmit={addBoard}>
              <TextField
                  label="Board title"
                  name="boardTitle"
                  value={values.boardTitle}
                  onChange={handleInputChange}
                  variant="standard"
                  {...(errors.boardTitle && { error: true, helperText: errors.boardTitle })} />
              <TextField
                  label="Board description"
                  name="boardDescription"
                  value={values.boardDescription}
                  onChange={handleInputChange}
                  variant="standard" />
              <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="success"
                  startIcon={<AddIcon />}
                  sx={{
                      margin: 1,
                  }}
              >
                  Add Board
              </Button>
          </form>
      </Box>
  )
}
