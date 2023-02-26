import { Checkbox } from "@mui/material";
function CardList({ todo, setState, state }) {
  function handleCheck(e) {
    if (e.target.checked) {
      const result = state.filter((item) => item !== todo);
      setState(result);
    }
  }
  return (
    <div
      style={{
        padding: "10px 20px",
        background: "#fefffe",
        width: "500px",
        borderRadius: "10px",
        margin: "20px 0px",
        fontSize: "25px",
        color: "#7b7b7b",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox onChange={(e) => handleCheck(e)} />
      <div>{todo}</div>
    </div>
  );
}
export default CardList;
