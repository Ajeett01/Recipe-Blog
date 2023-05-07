import {
  CardMedia,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Category from "../categoryList/Category";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions"
import axios from "axios";
import { useParams } from "react-router-dom"

const DetailsPage = () => {

  const [blogDetails, setblogDetails] = useState([])
  const [postIngredients, setpostIngredients] = useState('')

  let {slug} = useParams()

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://127.0.0.1:8000/api/blogs/${slug}`)
        setblogDetails(res.data)
        setpostIngredients(res.data.ingredients)
      } catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[slug])

  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        {blogDetails.title}
      </Typography>
      <Typography variant="body1" align="center" color={"GrayText"} p={4}>
      Discover a world of mouth-watering flavors and culinary delights with our recipe website, where every dish is a feast for the eyes and a treat for the taste buds.
      </Typography>
      <Typography variant="h6" align="center" m={2}>
      {blogDetails.content}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={blogDetails.image}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="center" m={2} color={"red"}>
      {blogDetails.contentTwo}
      </Typography> 
      <List>
        {postIngredients.split(',').map((ingredients)=>
        <ListItemButton>
        <ListItemIcon>
          <DoubleArrowIcon />
        </ListItemIcon>
        <ListItemText primary={ingredients} />
      </ListItemButton>)}     
      </List>
      <Typography variant="body1" align="center" m={2}>
        Thanks for visiting our website !
      </Typography>
      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like
      </Typography>
      <Suggestions/>
    </Container>
  );
};


export default DetailsPage;
