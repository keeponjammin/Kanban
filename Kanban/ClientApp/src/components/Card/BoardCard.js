import { Card, CardActions, CardContent, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

const BoardCard = ({props}) => {
  const ParentFunctionProps = {
    option: props.boardModifyOptions.RemoveCard,
    id: props.component.id,
    parent: props.parent ?? null,
}
  return (
    <Card
      sx={{ m: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.component.title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Delete forever" onClick={() => props.parentFunction(ParentFunctionProps)}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BoardCard
