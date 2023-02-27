import { Box } from "@mui/system";
import Home from "../components/Home";

function HomePage() {
  const homeStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <Box sx={homeStyle}>
      <Home />
    </Box>
  );
}
export default HomePage;
