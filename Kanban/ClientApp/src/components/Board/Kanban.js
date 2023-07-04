import React, { useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import BoardCard from '../Card/BoardCard'
import { Box, Grid, Typography } from '@mui/material'
import useStateContext from '../../hooks/useStateContext'
import { ENDPOINTS, createAPIEndpoint } from '../../api'
import InitialData from '../InitialData'
import AddCardButton from './AddCardButton'
import SectionEditButtonGroup from './SectionEditButtonGroup'


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
    }, []);

    const onDragEnd = result => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            setBoardData(data);
            setContext({data : data});
            console.log(context.data);
        }
    }

    const BoardModifyOptions = {
        AddCard: "addCard",
        RemoveCard: "removeCard",
        MoveSectionLeft: "moveLeft",
        MoveSectionRight: "moveRight",
        RemoveSection: "removeSection",
        AddSectionLeft: "addLeft",
        AddSectionRight: "addRight",
    }


    const moveSection = (array, to, from) => {
        const item = array[from];
        array.splice(from, 1);
        array.splice(to, 0, item);
        return array;
    };
    const updateBoard = (param) =>{

        let modified = false;
        let index = data.findIndex(e => e.id === param?.parent?.id);
        if(index === -1){
            index = data.findIndex(e => e.id === param?.id)
        }
        switch (param.option){
            case BoardModifyOptions.AddCard:
                //todo: replace with form data
                let card =             
                {
                    id: 'ass',
                    title: 'Add a card nao!'
                };
                data[index].tasks = [...[...data[index].tasks], card];
                modified = true;
                break;

            case BoardModifyOptions.RemoveCard:
                data[index].tasks = [...data[index].tasks]
                    .filter(x => x.id !== param.id);
                modified = true;
                
                break;

            case BoardModifyOptions.MoveSectionLeft:
                moveSection(data, index -1, index);
                modified = true;
                break;

            case BoardModifyOptions.MoveSectionRight:
                moveSection(data, index +1, index);
                modified = true;
                break;
                
                case BoardModifyOptions.RemoveSection:
                    console.log('remove section:' + param.id);

                break;
            default:
                console.log('not implemented');
        }
        if(modified){
            //console.log('modified');
            setContext({data: data});
            setBoardData(data);
        }
    }

    const getUpdateBoardProps = (component, parent ) =>{
        return{
            parentFunction: updateBoard,
            boardModifyOptions: BoardModifyOptions,
            component: component,
            parent: parent,
        }
    }

    return (

        <DragDropContext onDragEnd={onDragEnd}>
            <Grid container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
            >
                {
                    data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {
                                (provided) => (
                                    <Grid item
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        sx={{ minWidth: '250px' }}
                                    >
                                        <SectionEditButtonGroup props={getUpdateBoardProps(section, null)}/>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <Box sx={{ textAlign: 'center', m: 1 }}>
                                                {section.title}
                                            </Box>
                                        </Typography>
                                        <div>
                                            {
                                                section.tasks.map((task, index) => (
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
                                                                { }
                                                                <BoardCard props={getUpdateBoardProps(task, section)}>
                                                                </BoardCard>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </div>
                                        <AddCardButton props={getUpdateBoardProps(section, null)} />
                                    </Grid>
                                )
                            }

                        </Droppable>
                    ))
                }
            </Grid>
        </DragDropContext>

    )

}