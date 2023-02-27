import { Box } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import Home from "./components/Home";
import BottomNav from "./components/MobileNav";
import Todo from "./components/Todo";
function App() {
  return (
    <Box>
      <Container sx={{display:{xs:"none",md:"block"}}}>
        <div className="App">
          <div className="home">
            <Home />
          </div>
          <div className="todo">
            <Todo />
          </div>
        </div>
      </Container>
      <Box
        sx={{
          display: {xs:"flex",md:"none"},
          flexDirection: "column-reverse",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#a08bff",
            height: "100vh",
          }}
        >
          <Todo />
        </Box>
        <BottomNav />
      </Box>
    </Box>
  );
}

export default App;
