import { Box, ButtonGroup, IconButton } from '@mui/material'
import React, { useImperativeHandle, useRef } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ButtonDialog from '../ButtonDialog';

const SectionEditButtonGroup = ({ props }) => {
    const ParentFunctionProps = (option) => {
        return {
            option: option,
            id: props.component.id,
        }
    }
    const childRef = useRef();
    //console.log(childRef.current.handleClickOpen());
    //const { context, setContext } = useStateContext();
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
                        ParentFunctionProps(props.boardModifyOptions.AddSectionLeft))
                    }>
                    <AddIcon />
                </IconButton>
                <IconButton
                // onClick={() => props.parentFunction(ParentFunctionProps(props.boardModifyOptions.RemoveSection))}
                onClick={() => childRef.current.handleClickOpen({props})}
                >
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton
                    onClick={() => props.parentFunction(
                        ParentFunctionProps(props.boardModifyOptions.AddSectionRight))
                    }>
                    <AddIcon />
                </IconButton>
                <IconButton
                    onClick={() => props.parentFunction(
                        ParentFunctionProps(props.boardModifyOptions.MoveSectionRight))
                    }>
                    <ChevronRightIcon />
                </IconButton>
            </ButtonGroup>
            <ButtonDialog ref={childRef}  props={props}/>
        </Box>
    )
}

export default SectionEditButtonGroup