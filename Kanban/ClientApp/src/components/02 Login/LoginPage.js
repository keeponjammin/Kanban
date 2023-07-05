import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Center from '../01 General/Center';
import LoginForm from './LoginForm';
import header from '../../images/header.jpg';

export default function LoginPage({ values, errors, handleInputChange, onSubmit }) {
    return (
        <Center>
            <Card sx={{ width: '400px' }}>
                <CardMedia component="img" height="200" image={header} alt="Kanban header image" />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Kanban
                    </Typography>
                    <LoginForm
                        values={values}
                        errors={errors}
                        handleInputChange={handleInputChange}
                        onSubmit={onSubmit}
                    />
                </CardContent>
            </Card>
        </Center>
    );
}
