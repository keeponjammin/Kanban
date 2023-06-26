import { Box, Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import Center from './Center'
import useForm from '../hooks/userForm'
import { ENDPOINTS, createAPIEndpoint } from '../api'
import header from '../images/header.jpg'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router-dom'

const getFreshModel = ()=>({
    userName: '',
    userEmail: '',
})

export default function Login() {
    
    const {context, setContext} = useStateContext();
    const navigate = useNavigate();

    const {
        values,
        //setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.users)
                .post(values)
                .then(response => {

                    setContext({ userId: response.data.userId, userName: response.data.userName})
                    navigate('/boardselect')
                })
                .catch(error => console.log(error))
    }

    const validate = ()=>{
        let temp = {}
        temp.userEmail = (/\S+@\S+\.\S+/).test(values.userEmail) ? "" : "Email is not valid."
        temp.userName = values.name !== "" ? "" : "Name is required."
        setErrors(temp)
        return Object.values(temp).every(x => x === "")
    }

    return (
        <Center>
            <Card sx={{width: '400px'}}>
            <CardMedia
                component="img"
                height="200"
                image= {header}
                alt="Paella dish"
            />
                <CardContent sx={{textAlign: 'center'}}>
                    <Typography variant="h3"
                        sx={{my: 3}}>
                            Kanban
                        </Typography>
                    <Box sx={{
                        '& .MuiTextField-root':{
                            margin: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label="Email" 
                                name="userEmail"
                                value={values.userEmail}
                                onChange={handleInputChange}
                                variant="outlined" 
                                {...(errors.userEmail && {error:true, helperText: errors.userEmail})}
                                />
                            <TextField
                                label= "Name"
                                name="userName"
                                value={values.userName}
                                onChange={handleInputChange}
                                variant="outlined" 
                                {...(errors.userName && {error:true, helperText: errors.userName})}
                                />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{
                                    width: '90%'
                                }}
                                >
                                Login
                            </Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}
