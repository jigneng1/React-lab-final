import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <h1 className="task">Tasks</h1>
      <nav>
        <Link to="/todo" style={{ color: "black", textDecoration: "none" }}>
          <li>Incoming</li>
        </Link>
        <Link to="/today" style={{ color: "black", textDecoration: "none" }}>
          <li>Today</li>
        </Link>
        <Link to="/calendar" style={{ color: "black", textDecoration: "none" }}>
          <li>Calendar</li>
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
