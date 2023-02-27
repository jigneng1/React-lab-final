import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Profile from "./Profile";

function Home() {
  return (
    <Box>
      <Profile />
      <Navbar />
    </Box>
  );
}
export default Home;
