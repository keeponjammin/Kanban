import { Box, ButtonGroup, IconButton } from '@mui/material'
import React, { useRef } from 'react'

import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ButtonDialog from '../01 General/ButtonDialog';
import ButtonProperties from '../Functions/ButtonProperties';
import AddSectionForm from './AddSectionForm';

const SectionEditButtonGroup = ({ props }) => {
    const ParentFunctionProps = (option) => {
        return {
            option: option,
            id: props.component.id,
            parent: props.parent ?? null,
        }
    }
    const childRef = useRef();
    return (
        <Box textAlign='center'>
            <ButtonGroup
                variant="contained"
                aria-label="small button group"
            >
                <IconButton
                    onClick={() => props.parentFunction(
                        ParentFunctionProps(props.boardModifyOptions.MoveSectionLeft))
                    }>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton
                    onClick={() => props.parentFunction(
                        ParentFunctionProps(props.boardModifyOptions.MoveSectionRight))
                    }>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton
                    onClick={() => childRef.current.handleClickOpen(
                        ButtonProperties(
                            props.parentFunction,
                            ParentFunctionProps(props.boardModifyOptions.RemoveSection),
                            'Deleting section',
                            'Are you sure you want to delete this section?'
                        )
                    )}
                >
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton
                    onClick={() => childRef.current.handleClickOpen({
                        function: props.parentFunction,
                        variables: props,
                        title: 'Add Section',
                        description: 'Fill in the following form to create a new section',
                        form: <AddSectionForm />,
                    })}
                >
                    <AddIcon />
                </IconButton>
            </ButtonGroup>
            <ButtonDialog ref={childRef} />
        </Box>
    )
}

export default SectionEditButtonGroup