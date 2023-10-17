// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardLists from '../PostCardLists/PostCardLists';
import User from '../User/UserList';




export default function RowAndColumnSpacing() {
  return (
    <Box display='flex' justifyContent='center'sx={{ width: '100%', mt: '3rem'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={0} md={6}>
         <User/>
        </Grid>
        <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'} xs={12} md={6}>
         <PostCardLists/>
        </Grid>
      </Grid>
    </Box>
  );
}