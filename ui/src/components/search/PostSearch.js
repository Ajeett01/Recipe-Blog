import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import PostCard from '../posts/PostsCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  minHeight:600,
  maxHeight:600,
  overflow:'auto',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PostSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [PostSearch, setPostSearch] = React.useState([])
  const [lookup, setLookup]= React.useState() 
  React.useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://127.0.0.1:8000/api/blogs/`)
        setPostSearch(res.data)
      } catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <div>
        <TextField sx={{display:{xs:"none", md:"flex"}}} color="warning" 
        label="Search Here!" variant="standard" onClick={()=>setOpen(true)} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField sx={{display:{xs:"none", md:"flex"}}} color="warning" 
        label="Search Here!" variant="standard"
        onChange={(e)=>setLookup(e.target.value)}
        />

        {PostSearch.filter((search)=>search.title.toLowerCase().includes(lookup)).map((search)=>
        (
        lookup.length > 0 ?
        <Grid item xs>
          <PostCard title={search.title} excerpt={search.excerpt} image={search.image} blogHref={`/details/${search.slug}`} myDirection={'flex'}/>
        </Grid>
        : ''
          ))}

        </Box>
      </Modal>
    </div>
  );
}
