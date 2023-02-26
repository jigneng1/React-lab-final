import { useState } from "react";
import CardList from "./CardList";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "solid 3px #b0a3f5",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function Todo() {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todoError, settodoError] = useState(true);

  //Modal Function
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //handle Function
  function handleAdd() {
    setTodo([...todo, todoInput]);
    setTodoInput("");
    handleClose();
  }

  function handleInput(e) {
    setTodoInput(e.target.value);
    if (e.target.value === null || e.target.value === "") {
      settodoError(true);
    }
    else{
      settodoError(false);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ color: "#fefffb", fontSize: "60px" }}>Incoming</h1>
        </div>
        <div
          style={{
            padding: "20px 30px",
            backgroundColor: "#b0a3f5",
            fontSize: "50px",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {todo.length}
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          background: "#fefffe",
          width: "500px",
          borderRadius: "10px",
          margin: "20px 0px",
          fontSize: "25px",
          color: "#7b7b7b",
        }}
        onClick={handleOpen}
      >
        + Add New Tasks
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            error={todoError}
            id="todo"
            label="What to you want to do ?"
            variant="outlined"
            onChange={(e) => handleInput(e)}
          />
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{ margin: "20px 0px 0px 0px" }}
            disabled={todoError}
          >
            Add
          </Button>
        </Box>
      </Modal>
      {todo.map((item,index) => {
        return <CardList todo={item} key={index} setState ={setTodo} state={todo}/>;
      })}
    </div>
  );
}
export default Todo;
