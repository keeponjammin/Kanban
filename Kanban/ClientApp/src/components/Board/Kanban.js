import React, { useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import BoardCard from '../Card/BoardCard'
import { Box, Button, Grid, Typography } from '@mui/material'
import useStateContext from '../../hooks/useStateContext'
import { ENDPOINTS, createAPIEndpoint } from '../../api'
import InitialData from '../InitialData'
import AddCardButton from './AddCardButton'


export default function Kanban(){
    const {context, setContext} = useStateContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(InitialData);
    useEffect(() =>{
        createAPIEndpoint(ENDPOINTS.boardData)
        .fetchById(context.selectedBoardIndex)
        .then(response =>{  
            setContext({boardDataIndex: response.data.boardDataId});
            setData(JSON.parse(response.data.data));
            setIsLoaded(true);     
        })
        .catch(error =>{console.log(error);})
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
  
              setData(data)
              setContext({
                data: data,
              })
  
              //add endpoint call where we update the card that was changed. Get boardid from context.
          }
      }

      const deleteCard = (id) =>{
        console.log('delete:' + id);
      }

      const addCard = (id) =>{
        console.log('add:' + id);
      }

      const getAddCardProps = (id) =>{
        return{
            parentFunction: addCard,
            section: id
        }
      }

      const getCardProps = (task) => {
        return {
            parentFunction: deleteCard,
            cardProperties: task,
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
                                          sx={{minWidth: '250px'}}
                                          >
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
                                                            {}
                                                              <BoardCard props = {getCardProps(task)}>
                                                              </BoardCard>
                                                          </div>
                                                      )}
                                                  </Draggable>
                                              ))
                                          }
                                          {provided.placeholder}
                                          <AddCardButton props = {getAddCardProps(section.id)}/>
                                          </div>
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