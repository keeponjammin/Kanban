import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

const BoardCard = props => {
    return(
      <Card
      sx={{m: 1}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.children}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default BoardCard
