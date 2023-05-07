import { Stack, styled } from "@mui/system";
import { Box, Container, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [cat, setCat] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get('http://127.0.0.1:8000/api/category/')
        setCat(res.data)
        console.log(res.data)
      } catch(error){
        console.log(error)
      }
    }
    fetchData() 
  },[])


  const StyledCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "100%",
    overflow: "hidden",
    width: "100px",

    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "border-box",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontsize: 20,
  });
  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <Stack Container direction={'row'} mt={4} spacing={3} ml={3}
    sx={{overflow:'auto '}}>

{cat.map(category=>(
  <Link href={`category/${category.id}`} sx={{textDecoration:'none'}}>
          <CardBox>
          <StyledCard sx={{ backgroundImage: `url(${category.image})` }}></StyledCard>
          <StyledTypography>{category.name}</StyledTypography>
        </CardBox>
        </Link>
        ))}      
    </Stack>
  );
};

export default Category;
