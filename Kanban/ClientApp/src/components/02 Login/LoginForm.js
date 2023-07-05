import React from 'react';
import { Box, Button, TextField } from '@mui/material';

export default function LoginForm({ values, errors, handleInputChange, onSubmit }) {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
            sx={{
                '& .MuiTextField-root': {
                    margin: 1,
                    width: '90%',
                },
            }}
        >
            <TextField
                label="Email"
                name="userEmail"
                value={values.userEmail}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.userEmail}
                helperText={errors.userEmail}
            />
            <TextField
                label="Name"
                name="userName"
                value={values.userName}
                onChange={handleInputChange}
                variant="outlined"
                error={!!errors.userName}
                helperText={errors.userName}
            />
            <Button type="submit" variant="contained" size="large" sx={{ width: '90%' }}>
                Login
            </Button>
        </Box>
    );
}
