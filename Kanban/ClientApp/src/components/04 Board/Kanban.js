import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import useStateContext from '../../hooks/useStateContext'
import { ENDPOINTS, createAPIEndpoint } from '../../api'
import InitialData from './InitialData'
import AddCardButton from './AddCardButton'
import SectionEditButtonGroup from './SectionEditButtonGroup'
import BoardCard from './01 Card/BoardCard'
import BoardModifyOptions from '../01 General/BoardModifyOptions'
import updateBoard from '../Functions/UpdateBoard'
import DialogActionButton from '../01 General/DialogActionButton'
import SaveBoardForm from './SaveBoardForm'
import SaveIcon from '@mui/icons-material/Save';


export default function Kanban() {
    const { context, setContext } = useStateContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setBoardData] = useState(InitialData);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.boardData)
            .fetchById(context.selectedBoardIndex)
            .then(response => {
                setContext({ boardDataIndex: response.data.boardDataId });
                setBoardData(JSON.parse(response.data.data));
                setIsLoaded(true);
            })
            .catch(error => { console.log(error); })
    }, [context.selectedBoardIndex]);

    function onDragEnd(result) {
        if (!result.destination) return
        const { source, destination } = result
        const newData = [...data]
        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = newData.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = newData.findIndex(e => e.id === destination.droppableId)

            const sourceCol = newData[sourceColIndex]
            const destinationCol = newData[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            newData[sourceColIndex].tasks = sourceTask
            newData[destinationColIndex].tasks = destinationTask

            if (data !== newData) {
                setBoardData(newData)
            }
        }
    }

    function getUpdateBoardProps(component, parent) {
        return {
            parentFunction: getUpdateBoard,
            boardModifyOptions: BoardModifyOptions,
            component: component,
            parent: parent,
        }
    }

    function getUpdateBoard(param) {
        const newData = updateBoard(param, data);
        if (data !== newData) {
            setBoardData(newData)
        }
    }
    return (

        <>
            <Typography variant="h2">
                <Box sx={{ textAlign: 'center', m: 1 }}>{context.selectedBoardTitle}</Box>
                <Box sx={{ textAlign: 'center', m: 1 }}>{context.selectedBoardDescription}</Box>
            </Typography>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <Grid item
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    sx={{ minWidth: '250px' }}
                                >
                                    <SectionEditButtonGroup props={getUpdateBoardProps(section, null)} />
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Box sx={{ textAlign: 'center', m: 1 }}>
                                            {section.title}
                                        </Box>
                                    </Typography>
                                    <div>
                                        {section.tasks.map((task, index) => (
                                            <Draggable
                                                key={task.id}
                                                draggableId={task.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            opacity: snapshot.isDragging ? '0.5' : '1'
                                                        }}
                                                    >

                                                        <BoardCard props={getUpdateBoardProps(task, section)}>
                                                        </BoardCard>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                    <AddCardButton props={getUpdateBoardProps(section, null)} />
                                </Grid>
                            )}

                        </Droppable>
                    ))}
                </Grid>
            </DragDropContext><DialogActionButton props={{
                title: 'Save board',
                description: 'Are you sure you wish to save?',
                color: 'primary',
                icon: <SaveIcon sx={{ mr: 1 }} />,
                form: <SaveBoardForm />,
                data: data,
            }} /></>


    )

}