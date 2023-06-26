import React, { useEffect, useState } from 'react'
import useStateContext from '../../hooks/useStateContext'
import { Grid } from '@mui/material';
import { ENDPOINTS, createAPIEndpoint } from '../../api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Avatar, Button, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';


export default function OverviewGrid() {
    const {context, setContext} = useStateContext();
    const navigate = useNavigate();

    useEffect(() =>{
      createAPIEndpoint(ENDPOINTS.boards)
      .fetch()
      .then(response =>{
        setContext({boards: response.data})

      })
      .catch(error =>{console.log(error);})
    }, []);

    return (
      context.boards.length !== 0
      ?
      <Grid container 
      spacing={{ xs: 2, md: 3 }} 
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      >

        {context.boards.map((boardProperties, index) =>
          (
            <Grid item key={index}>
            <Card sx={{ maxWidth: 345, minWidth: 200 }}>
              <CardHeader
                  avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="User">
                      {boardProperties.boardCreatedBy.substring(0,1).toUpperCase()}
                  </Avatar>
                  }
                  title={boardProperties.boardTitle}
                  subheader={boardProperties.boardCreatedBy}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {boardProperties.boardDescription}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <Button size="small">Open</Button>
              <IconButton aria-label="Delete forever">
                <DeleteForeverIcon />
              </IconButton>
            </CardActions>
            </Card>
          </Grid>
          ))}

      </Grid>

      : null
    )
}
