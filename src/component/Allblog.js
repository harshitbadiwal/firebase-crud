import { Grid } from "@mui/material"

import {Card,CardActionArea,CardMedia,CardContent,Typography,Button, CardActions} from "@mui/material"
import react from "react"
import './Allblog.css'

const Allblog=()=>{
  return<>
<Grid>

 <Card className="card" >
      <CardActionArea>
        <CardMedia
        className="card-img"
          component="img"
          
          value="title"
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h5" >
           title
          </Typography>
          <Typography  variant="h8" >
          discrip
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <Button size="small" color="primary" >addBlog</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
</Grid>

  </>
}

export default Allblog