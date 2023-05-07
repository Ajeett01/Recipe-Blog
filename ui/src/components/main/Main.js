import { Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Posts from "../posts/Posts";
import Rightbar from "../rightbar/Rightbar";
import Hero from "../hero/Hero";

const Main = () => {
  return (
    <><Hero/>
    <Container>
      <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={3}>
          <Posts />
        </Box>
        <Box flex={1} sx={{ sx: "none", md: "block" }}>
          <Rightbar />
        </Box>
      </Stack>
    </Container>
    </>
  );
};

export default Main;
