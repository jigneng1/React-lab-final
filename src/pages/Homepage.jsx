import { Box } from "@mui/system";
import Home from "../components/Home";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Home />
    </Box>
  );
}
export default HomePage;
