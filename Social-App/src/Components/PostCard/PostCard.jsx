import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardContent, Typography } from '@mui/material';




function PostCard({image, content, authorFirstName }) {
  return (
    <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Abhi">
            {/* {authorFirstName.substring(0, 1)} */}
          </Avatar>
        }
      
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      {(image.length > 0) ?
        (<CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        /> )
        : null
      }
      <CardContent>
        <Typography>
          {content}
        </Typography>
      </CardContent>
      
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