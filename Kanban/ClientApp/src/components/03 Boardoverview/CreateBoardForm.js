import React from 'react';
import useStateContext from '../../hooks/useStateContext';
import useForm from '../../hooks/userForm';
import { ENDPOINTS, createAPIEndpoint } from '../../api';
import initialData from '../04 Board/InitialData';
import BoardForm from './BoardForm';

const getFreshModel = () => ({
    boardTitle: '',
    boardDescription: '',
    boardCreatedBy: '',
});

const getBoardData = (boardId) => ({
    boardId: boardId,
    data: JSON.stringify(initialData),
});

export default function CreateBoardForm({ formProps }) {
    const { context, setContext } = useStateContext();
    const { values, errors, setErrors, handleInputChange } = useForm(getFreshModel);

    const handleFunction = () => {
        formProps.formFunction();
    };

    const addBoard = (e) => {
        e.preventDefault();
        if (validate()) {
            values.boardCreatedBy = context.userName ?? '';
            createAPIEndpoint(ENDPOINTS.boards)
                .post(values)
                .then((response) => {
                    if (response.data.boardId !== null) {
                        createAPIEndpoint(ENDPOINTS.boardData)
                            .post(getBoardData(response.data.boardId))
                            .catch((error) => console.log(error));
                    }
                    setContext({
                        boards: [...context.boards, response.data],
                    });
                    formProps.formFunction();
                })
                .catch((error) => console.log(error));
        }
    };

    const validate = () => {
        let temp = {};
        temp.boardTitle = values.boardTitle !== '' ? '' : 'Board title is required.';
        setErrors(temp);
        return Object.values(temp).every((x) => x === '');
    };

    return (
        <BoardForm
            values={values}
            errors={errors}
            handleInputChange={handleInputChange}
            onSubmit={addBoard}
            onCancel={handleFunction}
        />
    );
}
