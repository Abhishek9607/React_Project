import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




function PostCard({image, content, authorFirstName, publishDate }) {
  const [isLiked, setIsLiked] = useState(false);
  // console.log(image);
  return (
    <div>
          <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Abhi">
            {authorFirstName.substring(0, 1)}
          </Avatar>
        }
      
        title={authorFirstName}
        subheader={publishDate}
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
   
        <IconButton aria-label="add to favorites"  onClick={() => setIsLiked(!isLiked)}>
          {
          (isLiked) ? <FavoriteIcon sx={{ color: red[500] }} /> :    <FavoriteBorderIcon />
          }
        
       
        </IconButton>
      
      </CardActions>
      
       
     
    </Card>
    </div>
  )
}

export default PostCard