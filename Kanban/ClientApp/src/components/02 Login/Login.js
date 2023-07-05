import React from 'react';
import useStateContext from '../../hooks/useStateContext';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/userForm';
import { ENDPOINTS, createAPIEndpoint } from '../../api';
import LoginPage from './LoginPage';

const getFreshModel = () => ({
    userName: '',
    userEmail: '',
});

export default function Login() {
    const { context, setContext } = useStateContext();
    const navigate = useNavigate();

    const { values, errors, setErrors, handleInputChange } = useForm(getFreshModel);

    const login = (e) => {
        e.preventDefault();
        if (validate()) {
            createAPIEndpoint(ENDPOINTS.users)
                .post(values)
                .then((response) => {
                    setContext({
                        userId: response.data.userId,
                        userName: response.data.userName,
                    });
                    navigate('/boardoverview');
                })
                .catch((error) => console.log(error));
        }
    };

    const validate = () => {
        let temp = {};
        temp.userEmail = /\S+@\S+\.\S+/.test(values.userEmail) ? '' : 'Email is not valid.';
        temp.userName = values.userName !== '' ? '' : 'Name is required.';
        setErrors(temp);
        return Object.values(temp).every((x) => x === '');
    };

    return (
        <LoginPage
            values={values}
            errors={errors}
            handleInputChange={handleInputChange}
            onSubmit={login}
        />
    );
}
