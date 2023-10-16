import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';




function PostCard() {
  return (
    <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Abhi">
            R
          </Avatar>
        }
      
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://thumbs.dreamstime.com/b/silhouette-young-woman-meditating-sunset-meditation-doing-yoga-exercise-evening-41157985.jpg"
        alt="Paella dish"
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      
      </CardActions>
      
       
     
    </Card>
    </div>
  )
}

export default PostCard