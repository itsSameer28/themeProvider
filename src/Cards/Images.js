import React from "react";
import { Box } from "@material-ui/core";
import { Card } from "@material-ui/core";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
export default function ImgMediaCard() {

  return (
    <Box  display="flex" justifyContent = 'space-between' margin='42px'>
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Introduce:-
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Hii
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Introduce:-
            </Typography>
            <Typography variant="body2" color="textSecondary">
            hii
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Introduce:-
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Hiiii 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div >
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Intro
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Hiiii 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div >
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Intro
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Hiiii 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    <div >
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Intro
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Hiiii 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </div><br/>
  <div >
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Intro
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Hiiii 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
</div>
  
    </Box>
  );
}
