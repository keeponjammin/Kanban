import { Card, CardActions, CardContent, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

const BoardCard = ({props}) => {
  return (
    <Card
      sx={{ m: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.cardProperties.title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Delete forever" onClick={() => props.parentFunction(props.cardProperties.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BoardCard
