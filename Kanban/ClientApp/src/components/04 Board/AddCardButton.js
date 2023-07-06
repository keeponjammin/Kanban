import { Button } from '@mui/material';
import React, { useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ButtonDialog from '../01 General/ButtonDialog';
import AddCardForm from './01 Card/AddCardForm';

const AddCardButton = ({ props }) => {
    const childRef = useRef();

    const openAddCardDialog = () => {
        const { parentFunction } = props;
        childRef.current.handleClickOpen({
            function: parentFunction,
            variables: props,
            title: 'Add card',
            description: 'Fill in the following form to create a new card',
            form: <AddCardForm />,
        });
    };

    return (
        <>
            <Button
                variant="outlined"
                color="success"
                startIcon={<AddIcon />}
                sx={{ width: '100%' }}
                onClick={openAddCardDialog}
            >
                Add Card
            </Button>
            <ButtonDialog ref={childRef} />
        </>
    );
};

export default AddCardButton;
