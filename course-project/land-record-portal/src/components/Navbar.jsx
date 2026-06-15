import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">

      <h2>Land Records Portal</h2>
      {user && <p>Welcome, {user}</p>}

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/mutation">Mutation</Link></li>
        <li><Link to="/track">Track Status</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;
