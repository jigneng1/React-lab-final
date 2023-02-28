import { Box } from "@mui/material";
import Home from "../components/Home";
import BottomNav from "../components/BottomNav";

function TodayPage() {
  const wrapperStyle = {
    display: { md: "flex" },
    flexDirection: { md: "row" },
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  const todayBoxStyle = {
    backgroundColor: "#a08bff",
    height: { xs: "90%", md: "604px" },
    width: { xs: "100%", md: "580px" },
    margin: { md: "20px" },
    borderRadius: {md:"20px"},
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // For responsive
  const homeStyle = {
    display: { xs: "none", md: "block" },
  };

  // For responsive
  const navbarStyle = {
    display: { md: "none" },
  };

  return (
    // Wrapper for centering component
    <Box sx={wrapperStyle}>
      {/* Profile + Navbar only on desktop */}
      <Box sx={homeStyle}>
        <Home />
      </Box>

      {/* Today Box */}
      <Box sx={todayBoxStyle}>
        <h1 style={{ color: "white" }}>This is Today</h1>
      </Box>

      {/* Mobile navbar */}
      <Box sx={navbarStyle}>
        <BottomNav />
      </Box>
    </Box>
  );
}
export default TodayPage;
