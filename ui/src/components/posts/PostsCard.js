import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import burger from "../../static/burger1.jpg"

const PostCard = ({myDirection, title, excerpt,blogHref,image}) => {
  return (
    <Box mt={3}>
      <Link href={blogHref} sx={{ textDecoration: "none" }}>
        <Card>
          <Box sx={{ display: {xs:"block", sm: `${myDirection}`, md: `${myDirection}`}, flexDirection: "row" }}>
            <CardMedia  
              component={"img"}
              height="300"
              image={image}
              alt="burger_image"
              sx={{
                width: "400px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.8,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
          <CardContent sx={{minHeight:'260px'}}>
            <Typography gutterBottom variant="h4" align="center">
              {title} 
            </Typography> 
            <Typography gutterBottom variant="h6" color="text.secondary">
              {excerpt}
            </Typography>
            <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Share
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Learn More
                </Button>
              </CardActions>
          </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostCard;