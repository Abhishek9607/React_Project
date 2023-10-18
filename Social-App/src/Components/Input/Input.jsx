import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function Input() {
  return (
    <div>
        <Box sx={{mt: '1rem'}}>
           <TextField  fullWidth id="outlined-basic" label="image url..." variant="outlined" />
           <TextField  sx={{mt: '1rem', mb: '1rem'}} fullWidth id="outlined-basic" label="text...." variant="outlined" />
           <Button  variant="contained" endIcon={<SendIcon />}> Upload </Button>
        </Box>
        
    </div>
  )
}

export default Input